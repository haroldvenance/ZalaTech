export type Lang = "fr" | "en";
export type Theme = "dark" | "light";

export const STORAGE_KEYS = { theme: "zala-theme", lang: "zala-lang" } as const;

const fr = {
  nav: {
    home: "Accueil",
    expertise: "Expertise",
    services: "Services",
    about: "À propos",
    team: "Équipe",
    vision: "Projection",
    contact: "Contact",
    cta: "Démarrer un projet",
  },
  hero: {
    badge: "Studio d'ingénierie · Brazzaville, Congo",
    title: "Bâtir des systèmes intelligents. Protéger ce qui compte.",
    subtitle: "Zala Tech conçoit des logiciels sûrs et évolutifs à l'intersection de la Data/IA, de la sécurité applicative et de la blockchain. Nous transformons des problèmes complexes en architectures robustes.",
    cta: "Découvrir notre expertise",
    tags: ["Python & Rust", "LLMs / RAG", "Cybersécurité", "Solidity", "Cloud"],
  },
  services: {
    eyebrow: "Nos services",
    title: "Des solutions logicielles à forte valeur ajoutée",
    subtitle: "Nous ne faisons pas de sites vitrines génériques. Nous concevons les systèmes qui propulsent et sécurisent votre entreprise.",
    items: [
      { title: "Ingénierie Backend", description: "Développement d'APIs performantes et de microservices avec Python (FastAPI) et Rust.", tag: "Scalabilité" },
      { title: "Data & Intelligence Artificielle", description: "Intégration de LLMs, architectures RAG sur mesure et agents intelligents connectés à vos données.", tag: "Innovation" },
      { title: "Cybersécurité Applicative", description: "Audit de sécurité, sécurisation d'API, chiffrement et mise en conformité de vos systèmes.", tag: "Fiabilité" },
      { title: "Blockchain & Web3", description: "Développement de smart contracts sécurisés (Solidity) et d'applications décentralisées (DApps).", tag: "Décentralisation" },
      { title: "Architecture Data & Cloud", description: "Conception de pipelines de données (ETL), bases de données vectorielles et déploiement cloud.", tag: "Performance" },
      { title: "Conseil & Audit Technique", description: "Analyse de code, revue d'architecture logicielle et accompagnement technique de vos équipes.", tag: "Expertise" }
    ]
  },
  expertise: {
    eyebrow: "Notre périmètre technique",
    title: "Nos domaines d'expertise",
    subtitle: "Chaque pilier correspond à une compétence pointue que nous déployons pour résoudre des problèmes complexes.",
    items: [
      { number: "01", title: "Ingénierie Logicielle & Backend", subtitle: "Python · Rust · FastAPI", tagline: "Des systèmes rapides, typés et hautement disponibles", features: ["Conception d'APIs REST et GraphQL haute performance", "Développement de microservices asynchrones (Rust / Tokio)", "Bases de données relationnelles (PostgreSQL) et NoSQL", "Mise en place de tests automatisés et CI/CD"], impact: "Vos applications traitent des millions de requêtes sans ralentir." },
      { number: "02", title: "Data & Intelligence Artificielle", subtitle: "LLMs · RAG · Machine Learning", tagline: "Faire parler vos données avec les modèles les plus avancés", features: ["Implémentation de RAG (Retrieval-Augmented Generation) pour assistants privés", "Fine-tuning de modèles de langage pour votre domaine métier", "Développement d'agents IA autonomes connectés à vos APIs", "Pipelines de Machine Learning (prédiction, détection de fraude)"], impact: "Un assistant intelligent ancré dans votre base de connaissances, disponible 24/7." },
      { number: "03", title: "Sécurité Applicative", subtitle: "Secure by Design", tagline: "La sécurité dès la première ligne de code", features: ["Audit de sécurité (OWASP Top 10) et tests d'intrusion", "Mise en place d'authentification forte (OAuth2, JWT)", "Chiffrement des données sensibles (AES-GCM, X25519)", "Sécurisation des communications et des infrastructures"], impact: "Protégez la réputation de votre entreprise et les données de vos clients." },
      { number: "04", title: "Blockchain & Web3", subtitle: "Solidity · Ethereum", tagline: "La confiance numérique par le code", features: ["Développement et audit de Smart Contracts (Solidity)", "Création de DApps (Applications Décentralisées)", "Intégration de systèmes de paiement crypto", "Architecture de protocoles de gouvernance (DAO)"], impact: "Des transactions inviolables et transparentes pour vos actifs numériques." },
      { number: "05", title: "Data Engineering", subtitle: "Pipelines · ETL · Big Data", tagline: "Ingérer, nettoyer et valoriser des volumes massifs de données", features: ["Création de pipelines ETL automatisés", "Modélisation de bases de données orientées analytique", "Mise en place de tableaux de bord décisionnels", "Intégration d'outils de Business Intelligence"], impact: "Prenez des décisions stratégiques basées sur des données fiables et à jour." }
    ]
  },
  process: {
    eyebrow: "Méthodologie",
    title: "Notre pipeline de création",
    items: [
      { title: "Audit", description: "Analyse de vos besoins et de votre architecture." },
      { title: "Conception", description: "Architecture logicielle et choix de la stack." },
      { title: "Développement", description: "Code robuste, tests et intégration continue." },
      { title: "Sécurité", description: "Audit, chiffrement et tests d'intrusion." },
      { title: "Déploiement", description: "Mise en production sur des serveurs sécurisés." },
      { title: "Évolution", description: "Monitoring, maintenance et itérations." }
    ]
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Des architectures, pas seulement des promesses",
    seeMore: "Voir les 20 projets",
    seeLess: "Voir moins",
    explore: "Explorer l'étude de cas",
    modalIndex: "ÉTUDE DE CAS",
    close: "Fermer",
    stackTitle: "Stack Technique",
    items: [
      { title: "Assistant RAG Privé", domain: "IA / DATA", desc: "Système de génération augmentée par récupération pour interroger une base de connaissances privée.", stack: ["Python", "LangChain", "Pinecone"] },
      { title: "Protocole de Gouvernance DAO", domain: "BLOCKCHAIN", desc: "Smart contracts pour une organisation autonome décentralisée avec système de vote.", stack: ["Solidity", "Hardhat", "OpenZeppelin"] },
      { title: "Audit d'API Bancaire", domain: "SÉCURITÉ", desc: "Analyse de vulnérabilités, sécurisation des endpoints et mise en place de rate limiting.", stack: ["FastAPI", "OWASP", "JWT"] },
      { title: "Marketplace NFT", domain: "BLOCKCHAIN", desc: "Plateforme d'échange de NFT avec système d'enchères décentralisé.", stack: ["Next.js", "Ethers.js", "IPFS"] },
      { title: "Moteur de Détection de Fraude", domain: "IA / DATA", desc: "Modèle ML entraîné sur des données transactionnelles pour identifier les anomalies.", stack: ["Scikit-learn", "Pandas", "Kafka"] },
      { title: "Microservice de Paiement", domain: "BACKEND", desc: "Service ultra-rapide développé en Rust pour la gestion des transactions.", stack: ["Rust", "Tokio", "PostgreSQL"] },
      { title: "Scanner de Vulnérabilités Web", domain: "SÉCURITÉ", desc: "Outil autonome d'audit de sécurité détectant les failles OWASP Top 10.", stack: ["Python", "Nmap", "Docker"] },
      { title: "Pipeline ETL Multi-Sources", domain: "DATA", desc: "Collecte et nettoyage automatisés de données massives (réseaux sociaux, CRM).", stack: ["Airflow", "Spark", "AWS"] },
      { title: "Passerelle de Paiement Crypto", domain: "BLOCKCHAIN", desc: "Intégration de paiements en cryptomonnaies pour des sites e-commerce.", stack: ["Web3.js", "Node.js", "Solidity"] },
      { title: "Chatbot Support LLM", domain: "IA / DATA", desc: "Agent conversationnel basé sur un modèle fine-tuné pour le support client.", stack: ["OpenAI API", "FastAPI", "Redis"] },
      { title: "Service d'Authentification", domain: "BACKEND", desc: "Microservice centralisé pour OAuth2, JWT et gestion des sessions.", stack: ["Node.js", "Docker", "Redis"] },
      { title: "Messagerie Chiffrée E2E", domain: "SÉCURITÉ", desc: "Protocole de communication chiffré de bout en bout avec gestion des clés.", stack: ["Rust", "AES-GCM", "X25519"] },
      { title: "Dashboard Financier Temps Réel", domain: "DATA", desc: "Visualisation interactive de données boursières via WebSockets.", stack: ["React", "D3.js", "WebSockets"] },
      { title: "Plateforme de Crowdfunding", domain: "BLOCKCHAIN", desc: "Système de levée de fonds avec tokens ERC-20 et gouvernance.", stack: ["Solidity", "React", "The Graph"] },
      { title: "Moteur de Recommandation", domain: "IA / DATA", desc: "Système basé sur les embeddings vectoriels pour suggérer du contenu.", stack: ["PyTorch", "FAISS", "FastAPI"] },
      { title: "Message Broker Custom", domain: "BACKEND", desc: "Gestionnaire de files d'attente asynchrone ultra-rapide pour microservices.", stack: ["Rust", "ZeroMQ", "Docker"] },
      { title: "Audit de Sécurité Applicative", domain: "SÉCURITÉ", desc: "Analyse approfondie d'une API legacy et mise en conformité.", stack: ["Burp Suite", "Python", "OWASP"] },
      { title: "Prédiction de Maintenance", domain: "DATA", desc: "Modèle ML pour anticiper les pannes d'équipements industriels (IoT).", stack: ["TensorFlow", "MQTT", "Python"] },
      { title: "Smart Contract d'Assurance", domain: "BLOCKCHAIN", desc: "Contrat autonome déclenchant des paiements suite à des événements vérifiés.", stack: ["Solidity", "Chainlink", "Hardhat"] },
      { title: "Générateur de Code IA", domain: "IA / DATA", desc: "Outil générant des squelettes de code (boilerplate) à partir de prompts.", stack: ["GPT-4 API", "LangChain", "Streamlit"] }
    ]
  },
  whyUs: {
    eyebrow: "Pourquoi Zala Tech",
    title: "L'expertise au service de votre ambition",
    items: [
      { title: "Code de qualité", description: "Des bases de code propres, typées et documentées." },
      { title: "Sécurité native", description: "La sécurité est intégrée dès la conception de l'architecture." },
      { title: "IA & Data", description: "Nous exploitons la puissance des LLMs et de la data science." },
      { title: "Performance", description: "Des applications optimisées (Rust, Go, FastAPI) pour une latence minimale." },
      { title: "Partenaire unique", description: "De la conception à la mise en production, nous gérons tout." }
    ]
  },
  team: {
    eyebrow: "Notre équipe",
    title: "Des experts derrière chaque ligne de code",
    subtitle: "Une équipe d'ingénieurs passionnés, engagés à construire des systèmes robustes et sécurisés.",
    items: [
      { name: "Ingénieur Logiciel", role: "Développement Logiciel", initials: "SE" },
      { name: "Ingénieur Data & IA", role: "Lead Data / Machine Learning", initials: "DA" },
      { name: "Expert Cybersécurité", role: "Audit & Sécurité Applicative", initials: "CY" },
      { name: "Développeur Blockchain", role: "Smart Contracts / Web3", initials: "BC" },
      { name: "Ingénieur DevOps", role: "Cloud & Infrastructure", initials: "DO" },
      { name: "Product Designer", role: "UI/UX & Expérience Utilisateur", initials: "UX" }
    ]
  },
  futureProducts: {
    eyebrow: "Notre vision",
    title: "Ce que nous construisons pour demain",
    subtitle: "Zala Tech évolue vers une suite d'outils d'ingénierie avancés.",
    badge: "En développement",
    items: [
      { name: "Zala AI Engine", description: "Une plateforme interne pour déployer des assistants RAG sur mesure." },
      { name: "Zala Secure Cloud", description: "Une infrastructure cloud souveraine et chiffrée pour les entreprises." },
      { name: "Zala Audit", description: "Un outil d'analyse automatisée de vulnérabilités applicatives." },
      { name: "Zala Core", description: "Un micro-framework backend ultra-rapide basé sur Rust." },
      { name: "Zala DataFlow", description: "Solution ETL clé en main pour connecter et analyser vos données." },
      { name: "Zala DevKit", description: "Une suite d'outils pour accélérer le développement d'applications Web3." }
    ]
  },
  idealClients: {
    eyebrow: "Notre cible",
    title: "À qui s'adressent nos services ?",
    items: [
      "Une startup qui a besoin de scaler son infrastructure et d'intégrer de l'IA dans son produit.",
      "Une PME qui souhaite moderniser ses systèmes legacy et sécuriser ses données.",
      "Une entreprise victime d'incidents de sécurité cherchant un audit et une refonte robuste.",
      "Une institution financière nécessitant des solutions de paiement ou de traçabilité (Web3).",
      "Une organisation qui veut automatiser la gestion de ses connaissances via des LLMs."
    ]
  },
  testimonials: {
    eyebrow: "Témoignages",
    title: "Ils nous font confiance",
    items: [
      { quote: "L'audit de sécurité de notre API a révélé des failles critiques. Zala Tech a non seulement corrigé le code, mais a aussi formé notre équipe aux bonnes pratiques.", author: "Directeur Technique", business: "Fintech locale" },
      { quote: "Nous avions besoin d'un assistant IA capable d'analyser nos contrats confidentiels. L'architecture RAG déployée par Zala Tech est rapide, précise et sécurisée.", author: "Responsable Juridique", business: "Cabinet d'avocats" },
      { quote: "Leur maîtrise de Rust et de l'architecture microservices nous a permis de diviser par trois le temps de réponse de notre plateforme.", author: "Lead Developer", business: "Startup E-commerce" },
      { quote: "Les smart contracts développés pour notre système de certification sont robustes et ont passé tous les tests d'audit.", author: "Directeur des Systèmes d'Information", business: "Institution académique" }
    ]
  },
  ctaBanner: {
    title: "Prêt à bâtir votre prochain système ?",
    subtitle: "Discutons de vos défis techniques. Que ce soit pour une architecture Cloud, une intégration IA ou une sécurisation d'API, nous avons l'expertise requise.",
    cta: "Démarrer la discussion"
  },
  contact: {
    eyebrow: "Contact",
    title: "Discutons de votre architecture",
    subtitle: "Vous avez un problème technique complexe à résoudre ou un projet d'envergure ? Écrivez-nous ou contactez-nous directement sur WhatsApp.",
    nameLabel: "NOM COMPLET",
    namePlaceholder: "Votre nom",
    nameError: "Merci d'indiquer votre nom.",
    phoneLabel: "TÉLÉPHONE",
    phonePlaceholder: "+242 06 000 00 00",
    phoneError: "Merci d'indiquer un numéro.",
    messageLabel: "VOTRE PROJET",
    messagePlaceholder: "Décrivez votre besoin technique...",
    messageError: "Merci de décrire votre projet.",
    submit: "Envoyer le message",
    submitting: "Traitement...",
    success: "Message prêt à être envoyé",
    whatsapp: "WHATSAPP DIRECT",
    phone: "TÉLÉPHONE",
    email: "E-MAIL"
  },
  footer: {
    desc: "Zala Tech est un studio d'ingénierie logicielle basé à Brazzaville. Nous concevons des systèmes intelligents, sécurisés et évolutifs.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "Tous droits réservés.",
    tagline: "Conçu avec intention. Construit avec curiosité."
  }
};

