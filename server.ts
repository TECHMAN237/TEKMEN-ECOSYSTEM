import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for TEKMEN AI Assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages, currentView, language } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if API key is not configured yet
        const lastMsg = messages[messages.length - 1]?.content || "";
        const isFr = language === 'FR';
        return res.json({
          reply: isFr 
            ? `[Mode Simulé TEKMEN AI] Merci pour votre message concernant "${lastMsg}". TEKMEN Revolution est un écosystème technologique comprenant TEKMEN Agency (https://tekmen-revolution-za59.vercel.app/), TEKMEN Innovation Solutions, TEKMEN Team (6 membres officiels, hackathons), et TEKMEN Community (fondé par Steeve Zali). Pour activer l'intelligence artificielle Gemini en direct, veuillez configurer votre GEMINI_API_KEY.`
            : `[TEKMEN AI Simulated Mode] Thanks for reaching out about "${lastMsg}". TEKMEN Revolution is a premier technology ecosystem consisting of TEKMEN Agency (https://tekmen-revolution-za59.vercel.app/), TEKMEN Innovation Solutions, TEKMEN Team, and TEKMEN Community (founded by Steeve Zali). To enable live Gemini AI intelligence, please configure your GEMINI_API_KEY.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const isFr = language === 'FR';
      const systemInstruction = `You are TEKMEN AI, the official intelligent assistant for TEKMEN Revolution.
TEKMEN Revolution is a leading technology ecosystem comprising:
1. TEKMEN Agency: Helping businesses build a stronger digital presence, web/mobile apps, UI/UX design. Official website: https://tekmen-revolution-za59.vercel.app/
2. TEKMEN Innovation Solutions: R&D and enterprise technology, IoT systems, AI models, and custom software.
3. TEKMEN Team: Elite competitive engineering squads competing in international hackathons. Main Team page displays the 6 official core members, with a directory for all members.
4. TEKMEN Community: A vibrant network of 5,000+ developers, designers, and innovators (WhatsApp, Discord, and upcoming platform). Founded and led by Steeve Zali (Founder & CEO).

Current User Context:
- Current Page/View: ${currentView || 'home'}
- Selected Language: ${language || 'EN'} (Respond in ${isFr ? 'French' : 'English'})

Your role is to guide visitors, answer questions about TEKMEN services, help them join the community, direct them to TEKMEN Agency, introduce the founder Steeve Zali when asked, or direct them to the appropriate section with a professional, friendly, and sophisticated tone. Keep answers concise, helpful, and aligned with TEKMEN's brand identity.`;

      // Convert messages to Gemini contents format
      const contents = messages.map((m: { role: string; content: string }) => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const reply = response.text || (isFr ? "Je suis là pour vous aider à naviguer dans l'écosystème TEKMEN Revolution." : "I'm here to help you navigate the TEKMEN Revolution ecosystem. How can we assist you today?");
      res.json({ reply });

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      const isFr = req.body?.language === 'FR';
      res.status(500).json({ 
        error: "Failed to generate AI response", 
        reply: isFr ? "Je rencontre actuellement un problème de connexion. Veuillez réessayer dans un instant." : "I'm having trouble connecting right now. Please try again in a moment.",
        details: error.message || "Unknown error" 
      });
    }
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*all', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`TEKMEN Revolution server running on http://localhost:${PORT}`);
  });
}

startServer();
