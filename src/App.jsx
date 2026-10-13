import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Sparkles,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  FileCode2,
  Layers,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
  MessageSquare,
  Bot,
  Compass,
  Mic,
  Users2,
  Search,
  CheckCircle2,
  BookOpen,
  Cpu,
  Terminal,
  Palette,
  Workflow,
  Lightbulb,
  Car,
} from "lucide-react";

/* ==========================================================================
   Skills Data with rich categorised styling & colors
   ========================================================================== */
const skillsData = [
  {
    step: "01",
    category: "Front-End Development",
    icon: Code2,
    theme: "blue",
    desc: "Crafting fast, clean, responsive interfaces and intuitive web applications.",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    step: "02",
    category: "Programming Languages",
    icon: FileCode2,
    theme: "amber",
    desc: "Problem-solving, algorithmic thinking, and core computational foundations.",
    skills: ["C++", "Python"],
  },
  {
    step: "03",
    category: "Agentic AI",
    icon: Brain,
    theme: "purple",
    desc: "Autonomous workflow agents, automated reasoning, and practical bots.",
    skills: [
      "AI Agents",
      "Lead Agents",
      "WhatsApp Agents",
      "Voice Agents",
      "AI Automation",
    ],
  },
  {
    step: "04",
    category: "Generative AI",
    icon: Sparkles,
    theme: "rose",
    desc: "Context-aware systems, modern LLMs, multimodal retrieval and reasoning.",
    skills: ["RAG", "Multimodal RAG", "AI-Powered Applications"],
  },
  {
    step: "05",
    category: "UI/UX and Creative Tools",
    icon: Layers,
    theme: "emerald",
    desc: "Visual design, prototyping, storytelling, and high-impact media editing.",
    skills: [
      "Figma",
      "UI/UX Design",
      "CapCut",
      "Video Editing",
      "Content Creation",
    ],
  },
];

/* ==========================================================================
   Projects Data with vibrant accents, category colors, and clear badges
   ========================================================================== */
const projectsData = [
  {
    id: "friday",
    title: "Friday — AI Travel Planning Platform",
    category: "Hackathon Prototype",
    theme: "blue",
    description:
      "A travel-planning workspace concept developed for participation in the Alibaba Hackathon in Pakistan. Coordinates dynamic itineraries, budget suggestions, and travel logistics in one unified canvas.",
    tags: ["React.js", "AI Workspace", "Travel Planning", "Alibaba Hackathon"],
    icon: Compass,
    isFeatured: true,
    badge: "Alibaba Hackathon Pakistan",
    featurePill: "Hackathon Canvas",
  },
  {
    id: "video-interviewer",
    title: "Video Interviewer Agent",
    category: "Course Final Project",
    theme: "purple",
    description:
      "An Agentic AI project submitted as my final project for the AI Season course. Simulates an intelligent video interviewing session with structured question flows and automated candidate evaluation.",
    tags: ["Agentic AI", "Video AI", "Autonomous Agents", "AI Season"],
    icon: Bot,
    isFeatured: true,
    badge: "AI Season Course Final",
    featurePill: "Candidate Evaluator",
  },
  {
    id: "ai-travel-planner",
    title: "AI Travel Planner",
    category: "AI Web Application",
    theme: "teal",
    description:
      "An AI-powered travel-planning project that helps travellers generate contextual day-wise itineraries, recommended attractions, and stay recommendations.",
    tags: ["Agentic AI", "Planning Algorithms", "Web"],
    icon: Compass,
    isFeatured: false,
    badge: "AI Concept",
    featurePill: "Itinerary Engine",
  },
  {
    id: "multimodal-rag",
    title: "Multimodal RAG",
    category: "Generative AI",
    theme: "rose",
    description:
      "A project exploring Retrieval-Augmented Generation with multimodal information — combining text knowledge retrieval and image understanding for grounded answers.",
    tags: ["Generative AI", "Multimodal RAG", "Python", "Vector Search"],
    icon: Search,
    isFeatured: false,
    badge: "RAG System",
    featurePill: "Multimodal Embeddings",
  },
  {
    id: "car-wash-booking",
    title: "Car Wash Booking System",
    category: "AI Automation",
    theme: "emerald",
    description:
      "An end-to-end automated booking platform powered by dual AI agents — integrating a WhatsApp Agent and a Voice Agent to handle scheduling, check service slots, and automate customer appointment confirmations.",
    tags: ["WhatsApp Agent", "Voice Agent", "AI Automation", "Appointment Booking", "Workflow Agents"],
    icon: Car,
    isFeatured: false,
    badge: "WhatsApp & Voice AI",
    featurePill: "Dual-Agent Booking",
  },
  {
    id: "voice-agent",
    title: "Voice Agent",
    category: "Speech AI",
    theme: "indigo",
    description:
      "An AI voice-agent project designed for hands-free audio conversation, exploring low-latency speech synthesis, user intent recognition, and agent replies.",
    tags: ["Voice Agents", "Speech AI", "Conversational AI"],
    icon: Mic,
    isFeatured: false,
    badge: "Voice Interface",
    featurePill: "Speech Synthesis",
  },
  {
    id: "lead-agent",
    title: "Lead Agent",
    category: "Business Automation",
    theme: "amber",
    description:
      "An Agentic AI project focused on lead-related workflows — categorising inbound inquiries, qualifying user criteria, and forwarding prospects systematically.",
    tags: ["Lead Agents", "AI Workflows", "CRM Automation"],
    icon: Users2,
    isFeatured: false,
    badge: "Lead Pipeline",
    featurePill: "Pipeline Qualification",
  },
  {
    id: "whatsapp-bot",
    title: "WhatsApp Bot",
    category: "Chatbot",
    theme: "emerald",
    description:
      "A chatbot project based on WhatsApp interactions, providing quick menu responses, automated customer touchpoints, and conversational fallback flows.",
    tags: ["Chatbot", "WhatsApp", "Conversational Bot"],
    icon: MessageSquare,
    isFeatured: false,
    badge: "Messaging Bot",
    featurePill: "Interactive Chatbot",
  },
];