const en: typeof fr = {
  nav: {
    home: "Home",
    expertise: "Expertise",
    services: "Services",
    about: "About",
    team: "Team",
    vision: "Vision",
    contact: "Contact",
    cta: "Start a project",
  },
  hero: {
    badge: "Engineering Studio · Brazzaville, Congo",
    title: "Building intelligent systems. Securing what matters.",
    subtitle: "Zala Tech engineers secure and scalable software at the intersection of Data/AI, application security, and blockchain. We turn complex problems into robust architectures.",
    cta: "Discover our expertise",
    tags: ["Python & Rust", "LLMs / RAG", "Cybersecurity", "Solidity", "Cloud"],
  },
  services: {
    eyebrow: "Our services",
    title: "High-value software solutions",
    subtitle: "We don't build generic websites. We design the systems that power and secure your business.",
    items: [
      { title: "Backend Engineering", description: "Development of high-performance APIs and microservices with Python (FastAPI) and Rust.", tag: "Scalability" },
      { title: "Data & AI", description: "Integration of LLMs, custom RAG architectures, and intelligent agents connected to your data.", tag: "Innovation" },
      { title: "Application Security", description: "Security audits, API protection, encryption, and compliance for your systems.", tag: "Reliability" },
      { title: "Blockchain & Web3", description: "Development of secure smart contracts (Solidity) and decentralized applications (DApps).", tag: "Decentralization" },
      { title: "Data & Cloud Architecture", description: "Design of data pipelines (ETL), vector databases, and cloud deployment.", tag: "Performance" },
      { title: "Tech Consulting & Audit", description: "Code analysis, software architecture review, and technical support for your teams.", tag: "Expertise" }
    ]
  },
  expertise: {
    eyebrow: "Our technical scope",
    title: "Our areas of expertise",
    subtitle: "Each pillar represents a sharp skill we deploy to solve complex problems.",
    items: [
      { number: "01", title: "Software Engineering & Backend", subtitle: "Python · Rust · FastAPI", tagline: "Fast, typed, and highly available systems", features: ["High-performance REST and GraphQL API design", "Asynchronous microservices development (Rust / Tokio)", "Relational (PostgreSQL) and NoSQL databases", "Automated testing and CI/CD setup"], impact: "Your applications handle millions of requests without slowing down." },
      { number: "02", title: "Data & Artificial Intelligence", subtitle: "LLMs · RAG · Machine Learning", tagline: "Make your data speak with the most advanced models", features: ["Implementation of RAG (Retrieval-Augmented Generation) for private assistants", "Fine-tuning of language models for your business domain", "Development of autonomous AI agents connected to your APIs", "Machine Learning pipelines (prediction, fraud detection)"], impact: "An intelligent assistant anchored in your knowledge base, available 24/7." },
      { number: "03", title: "Application Security", subtitle: "Secure by Design", tagline: "Security from the first line of code", features: ["Security audits (OWASP Top 10) and penetration testing", "Implementation of strong authentication (OAuth2, JWT)", "Encryption of sensitive data (AES-GCM, X25519)", "Securing communications and infrastructure"], impact: "Protect your company's reputation and your customers' data." },
      { number: "04", title: "Blockchain & Web3", subtitle: "Solidity · Ethereum", tagline: "Digital trust through code", features: ["Smart Contract development and auditing (Solidity)", "Creation of DApps (Decentralized Applications)", "Integration of crypto payment systems", "Governance protocol architecture (DAO)"], impact: "Tamper-proof and transparent transactions for your digital assets." },
      { number: "05", title: "Data Engineering", subtitle: "Pipelines · ETL · Big Data", tagline: "Ingest, clean, and leverage massive data volumes", features: ["Creation of automated ETL pipelines", "Modeling of analytical databases", "Deployment of decision-making dashboards", "Integration of Business Intelligence tools"], impact: "Make strategic decisions based on reliable and up-to-date data." }
    ]
  },
  process: {
    eyebrow: "Methodology",
    title: "Our creation pipeline",
    items: [
      { title: "Audit", description: "Analysis of your needs and architecture." },
      { title: "Design", description: "Software architecture and stack selection." },
      { title: "Development", description: "Robust code, testing, and continuous integration." },
      { title: "Security", description: "Audit, encryption, and penetration testing." },
      { title: "Deployment", description: "Production release on secure servers." },
      { title: "Evolution", description: "Monitoring, maintenance, and iterations." }
    ]
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Architectures, not just promises",
    seeMore: "See all 20 projects",
    seeLess: "See less",
    explore: "Explore case study",
    modalIndex: "CASE STUDY",
    close: "Close",
    stackTitle: "Tech Stack",
    items: [
      { title: "Private RAG Assistant", domain: "AI / DATA", desc: "Retrieval-augmented generation system to query a private knowledge base.", stack: ["Python", "LangChain", "Pinecone"] },
      { title: "DAO Governance Protocol", domain: "BLOCKCHAIN", desc: "Smart contracts for a decentralized autonomous organization with voting system.", stack: ["Solidity", "Hardhat", "OpenZeppelin"] },
      { title: "Banking API Audit", domain: "SECURITY", desc: "Vulnerability analysis, endpoint securing, and rate limiting implementation.", stack: ["FastAPI", "OWASP", "JWT"] },
      { title: "NFT Marketplace", domain: "BLOCKCHAIN", desc: "NFT trading platform with decentralized auction system.", stack: ["Next.js", "Ethers.js", "IPFS"] },
      { title: "Fraud Detection Engine", domain: "AI / DATA", desc: "ML model trained on transactional data to identify anomalies.", stack: ["Scikit-learn", "Pandas", "Kafka"] },
      { title: "Payment Microservice", domain: "BACKEND", desc: "Ultra-fast service developed in Rust for transaction management.", stack: ["Rust", "Tokio", "PostgreSQL"] },
      { title: "Web Vulnerability Scanner", domain: "SECURITY", desc: "Autonomous security audit tool detecting OWASP Top 10 flaws.", stack: ["Python", "Nmap", "Docker"] },
      { title: "Multi-Source ETL Pipeline", domain: "DATA", desc: "Automated collection and cleaning of massive data (social media, CRM).", stack: ["Airflow", "Spark", "AWS"] },
      { title: "Crypto Payment Gateway", domain: "BLOCKCHAIN", desc: "Integration of cryptocurrency payments for e-commerce sites.", stack: ["Web3.js", "Node.js", "Solidity"] },
      { title: "LLM Support Chatbot", domain: "AI / DATA", desc: "Conversational agent based on a fine-tuned model for customer support.", stack: ["OpenAI API", "FastAPI", "Redis"] },
      { title: "Authentication Service", domain: "BACKEND", desc: "Centralized microservice for OAuth2, JWT, and session management.", stack: ["Node.js", "Docker", "Redis"] },
      { title: "E2E Encrypted Messaging", domain: "SECURITY", desc: "End-to-end encrypted communication protocol with key management.", stack: ["Rust", "AES-GCM", "X25519"] },
      { title: "Real-Time Financial Dashboard", domain: "DATA", desc: "Interactive visualization of stock market data via WebSockets.", stack: ["React", "D3.js", "WebSockets"] },
      { title: "Crowdfunding Platform", domain: "BLOCKCHAIN", desc: "Fundraising system with ERC-20 tokens and governance.", stack: ["Solidity", "React", "The Graph"] },
      { title: "Recommendation Engine", domain: "AI / DATA", desc: "System based on vector embeddings to suggest content.", stack: ["PyTorch", "FAISS", "FastAPI"] },
      { title: "Custom Message Broker", domain: "BACKEND", desc: "Ultra-fast asynchronous message queue manager for microservices.", stack: ["Rust", "ZeroMQ", "Docker"] },
      { title: "Application Security Audit", domain: "SECURITY", desc: "In-depth analysis of a legacy API and compliance implementation.", stack: ["Burp Suite", "Python", "OWASP"] },
      { title: "Maintenance Prediction", domain: "DATA", desc: "ML model to anticipate industrial equipment failures (IoT).", stack: ["TensorFlow", "MQTT", "Python"] },
      { title: "Insurance Smart Contract", domain: "BLOCKCHAIN", desc: "Autonomous contract triggering payments upon verified events.", stack: ["Solidity", "Chainlink", "Hardhat"] },
      { title: "AI Code Generator", domain: "AI / DATA", desc: "Tool generating code boilerplate from prompts.", stack: ["GPT-4 API", "LangChain", "Streamlit"] }
    ]
  },
  whyUs: {
    eyebrow: "Why Zala Tech",
    title: "Expertise at the service of your ambition",
    items: [
      { title: "Code quality", description: "Clean, typed, and documented codebases." },
      { title: "Native security", description: "Security is built in from the architecture design." },
      { title: "AI & Data", description: "We leverage the power of LLMs and data science." },
      { title: "Performance", description: "Optimized applications (Rust, Go, FastAPI) for minimal latency." },
      { title: "Single partner", description: "From design to production, we handle everything." }
    ]
  },
  team: {
    eyebrow: "Our team",
    title: "Experts behind every line of code",
    subtitle: "A team of passionate engineers committed to building robust and secure systems.",
    items: [
      { name: "Software Engineer", role: "Software Development", initials: "SE" },
      { name: "Data & AI Engineer", role: "Lead Data / Machine Learning", initials: "DA" },
      { name: "Cybersecurity Expert", role: "Audit & Application Security", initials: "CY" },
      { name: "Blockchain Developer", role: "Smart Contracts / Web3", initials: "BC" },
      { name: "DevOps Engineer", role: "Cloud & Infrastructure", initials: "DO" },
      { name: "Product Designer", role: "UI/UX & User Experience", initials: "UX" }
    ]
  },
  futureProducts: {
    eyebrow: "Our vision",
    title: "What we are building for tomorrow",
    subtitle: "Zala Tech is evolving towards a suite of advanced engineering tools.",
    badge: "In development",
    items: [
      { name: "Zala AI Engine", description: "An internal platform to deploy custom RAG assistants." },
      { name: "Zala Secure Cloud", description: "Sovereign and encrypted cloud infrastructure for businesses." },
      { name: "Zala Audit", description: "An automated application vulnerability analysis tool." },
      { name: "Zala Core", description: "An ultra-fast Rust-based backend micro-framework." },
      { name: "Zala DataFlow", description: "Turnkey ETL solution to connect and analyze your data." },
      { name: "Zala DevKit", description: "A suite of tools to accelerate Web3 application development." }
    ]
  },
  idealClients: {
    eyebrow: "Our target",
    title: "Who are our services for?",
    items: [
      "A startup that needs to scale its infrastructure and integrate AI into its product.",
      "An SME looking to modernize its legacy systems and secure its data.",
      "A company that has experienced security incidents and is seeking a robust audit and overhaul.",
      "A financial institution requiring payment or traceability solutions (Web3).",
      "An organization looking to automate knowledge management via LLMs."
    ]
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "They trust us",
    items: [
      { quote: "The security audit of our API revealed critical flaws. Zala Tech not only fixed the code but also trained our team on best practices.", author: "CTO", business: "Local Fintech" },
      { quote: "We needed an AI assistant capable of analyzing our confidential contracts. The RAG architecture deployed by Zala Tech is fast, accurate, and secure.", author: "Legal Manager", business: "Law Firm" },
      { quote: "Their mastery of Rust and microservices architecture allowed us to divide our platform's response time by three.", author: "Lead Developer", business: "E-commerce Startup" },
      { quote: "The smart contracts developed for our certification system are robust and passed all audit tests.", author: "Chief Information Officer", business: "Academic Institution" }
    ]
  },
  ctaBanner: {
    title: "Ready to build your next system?",
    subtitle: "Let's discuss your technical challenges. Whether it's Cloud architecture, AI integration, or API security, we have the expertise.",
    cta: "Start the discussion"
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's discuss your architecture",
    subtitle: "Do you have a complex technical problem to solve or a large-scale project? Write to us or contact us directly on WhatsApp.",
    nameLabel: "FULL NAME",
    namePlaceholder: "Your name",
    nameError: "Please enter your name.",
    phoneLabel: "PHONE",
    phonePlaceholder: "+242 06 000 00 00",
    phoneError: "Please enter a phone number.",
    messageLabel: "YOUR PROJECT",
    messagePlaceholder: "Describe your technical needs...",
    messageError: "Please describe your project.",
    submit: "Send message",
    submitting: "Processing...",
    success: "Message ready to be sent",
    whatsapp: "DIRECT WHATSAPP",
    phone: "PHONE",
    email: "EMAIL"
  },
  footer: {
    desc: "Zala Tech is a software engineering studio based in Brazzaville. We design intelligent, secure, and scalable systems.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    rights: "All rights reserved.",
    tagline: "Designed with intent. Built with curiosity."
  }
};

export const dictionaries: Record<Lang, typeof fr> = { fr, en };
export type Dict = typeof fr;