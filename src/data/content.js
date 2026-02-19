import Resume from './Aman_Saxena_02:17:2026.pdf';
export const experience = [
  {
    company: 'Cognizant',
    role: 'Software Engineer / Analyst',
    period: 'Jul 2025 — Present',
    location: 'Bridgewater, New Jersey',
    bullets: [
      'Evaluate and optimize LLM responses using advanced prompting strategies (RTF, RACE) with Precision, Reranking, and LLM-as-a-judge metrics',
      'Designed and performed extensive testing on full-stack components on the PEGA platform with UI logic and Java backend behavior',
      'Developed and tested RESTful API integrations across on-prem and AWS cloud environments using Postman',
      'Collaborating in SAFe Agile methodology, documenting defects in JIRA to reduce developer turnaround',
    ],
  },
  {
    company: 'Findi',
    role: 'Software Engineer',
    period: 'Jul 2024 — Jul 2025',
    location: 'New York, New York',
    bullets: [
      'Developed and deployed cross-platform React Native mobile app (iOS & Android) on Firebase',
      'Integrated and deployed a RAG Gemini system to ingest user data and deliver personalized in-app experiences',
      'Tuned semantic search parameters achieving 10% higher accuracy in document retrieval',
      'Built scalable APIs on Google Cloud Run with IAM-enforced security policies',
    ],
  },
  {
    company: 'GLogic',
    role: 'Full Stack Developer',
    period: 'Jun 2023 — Jun 2024',
    location: 'Edison, New Jersey',
    bullets: [
      'Deployed Google Cloud-hosted healthcare automation web app with ReactJS, ExpressJS, and PostgreSQL',
      'Integrated ChatGPT API with low-latency configuration and custom prompt engineering templates',
      'Built and integrated REST APIs using Django and Express with scalable database schemas',
    ],
  },
  {
    company: 'Rutgers MBS',
    role: 'Lead Extern',
    period: 'Sep 2022 — Dec 2022',
    location: 'Edison, New Jersey',
    bullets: [
      'Conducted research on member organizations and analyzed firm-member interactions',
      'Developed data-driven rubric and scoring system to quantitatively rate organizational engagement',
    ],
  },
]

export const projects = [
  {
    num: '02',
    title: 'GitSense',
    desc: 'Semantic search and intelligent retrieval over real-world GitHub repositories. Combines Pinecone vector embeddings with RAG to make codebases queryable in natural language.',
    tags: ['Pinecone', 'RAG', 'Embeddings', 'GitHub', 'Python', 'Vector Database'],
    link: 'https://github.com/Frenzy117/GitSense'
  },
  {
    num: '01',
    title: 'Gemini RAG Pipeline',
    desc: 'Production-ready Retrieval-Augmented Generation system using LangChain, vector embeddings, and Pinecone. Handles semantic search at scale with precision-tuned retrieval logic.',
    tags: ['LangChain', 'Gemini', 'RAG'],
    link: 'https://github.com/Frenzy117/langchain-aws-carddemo-readme-rag-system'
  },
  {
    num: '03',
    title: 'Qrion',
    desc: 'LLM-powered API system with optimized prompt engineering and built-in response evaluation frameworks. Designed for reliability at inference time — not just accuracy.',
    tags: ['LLM APIs', 'FastAPI', 'Prompt Eng.', 'Evaluation'],
    link: 'https://github.com/Frenzy117/Qrion-Studio'
  },
  {
    num: '04',
    title: 'R-INSIGHT',
    desc: 'Real Time Interactive Neural Sensory Integration Glasses for Hearing Technology',
    tags: ['Flutter', 'Dart', 'Python WebSocket', 'Generative AI/ LLMs'],
    link: 'https://github.com/Frenzy117/R-INSIGHT-Real-time-Interactive-Neural-Sensory-Integration-Glasses-for-Hearing-Technology-'
  },
]

export const skills = [
  {
    category: 'AI / ML',
    items: ['LLMs', 'RAG Pipelines', 'NLP', 'Semantic Search', 'Prompt Engineering', 'LangChain', 'LangGraph', 'Pinecone', 'Embeddings', 'HuggingFace', 'TensorFlow', 'PyTorch'],
  },
  {
    category: 'Languages',
    items: ['Python', 'JavaScript / TypeScript', 'Java', 'SQL', 'C / C++', 'HTML / CSS'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Google Cloud Platform', 'Vertex AI', 'Cloud Run', 'AWS', 'IAM', 'CI / CD', 'Firebase'],
  },
  {
    category: 'Frameworks & Databases',
    items: ['React', 'React Native', 'FastAPI', 'Django', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'Vector DBs'],
  },
]

export const certifications = [
  { issuer: 'Databricks', name: 'Certified Generative AI Engineer' },
  { issuer: 'Google Cloud', name: 'Cloud Digital Leader' },
  { issuer: 'Google Cloud', name: 'Vertex AI Studio' },
  { issuer: 'Google Cloud', name: 'Encoder-Decoder Architecture' },
  { issuer: 'LinkedIn Learning', name: 'Algorithmic Trading & Finance Models' },
  { issuer: 'Citi', name: 'Technology Software Development Simulation' },
]

export const marqueeItems = [
  'RAG Pipelines', 'LangChain', 'Pinecone', 'Vertex AI',
  'Prompt Engineering', 'Semantic Search', 'LangGraph',
  'Google Cloud', 'React', 'FastAPI', 'Databricks', 'Agentic AI'
]

export const contactLinks = [
  { label: 'Resume', value: 'For hiring business', href: Resume},
  { label: 'Email', value: 'amansaxena2002@gmail.com', href: 'mailto:amansaxena2002@gmail.com' },
  { label: 'LinkedIn', value: 'aman-saxena', href: 'https://linkedin.com/in/aman-saxenaba000b212' },
  { label: 'Portfolio / Site', value: 'aman-dev-13a2b.web.app', href: 'https://aman-dev-13a2b.web.app' },
  { label: 'Phone', value: '+1 (908) 612-5822', href: 'tel:+19086125822' },
]