/* ==========================================================================
   Chronological Journey Milestones
   ========================================================================== */
const journeyData = [
  {
    period: "2020 – 2022",
    title: "Matriculation in Science",
    institution: "Sadeq Public School, Rawalpindi",
    description:
      "Completed foundational secondary school education with science subjects, building discipline in mathematics and physics.",
    type: "Education",
    theme: "blue",
    icon: GraduationCap,
  },
  {
    period: "2022 – 2024",
    title: "Intermediate in ICS (Physics)",
    institution: "Punjab College D-9, Rawalpindi",
    description:
      "Focused on intermediate studies in Computer Science, Mathematics, and Physics — discovering a strong enthusiasm for code and software creation.",
    type: "Education",
    theme: "indigo",
    icon: GraduationCap,
  },
  {
    period: "2026 – Present",
    title: "BS Computer Science",
    institution: "PMAS Arid Agriculture University (UIIT), Rawalpindi",
    description:
      "Undergraduate studies focusing on computer science foundations, algorithms, modern software development, and AI technologies.",
    type: "Degree Program",
    theme: "emerald",
    icon: GraduationCap,
  },
  {
    period: "Milestone",
    title: "AI Season",
    institution: "AI Season Coursework & Capstone",
    description:
      "Completed the intensive course and submitted the Video Interviewer Agent as the final capstone project.",
    type: "Achievement",
    theme: "purple",
    icon: Award,
  },
  {
    period: "Hackathon",
    title: "Alibaba Hackathon, Pakistan",
    institution: "Hackathon Competition",
    description:
      "Participated with the Friday travel-planning project, pitching a collaborative travel canvas and earning a participation certificate.",
    type: "Participation",
    theme: "amber",
    icon: Award,
  },
  {
    period: "Present",
    title: "Looking for More Hackathons",
    institution: "Active Competition & Prototyping",
    description:
      "Actively seeking upcoming hackathons to participate in, test innovative ideas, and collaborate with developers on impactful solutions.",
    type: "Current Focus",
    theme: "rose",
    icon: Sparkles,
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* ====================================================================
          NAVBAR: Clean, sticky, warm backdrop with subtle colorful indicator
          ==================================================================== */}
      <header className="navbar-wrap">
        <div className="site-container">
          <nav className="navbar" aria-label="Main Navigation">
            <a
              href="#home"
              className="brand-logo"
              onClick={(e) => handleNavClick(e, "home")}
            >
              <span className="brand-badge">HA</span>
              <span className="brand-name">
                Haris Ahmer Khan <span className="brand-dot">•</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="nav-desktop">
              <a
                href="#home"
                className="nav-link"
                onClick={(e) => handleNavClick(e, "home")}
              >
                Home
              </a>
              <a
                href="#about"
                className="nav-link"
                onClick={(e) => handleNavClick(e, "about")}
              >
                About
              </a>
              <a
                href="#skills"
                className="nav-link"
                onClick={(e) => handleNavClick(e, "skills")}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="nav-link"
                onClick={(e) => handleNavClick(e, "projects")}
              >
                Projects
              </a>
              <a
                href="#journey"
                className="nav-link"
                onClick={(e) => handleNavClick(e, "journey")}
              >
                Journey
              </a>
              <a
                href="#contact"
                className="nav-cta"
                onClick={(e) => handleNavClick(e, "contact")}
              >
                Let's Connect
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <button
              className="mobile-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <a
              href="#home"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "home")}
            >
              Home
            </a>
            <a
              href="#about"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "about")}
            >
              About
            </a>
            <a
              href="#skills"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "skills")}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </a>
            <a
              href="#journey"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "journey")}
            >
              Journey
            </a>
            <a
              href="#contact"
              className="mobile-nav-link"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </a>
          </div>
        )}
      </header>

      <main>
        {/* ==================================================================
            HERO SECTION: Two-column with real portrait photo & colorful accents
            ================================================================== */}
        <section className="hero-section" id="home">
          <div className="site-container">
            <div className="hero-grid">
              {/* Left Column */}
              <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="hero-subhead">
                  <span className="hero-subhead-dot" />
                  <span>Computer Science Student · Rawalpindi</span>
                </div>

                <h1 className="hero-title">
                  Building for the Web, <br />
                  <span className="gradient-highlight">Exploring AI.</span>
                </h1>

                <p className="hero-desc">
                  I build interactive web experiences and explore AI-powered
                  applications through practical projects. Continuous curiosity drives
                  me to learn deeply and engineer real solutions.
                </p>

                <div className="hero-cta-group">
                  <a
                    href="#projects"
                    className="btn btn-primary"
                    onClick={(e) => handleNavClick(e, "projects")}
                  >
                    Explore My Work
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="btn btn-secondary"
                    onClick={(e) => handleNavClick(e, "contact")}
                  >
                    Let's Connect
                    <Mail size={16} />
                  </a>
                </div>

                <div className="hero-skill-pills">
                  <div className="hero-pill pill-blue">
                    <Code2 size={15} />
                    <span>Front-End Development</span>
                  </div>
                  <div className="hero-pill pill-purple">
                    <Brain size={15} />
                    <span>Agentic AI</span>
                  </div>
                  <div className="hero-pill pill-emerald">
                    <Sparkles size={15} />
                    <span>Active Learner</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Real Photo with Editorial Frame & Floating Cards */}
              <motion.div
                className="portrait-container"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
              >
                <div className="portrait-decor-glow" />

                <div className="portrait-frame">
                  <div className="portrait-inner">
                    <img
                      src={`${import.meta.env.BASE_URL}haris.jpg`}
                      alt="Haris Ahmer Khan"
                      className="portrait-img"
                      onError={(e) => {
                        // Fallback if image fails to load
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div
                      className="portrait-fallback"
                      style={{ display: "none" }}
                    >
                      <div className="portrait-placeholder-avatar">HA</div>
                      <div className="portrait-name">Haris Ahmer Khan</div>
                      <div className="portrait-role">
                        CS Student & AI Developer
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top Right */}
                <motion.div
                  className="portrait-floating-card card-top"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <div className="floating-icon-wrap icon-purple">
                    <Brain size={16} />
                  </div>
                  <div className="floating-text-wrap">
                    <span className="floating-title">Agentic AI Builder</span>
                    <span className="floating-sub">Exploring workflows</span>
                  </div>
                </motion.div>

                {/* Floating Badge Bottom Left */}
                <motion.div
                  className="portrait-floating-card card-bottom"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <div className="floating-icon-wrap icon-blue">
                    <Code2 size={16} />
                  </div>
                  <div className="floating-text-wrap">
                    <span className="floating-title">Front-End Dev</span>
                    <span className="floating-sub">React & Modern UI</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SPECIAL EXPLORATION BANNER: User's learning mindset & exploration
            ================================================================== */}
        <section className="learning-banner-section">
          <div className="site-container">
            <div className="learning-banner-card">
              <div className="learning-banner-icon">
                <Lightbulb size={24} />
              </div>
              <div className="learning-banner-content">
                <div className="learning-banner-tag">Mindset & Current Exploration</div>
                <h3 className="learning-banner-heading">
                  Diving Deep into AI & Looking for New Hackathons
                </h3>
                <p className="learning-banner-text">
                  I am focused on deeply understanding artificial intelligence and exploring practical agentic architectures. Along with broadening my computer science foundations and testing emerging technologies, my strongest passion is always in <strong>Front-End Web Development</strong> and <strong>Agentic AI Solutions</strong>. Right now, I am actively looking for upcoming hackathons to participate in, team up with fellow builders, and develop high-impact prototypes.
                </p>
              </div>
              <div className="learning-banner-metrics">
                <div className="metric-box">
                  <span className="metric-num">Core</span>
                  <span className="metric-label">Web + AI</span>
                </div>
                <div className="metric-box">
                  <span className="metric-num">Active</span>
                  <span className="metric-label">Hackathon Hunter</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            ABOUT ME: Editorial layout with rich highlights
            ================================================================== */}
        <section className="about-section" id="about">
          <div className="site-container">
            <div className="about-card">
              <div className="section-header" style={{ marginBottom: 20 }}>
                <span className="section-tag tag-blue">About Me</span>
                <h2 className="section-title">
                  Curious student. Practical builder.
                </h2>
              </div>

              <div className="about-two-col">
                <div className="about-lead-col">
                  <p className="about-lead-highlight">
                    "I am a Computer Science student at PMAS Arid Agriculture
                    University, Rawalpindi."
                  </p>
                  <p>
                    I enjoy building responsive web interfaces and exploring
                    how Agentic AI can solve practical problems. For me, software development is about turning concepts into tangible, responsive tools that people actually enjoy using.
                  </p>
                </div>

                <div className="about-second-col">
                  <p>
                    Through coursework, independent projects, and hackathon
                    participation, I am continuously improving my development
                    skills.
                  </p>
                  <p style={{ marginTop: 14 }}>
                    I never stop learning new concepts. Every day, I experiment with modern tools, clean design principles, and AI frameworks to build robust, industry-ready software.
                  </p>
                </div>
              </div>

              <div className="about-key-highlights">
                <div className="highlight-item highlight-blue">
                  <div className="highlight-icon">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Degree & University</span>
                    <span className="highlight-value">
                      BS Computer Science · PMAS AAUR
                    </span>
                  </div>
                </div>

                <div className="highlight-item highlight-purple">
                  <div className="highlight-icon">
                    <Brain size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Primary Passions</span>
                    <span className="highlight-value">
                      Front-End & Agentic AI
                    </span>
                  </div>
                </div>

                <div className="highlight-item highlight-emerald">
                  <div className="highlight-icon">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <span className="highlight-label">Current Journey</span>
                    <span className="highlight-value">
                      Deep AI Study & Seeking Hackathons
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            SKILLS SECTION: Exact 5 Categories with Colorful, Premium Cards
            ================================================================== */}
        <section className="skills-section" id="skills">
          <div className="site-container">
            <div className="section-header">
              <span className="section-tag tag-indigo">Technical Toolkit</span>
              <h2 className="section-title">Skills & Technologies</h2>
              <p className="section-desc">
                A structured overview of core technical competencies, programming tools, and development frameworks.
              </p>
            </div>

            <div className="skills-grid">
              {skillsData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.category}
                    className={`skill-card skill-card-${item.theme}`}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                  >
                    <div className="skill-card-top">
                      <div className="skill-header-group">
                        <div className={`skill-icon-bubble bubble-${item.theme}`}>
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="skill-title">{item.category}</h3>
                          <span className="skill-count">{item.skills.length} core technologies</span>
                        </div>
                      </div>
                      <span className={`skill-order-badge badge-${item.theme}`}>
                        0{index + 1}
                      </span>
                    </div>

                    <p className="skill-category-desc">{item.desc}</p>

                    <div className="skill-pills-wrap">
                      {item.skills.map((skill) => (
                        <span key={skill} className={`skill-pill pill-${item.theme}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================
            PROJECTS SECTION: Exact 8 Projects with Vibrant Cards & Top 2 Emphasized
            ================================================================== */}
        <section className="projects-section" id="projects">
          <div className="site-container">
            <div className="section-header">
              <span className="section-tag tag-purple">Portfolio Showcase</span>
              <h2 className="section-title">Selected Projects</h2>
              <p className="section-desc">
                Hands-on applications across front-end web development, autonomous agents, and hackathon prototypes.
              </p>
            </div>

            <div className="projects-grid">
              {projectsData.map((project, index) => {
                const IconComponent = project.icon;
                return (
                  <div
                    key={project.id}
                    className={`project-card-col ${
                      project.isFeatured ? "featured" : "standard"
                    }`}
                  >
                    <motion.article
                      className={`project-card project-theme-${project.theme} ${
                        project.isFeatured ? "is-featured-card" : ""
                      }`}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.1 }}
                      transition={{ duration: 0.4, delay: (index % 4) * 0.06 }}
                    >
                      {/* Colorful Project Visual Preview Header */}
                      <div className={`project-preview preview-${project.theme}`}>
                        {project.badge && (
                          <div className={`preview-badge badge-tag-${project.theme}`}>
                            <Sparkles size={12} />
                            {project.badge}
                          </div>
                        )}
                        <div className={`preview-graphic graphic-${project.theme}`}>
                          <IconComponent size={26} />
                        </div>
                        <span className="preview-caption">
                          {project.category}
                        </span>
                      </div>

                      <div className="project-body">
                        <div className="project-meta-row">
                          <span className={`project-category-text cat-${project.theme}`}>
                            {project.category}
                          </span>
                          <span className="project-number-tag">
                            #{String(index + 1).padStart(2, "0")}
                          </span>
                        </div>

                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>

                        <div className="project-tags">
                          {project.tags.map((tag) => (
                            <span key={tag} className={`project-tag tag-${project.theme}`}>
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="project-links">
                          <span className="project-status">
                            <span className={`status-indicator indicator-${project.theme}`} />
                            {project.isFeatured ? "Featured Project" : "Functional Prototype"}
                          </span>
                          <div className={`project-feature-pill pill-${project.theme}`}>
                            <Sparkles size={12} />
                            <span>{project.featurePill}</span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================
            JOURNEY SECTION: Chronological Vertical Timeline with Colorful Nodes
            ================================================================== */}
        <section className="journey-section" id="journey">
          <div className="site-container">
            <div className="section-header">
              <span className="section-tag tag-emerald">Milestones</span>
              <h2 className="section-title">Education & Journey</h2>
              <p className="section-desc">
                Academic progress, intensive AI training, and competitive hackathons arranged in strict chronological sequence.
              </p>
            </div>

            <div className="timeline-wrapper">
              {journeyData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={`${item.title}-${index}`}
                    className={`timeline-entry entry-${item.theme}`}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.05 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                  >
                    <div className={`timeline-dot dot-${item.theme}`}>
                      <IconComponent size={16} />
                    </div>

                    <div className={`timeline-card card-theme-${item.theme}`}>
                      <div className="timeline-header-line">
                        <span className={`timeline-date-badge badge-${item.theme}`}>
                          {item.period}
                        </span>
                        <span className="timeline-category-tag">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="timeline-card-title">{item.title}</h3>
                      <p className={`timeline-institution text-${item.theme}`}>
                        {item.institution}
                      </p>
                      <p className="timeline-card-desc">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==================================================================
            CONTACT SECTION: Welcoming, Colorful Accent Gradient with Outlined Icons
            ================================================================== */}
        <section className="contact-section" id="contact">
          <div className="site-container">
            <div className="contact-card">
              <div className="contact-glow-circle circle-1" />
              <div className="contact-glow-circle circle-2" />

              <span className="contact-tag">Direct Communication</span>
              <h2 className="contact-title">Have an idea? Let's connect.</h2>
              <p className="contact-desc">
                Whether you want to discuss a front-end collaboration, explore new Agentic AI ideas, or just connect with a fellow computer science student — feel free to reach out anytime!
              </p>

              <div className="contact-links-grid">
                <a
                  href="mailto:harisahmerkhan@gmail.com"
                  className="contact-pill-btn email-btn"
                >
                  <div className="contact-icon-box">
                    <Mail size={18} />
                  </div>
                  <div className="contact-btn-text">
                    <span className="contact-btn-label">Email Me</span>
                    <span className="contact-btn-value">harisahmerkhan@gmail.com</span>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-pill-btn github-btn"
                >
                  <div className="contact-icon-box">
                    <Github size={18} />
                  </div>
                  <div className="contact-btn-text">
                    <span className="contact-btn-label">Open Source</span>
                    <span className="contact-btn-value">GitHub Profile</span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-pill-btn linkedin-btn"
                >
                  <div className="contact-icon-box">
                    <Linkedin size={18} />
                  </div>
                  <div className="contact-btn-text">
                    <span className="contact-btn-label">Network</span>
                    <span className="contact-btn-value">LinkedIn Profile</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER: Minimal, elegant, social links
          ==================================================================== */}
      <footer className="footer-wrap">
        <div className="site-container">
          <div className="footer-content">
            <div className="footer-left">
              <span className="footer-brand">HA.</span>
              <div>
                <span className="footer-name">Haris Ahmer Khan</span>
                <p className="footer-text">
                  Designed and built with care. Always exploring, building, and learning.
                </p>
              </div>
            </div>

            <div className="footer-socials">
              <a
                href="mailto:harisahmerkhan@gmail.com"
                className="footer-social-icon icon-mail"
                aria-label="Email Haris"
              >
                <Mail size={17} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon icon-git"
                aria-label="GitHub Profile"
              >
                <Github size={17} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-icon icon-in"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={17} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}