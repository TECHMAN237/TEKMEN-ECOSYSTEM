import { ProjectItem, EcosystemCardData, ProductItem, TeamSquad, TeamMember, AchievementItem, EventItem, CredentialBadge } from './types';

export const AGENCY_URL = "https://tekmen-revolution-za59.vercel.app/";

export const ECOSYSTEM_CARDS: EcosystemCardData[] = [
  {
    id: 'agency',
    title: 'TEKMEN Agency',
    subtitle: 'Helping businesses build a stronger digital presence.',
    description: 'Specialized digital agency offering cutting-edge web development, UI/UX design, cloud architecture, and brand acceleration for high-growth enterprises.',
    ctaText: 'Explore Agency',
    iconName: 'Briefcase',
    colorScheme: 'violet',
  },
  {
    id: 'solutions',
    title: 'TEKMEN Innovation Solutions',
    subtitle: 'Building and delivering technology that solves real-world problems.',
    description: 'R&D and enterprise engineering unit creating advanced software suites, IoT infrastructure, custom AI models, and scalable cloud platforms.',
    ctaText: 'Explore Solutions',
    iconName: 'Box',
    colorScheme: 'blue',
  },
  {
    id: 'team',
    title: 'TEKMEN Team',
    subtitle: 'Competing, innovating and representing TEKMEN on the global stage.',
    description: 'Elite competitive engineering squads participating in international hackathons, algorithmic challenges, and open-source contributions.',
    ctaText: 'Meet the Team',
    iconName: 'Trophy',
    colorScheme: 'red',
  },
  {
    id: 'community',
    title: 'TEKMEN Community',
    subtitle: 'Connecting people who are passionate about technology.',
    description: 'A vibrant global network of over 5,000 developers, designers, founders, and tech enthusiasts sharing knowledge, mentorship, and opportunities.',
    ctaText: 'Join Community',
    iconName: 'Users',
    colorScheme: 'indigo',
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'nexa-ai',
    name: 'Nexa AI Assistant',
    tagline: 'AI-powered personal mobile management assistant.',
    category: 'AI',
    description: 'Advanced context-aware AI assistant optimized for mobile workflows, automated task scheduling, and intelligent document synthesis.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Python', 'PyTorch', 'Gemini API'],
    status: 'Live',
    metrics: '120k+ Active Users',
    problem: 'Professionals lose hours daily coordinating meetings, summarizing notes, and searching across disjointed mobile applications.',
    solution: 'Nexa AI unifies communication streams and automates scheduling and synthesis directly on device and in cloud securely.',
    features: [
      'Voice-to-action natural language transcription',
      'Automated smart meeting summaries & action item routing',
      'Encrypted local vector search for personal files',
      'Cross-platform synchronization with zero latency'
    ],
    architecture: 'Edge-cached transformer models paired with scalable FastAPI backend clusters and end-to-end AES-256 encryption.',
    roadmap: [
      'Q3 2026: Multi-language real-time translation support',
      'Q4 2026: Offline-first on-device quantization for low-power smartphones',
      'Q1 2027: Enterprise team workspace synchronization'
    ]
  },
  {
    id: 'analytics-platform',
    name: 'PulseAnalytics Pro',
    tagline: 'Real-time enterprise data visualization and predictive BI.',
    category: 'Web',
    description: 'Comprehensive business intelligence suite offering instantaneous streaming telemetry, custom widget dashboards, and predictive forecasting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'TimescaleDB'],
    status: 'Live',
    metrics: '+45% Data throughput',
    problem: 'Enterprise executives struggle with siloed data sources, delayed batch reports, and inflexible legacy reporting tools.',
    solution: 'PulseAnalytics Pro ingests millions of events per second, rendering sub-second interactive dashboards with predictive AI insights.',
    features: [
      'Drag-and-drop executive widget builder',
      'Sub-second query response on billions of rows',
      'Automated anomaly detection alerts via webhook and SMS',
      'Role-based granular access control and audit logs'
    ],
    architecture: 'Distributed microservices architecture utilizing Kafka streaming pipelines, TimescaleDB, and a React virtualized frontend.',
    roadmap: [
      'Q3 2026: Natural language query builder (Text-to-SQL)',
      'Q4 2026: Automated PDF executive briefing generation',
      'Q1 2027: Embedded white-label analytics SDK for partners'
    ]
  },
  {
    id: 'healthcare-plus',
    name: 'HealthCare+ Telemetry',
    tagline: 'Secure patient monitoring and telemedicine suite.',
    category: 'Mobile',
    description: 'HIPAA-compliant telehealth platform connecting remote patients with specialized care teams through encrypted video and real-time vital tracking.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'GraphQL', 'WebRTC', 'AWS HIPAA Cloud'],
    status: 'Live',
    metrics: '99.99% Uptime',
    problem: 'Remote patient monitoring is hindered by insecure data transmission, dropped video connections, and fragmented health records.',
    solution: 'HealthCare+ provides ultra-secure, low-bandwidth WebRTC video consultation paired with automated continuous vital sign logging.',
    features: [
      'End-to-end encrypted HD video consultations',
      'Wearable sensor Bluetooth integration (Apple Health, Fitbit)',
      'Automated triage nurse escalation algorithms',
      'Seamless electronic health record (EHR) export'
    ],
    architecture: 'AWS GovCloud infrastructure with zero-trust network boundaries, TURN/STUN relays for media streaming, and encrypted client stores.',
    roadmap: [
      'Q3 2026: AI-assisted early symptom screening questionnaire',
      'Q4 2026: Multi-provider hospital network referral exchange'
    ]
  },
  {
    id: 'smart-environment',
    name: 'EcoGrid IoT Suite',
    tagline: 'Urban air quality tracking and smart building energy optimization.',
    category: 'IoT',
    description: 'Scalable IoT sensor mesh network monitoring urban environmental parameters and dynamically optimizing building HVAC and energy consumption.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    technologies: ['MQTT', 'ESP32', 'TimescaleDB', 'React', 'Python'],
    status: 'Beta',
    metrics: '-30% Energy usage',
    problem: 'Commercial buildings waste significant energy on static climate control while urban air pollution remains unmonitored at street level.',
    solution: 'EcoGrid deploys low-power IoT nodes that dynamically regulate climate controls based on occupancy and real-time air quality metrics.',
    features: [
      'Mesh network resilience with automatic self-healing routing',
      'Machine learning predictive heating/cooling schedules',
      'Public open-data API for municipal sustainability tracking',
      'Real-time anomaly and filter replacement alerts'
    ],
    architecture: 'Edge IoT firmware on ESP32 running FreeRTOS, MQTT brokers, time-series database storage, and React web dashboard.',
    roadmap: [
      'Q3 2026: Solar panel integration and battery storage optimization',
      'Q4 2026: National carbon credit reporting automated module'
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = PRODUCTS_DATA.map(p => ({
  id: p.id,
  title: p.name,
  category: p.category as any,
  description: p.description,
  image: p.image,
  tags: p.technologies,
  metrics: p.metrics,
  client: 'Enterprise Partner',
  problem: p.problem,
  solution: p.solution,
  features: p.features,
  architecture: p.architecture,
  roadmap: p.roadmap
}));

export const STATISTICS_DATA = [
  { value: '5,000+', label: 'Community Members', icon: 'Users' },
  { value: '150+', label: 'Projects Completed', icon: 'Briefcase' },
  { value: '25+', label: 'Competitions Won', icon: 'Trophy' },
  { value: '15+', label: 'Countries Reached', icon: 'Globe' },
  { value: '100+', label: 'Tech Solutions Built', icon: 'Code' },
];

export const QUICK_QUESTIONS = [
  "What does TEKMEN Agency offer?",
  "Show me your technology solutions.",
  "How can I join the community?",
  "What projects has TEKMEN built?",
  "I need a website for my business.",
  "How can I join a hackathon team?"
];

export const OFFICIAL_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'mem-1',
    name: 'Dr. Aris Vance',
    role: 'Head of AI Research & Squad Alpha Lead',
    expertise: 'Machine Learning • Computer Vision • NLP',
    bio: 'Dr. Aris Vance leads the artificial intelligence R&D unit at TEKMEN, specializing in transformer optimization and autonomous diagnostic models.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    skills: ['PyTorch', 'Transformers', 'Computer Vision', 'Python'],
    projects: ['Nexa AI Assistant', 'HealthCare+ Telemetry'],
    competitions: ['Global AI Hackathon 2026 (1st Place)', 'NeuralVision Challenge'],
    achievements: ['Best Innovation Award 2026', 'Published 14 IEEE Papers'],
    socialLinks: { github: 'https://github.com', linkedin: 'https://linkedin.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'mem-2',
    name: 'Sarah Jenkins',
    role: 'Principal Cloud Architect',
    expertise: 'Cloud Scale • Kubernetes • Go • AWS',
    bio: 'Sarah designs resilient, high-throughput microservices architecture supporting millions of daily transactions across enterprise cloud deployments.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    skills: ['Go', 'Kubernetes', 'AWS', 'TimescaleDB'],
    projects: ['PulseAnalytics Pro', 'EcoGrid IoT Suite'],
    competitions: ['CloudScale Architecture Summit', 'Berlin DevOps Cup'],
    achievements: ['Keynote Speaker 2026', 'Zero-Downtime Migration Award'],
    socialLinks: { github: 'https://github.com', linkedin: 'https://linkedin.com' }
  },
  {
    id: 'mem-3',
    name: 'Liam O’Connor',
    role: 'Lead Frontend Engineer & UX Architect',
    expertise: 'React • TypeScript • WebAssembly • Design Systems',
    bio: 'Liam bridges the gap between complex backend systems and intuitive user interfaces, focusing on sub-second render performance and accessibility.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'WebAssembly'],
    projects: ['PulseAnalytics Pro', 'Nexa AI Assistant'],
    competitions: ['Global UI/UX Championship', 'Open Source Hackathon'],
    achievements: ['Design System Excellence 2025', 'Top 1% GitHub Contributor'],
    socialLinks: { github: 'https://github.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'mem-4',
    name: 'Elena Rostova',
    role: 'Senior Algorithm Engineer',
    expertise: 'C++ • Reinforcement Learning • Optimization',
    bio: 'Elena specializes in low-latency algorithmic execution and edge computing quantization for smart IoT and robotics platforms.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    skills: ['C++', 'Python', 'Edge Computing', 'MQTT'],
    projects: ['EcoGrid IoT Suite'],
    competitions: ['Algorithmic Trading Cup', 'IoT Edge Challenge'],
    achievements: ['Gold Medalist - Algorithmic Code Cup', 'IoT Innovation Patent'],
    socialLinks: { github: 'https://github.com', linkedin: 'https://linkedin.com' }
  },
  {
    id: 'mem-5',
    name: 'Aisha Patel',
    role: 'Chief Security & Compliance Officer',
    expertise: 'Zero Trust • Cryptography • HIPAA • Rust',
    bio: 'Aisha ensures all TEKMEN solutions meet rigorous enterprise security standards, end-to-end encryption, and regulatory compliance protocols.',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80',
    skills: ['Rust', 'Zero Trust Architecture', 'OAuth2', 'Penetration Testing'],
    projects: ['HealthCare+ Telemetry', 'PulseAnalytics Pro'],
    competitions: ['CyberShield Global CTF', 'SecureCloud Hackathon'],
    achievements: ['Certified Information Systems Security Professional', 'Zero Vulnerability Record'],
    socialLinks: { linkedin: 'https://linkedin.com' }
  },
  {
    id: 'mem-6',
    name: 'Marcus Chen',
    role: 'ML Ops & Infrastructure Engineer',
    expertise: 'Docker • TensorRT • Kafka • CI/CD',
    bio: 'Marcus automates the training, testing, and deployment pipeline for large-scale AI models across distributed GPU clusters.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    skills: ['Docker', 'Kubernetes', 'TensorRT', 'Apache Kafka'],
    projects: ['Nexa AI Assistant', 'PulseAnalytics Pro'],
    competitions: ['DevOps Automation Summit', 'AI Infrastructure Hackathon'],
    achievements: ['Fastest Pipeline Deployment Award 2026'],
    socialLinks: { github: 'https://github.com' }
  },
  {
    id: 'mem-7',
    name: 'Sofia Martinez',
    role: 'Product Strategy & Innovation Lead',
    expertise: 'Product Management • User Research • Agile Scale',
    bio: 'Sofia translates complex enterprise requirements into clear product roadmaps, ensuring every solution delivers maximum business impact.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    skills: ['Product Strategy', 'User Testing', 'Agile Methodologies', 'Analytics'],
    projects: ['All Ecosystem Products'],
    competitions: ['Startup Weekend Global', 'Product Innovation Cup'],
    achievements: ['Product Leader of the Year 2025'],
    socialLinks: { linkedin: 'https://linkedin.com' }
  },
  {
    id: 'mem-8',
    name: 'David Kim',
    role: 'Mobile Systems Engineer',
    expertise: 'React Native • Swift • Kotlin • Bluetooth Low Energy',
    bio: 'David builds high-performance cross-platform and native mobile applications that interface seamlessly with hardware sensors and wearable devices.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    skills: ['React Native', 'Swift', 'Kotlin', 'BLE'],
    projects: ['HealthCare+ Telemetry', 'Nexa AI Assistant'],
    competitions: ['Mobile Dev World Cup', 'Appathon 2025'],
    achievements: ['Editor’s Choice App Award', '1M+ Total Downloads'],
    socialLinks: { github: 'https://github.com', twitter: 'https://twitter.com' }
  },
  {
    id: 'mem-9',
    name: 'Zoe Alverez',
    role: 'Data Engineer & Analytics Specialist',
    expertise: 'SQL • Spark • TimescaleDB • ETL Pipelines',
    bio: 'Zoe constructs high-performance streaming data pipelines and time-series analytics databases for real-time telemetry and monitoring.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    skills: ['SQL', 'Apache Spark', 'Python', 'TimescaleDB'],
    projects: ['PulseAnalytics Pro', 'EcoGrid IoT Suite'],
    competitions: ['DataScale Challenge', 'BigData Hackathon'],
    achievements: ['Data Engineering Excellence Badge'],
    socialLinks: { github: 'https://github.com', linkedin: 'https://linkedin.com' }
  },
  {
    id: 'mem-10',
    name: 'Kaito Tanaka',
    role: 'IoT & Hardware Integration Lead',
    expertise: 'ESP32 • FreeRTOS • Sensor Meshes • MQTT',
    bio: 'Kaito designs low-power physical IoT hardware nodes and mesh networking protocols for smart building and environmental monitoring.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    skills: ['C', 'ESP32', 'FreeRTOS', 'MQTT Protocol'],
    projects: ['EcoGrid IoT Suite'],
    competitions: ['Smart Cities IoT Challenge', 'Hardware Hack Tokyo'],
    achievements: ['Best Hardware Solution 2026'],
    socialLinks: { github: 'https://github.com', twitter: 'https://twitter.com' }
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: 'ach-1',
    title: '1st Place Overall & Best Innovation',
    category: 'Hackathons',
    organization: 'Global AI Hackathon 2026',
    date: 'July 2026',
    description: 'TEKMEN Squad Alpha competed against 450 global teams building autonomous healthcare diagnostic assistants.',
    result: 'Winner of $50k Grand Prize & Acceleration Grant'
  },
  {
    id: 'ach-2',
    title: 'Keynote Speaker & Best Architecture Paper',
    category: 'Competitions',
    organization: 'CloudScale Architecture Summit Berlin',
    date: 'May 2026',
    description: 'Presented high-throughput microservices architecture and zero-downtime database migration strategies.',
    result: 'Accepted into IEEE Transactions on Cloud Computing'
  },
  {
    id: 'ach-3',
    title: 'Enterprise Security Excellence Award',
    category: 'Innovation Challenges',
    organization: 'Global CyberShield Summit',
    date: 'March 2026',
    description: 'Recognized for pioneering zero-trust encryption and HIPAA-compliant WebRTC telehealth communication protocols.',
    result: 'Official Gold Certification'
  }
];

export const TEAM_SQUADS: TeamSquad[] = [
  {
    id: 'squad-alpha',
    name: 'Squad Alpha — AI & Algorithms',
    focus: 'Machine Learning & Computer Vision',
    description: 'Specialized competitive squad focusing on advanced NLP models, autonomous systems, and computer vision competitions.',
    status: 'Active in 4 Global Challenges',
    competitionsWon: 12,
    members: OFFICIAL_TEAM_MEMBERS.slice(0, 3)
  },
  {
    id: 'squad-beta',
    name: 'Squad Beta — Full-Stack & Cloud',
    focus: 'Enterprise Scale & Cloud Infrastructure',
    description: 'High-velocity development squad building resilient distributed systems and winning international hackathons.',
    status: 'Active in Cloud Scale Hackathons',
    competitionsWon: 9,
    members: OFFICIAL_TEAM_MEMBERS.slice(1, 4)
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'ev-1',
    title: 'Global AI Hackathon 2026',
    date: 'July 2026',
    location: 'San Francisco & Virtual',
    description: 'TEKMEN Squad Alpha competed against 450 teams globally to build autonomous healthcare diagnostic assistants.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    result: '1st Place Overall & Best Innovation Award',
    teamMembersInvolved: ['Dr. Aris Vance', 'Elena Rostova', 'Marcus Chen']
  },
  {
    id: 'ev-2',
    title: 'CloudScale Architecture Summit',
    date: 'May 2026',
    location: 'Berlin, Germany',
    description: 'Presenting high-throughput microservices architecture and zero-downtime database migration strategies.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80',
    result: 'Keynote Speaker & Best Paper Award',
    teamMembersInvolved: ['Sarah Jenkins', 'Liam O’Connor']
  }
];

export const CREDENTIALS_DATA: CredentialBadge[] = [
  {
    id: 'cred-1',
    title: 'TEKMEN Certified Full-Stack Builder',
    category: 'Software Engineering',
    description: 'Recognizes proficiency in modern cloud-native architecture, React, Node.js, and secure API design.',
    requirements: 'Complete 3 ecosystem projects and pass architectural review.'
  },
  {
    id: 'cred-2',
    title: 'TEKMEN AI Innovation Practitioner',
    category: 'Artificial Intelligence',
    description: 'Validates ability to integrate LLMs, computer vision models, and vector databases into production software.',
    requirements: 'Deploy a working AI-powered micro-app and pass practical evaluation.'
  },
  {
    id: 'cred-3',
    title: 'TEKMEN Hackathon Champion',
    category: 'Competitive Engineering',
    description: 'Awarded to members who place in top tiers of official TEKMEN or international technology hackathons.',
    requirements: 'Demonstrate podium finish in accredited technical challenge.'
  }
];
