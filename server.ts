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
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        return res.status(400).json({ error: "Invalid messages format" });
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        // Fallback response if API key is not configured yet
        const lastMsg = messages[messages.length - 1]?.content || "";
        return res.json({
          reply: `[TEKMEN AI Simulated Mode] Thanks for reaching out about "${lastMsg}". TEKMEN Revolution is a premier technology ecosystem consisting of TEKMEN Agency (digital presence & web apps), TEKMEN Innovation Solutions (real-world tech & R&D), TEKMEN Team (global competitive engineering), and TEKMEN Community (5,000+ tech builders). To enable live Gemini AI intelligence, please provide your GEMINI_API_KEY in the Secrets panel.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are TEKMEN AI, the official intelligent assistant for TEKMEN Revolution.
TEKMEN Revolution is a leading technology ecosystem comprising:
1. TEKMEN Agency: Helping businesses build a stronger digital presence, web/mobile apps, UI/UX design, and brand acceleration.
2. TEKMEN Innovation Solutions: Building and delivering enterprise technology, IoT systems, AI models, and custom software.
3. TEKMEN Team: Competing in international hackathons and representing TEKMEN on the global stage.
4. TEKMEN Community: A vibrant network of 5,000+ developers, designers, and innovators.
5. TEKMEN AI: Advanced artificial intelligence division creating smart models and automation tools.

Your role is to guide visitors, answer questions about TEKMEN services, help them join the community, propose tech solutions for their business, or direct them to the right division with a professional, friendly, and sophisticated tone. Keep answers concise, helpful, and aligned with TEKMEN's brand identity.`;

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

      const reply = response.text || "I'm here to help you navigate the TEKMEN Revolution ecosystem. How can we assist you today?";
      res.json({ reply });

    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ 
        error: "Failed to generate AI response", 
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
