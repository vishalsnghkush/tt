import { Project, Experience, SkillCategory, AnimalCompanion } from '../types';

export const PERSONAL_INFO = {
  name: "Aditi Malviya",
  tagline: "Full-Stack Developer & CS Engineer",
  bio: "B.Tech Computer Science student at University of Delhi FoT (CGPA 8.7). Specializing in scalable full-stack development and algorithmic optimization. Combines heavy problem-solving (GFG FoT Rank #1, 350+ DSA) with hands-on experience deploying production-ready mobile features and containerized systems.",
  location: "Delhi, India",
  email: "malviyaaditi2006@gmail.com",
  phone: "+91 88820 33622",
  github: "https://github.com/aditi-malviya666",
  linkedin: "https://linkedin.com/in/aditi-malviya-a79493325",
  portfolio: "https://aditi-dev.vercel.app",
  status: "✨ Available for Engineering & Product Roles",
  education: {
    institution: "University of Delhi, Faculty of Technology",
    degree: "B.Tech in Computer Science and Engineering",
    cgpa: "8.7 / 10",
    period: "2024 – 2028",
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (C++)",
      "Database Management Systems (PostgreSQL)",
      "Operating Systems & Process Scheduling",
      "Computer Vision & Deep Learning",
      "Design Systems & Human-Computer Interaction"
    ],
    honors: [
      "GeeksforGeeks FoT Institutional Rank #1 (Score: 853)",
      "2nd Runner-Up, Offline Competitive Programming Contest (DU FoT)",
      "FoT Hackathon (Internal Hackathon, SIH 2024) Participant",
      "ArtPark CodeForge Hackathon (IISc Bangalore) — Team Debug Squad"
    ]
  },
  metrics: [
    { label: "DSA Problems Solved", value: "350+" },
    { label: "GFG University Rank", value: "#1" },
    { label: "Active Learners Impacted", value: "500K+" },
    { label: "ML Model Accuracy", value: "98.7%" }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: "cbt-portal",
    title: "PrecisionPrep • Adaptive CBT Portal",
    name: "PrecisionPrep",
    eyebrow: "AI TEST PREPARATION",
    stackCategory: "Web",
    cardColor: "#E5DDF0",
    tagline: "High-stakes testing platform with LaTeX parsing & proctoring UX",
    category: "AI & Web",
    featured: true,
    year: "2026",
    role: "Lead Fullstack & UI/UX Engineer",
    image: "/projects/precisionprep-exam.png",
    screenshots: [
      {
        src: "/projects/precisionprep-exam.png",
        label: "Exam Interface",
        alt: "PrecisionPrep adaptive CBT exam interface with LaTeX rendering"
      },
      {
        src: "/projects/precisionprep-preview.jpeg",
        label: "Overview",
        alt: "PrecisionPrep dynamic test configuration and performance overview"
      }
    ],
    metrics: [
      { label: "JSON Parse Rate", value: "100%" },
      { label: "Query Latency", value: "<100ms" },
      { label: "Setup Overhead", value: "-90%" },
      { label: "Daily Queries", value: "100+" }
    ],
    description: "An adaptive computer-based testing (CBT) environment engineered for stress-free exam taking with real-time browser proctoring, live LaTeX formula rendering, and sub-100ms response times.",
    tags: ["Next.js", "TypeScript", "React", "PostgreSQL", "Drizzle ORM", "Docker Compose", "Tailwind CSS"],
    links: {
      github: "https://github.com/aditi-malviya666/Software-Engineering-Project",
      live: "https://precisionprep.vercel.app/"
    },
    highlights: [
      "Engineered regex-based LaTeX formula sanitization pipeline ensuring 100% JSON parse reliability",
      "Designed polymorphic PostgreSQL schema using Drizzle ORM cutting query times under 100ms",
      "Created an accessible, distraction-free CBT interface with real-time simulated proctoring telemetry",
      "Containerized end-to-end via Docker Compose, slashing development spin-up by 90%"
    ],
    caseStudy: {
      problem: "Standard examination portals suffer from visual clutter, laggy math formula rendering, and anxiety-inducing proctoring popups that break candidate concentration.",
      audience: "University students, academic proctors, and technical test creators.",
      designDecisions: [
        "Minimal Cognitive Load: Distraction-free exam canvas with collapsible navigation tray.",
        "Non-intrusive Proctoring: Gentle ambient indicators rather than jarring modal popups for tab switches.",
        "Instant Formula Feedback: Real-time KaTeX math rendering preview side-by-side with raw markdown.",
        "Keyboard-First Accessibility: Complete tab/arrow key navigation for rapid answering without mouse friction."
      ],
      technicalArchitecture: [
        "Next.js App Router with Server Components for instant question page loads.",
        "Drizzle ORM with polymorphic schema handling dynamic question types.",
        "Dockerized multi-stage build running Next.js, Postgres, and Redis cache in isolated containers."
      ],
      impact: [
        "100% JSON parse success across 100+ stress-test cycles.",
        "Query response times plummeted below 100ms under concurrent exam loads.",
        "Setup and container deployment time reduced by 90%."
      ]
    },
    interactiveType: "cbt-proctor"
  },
  {
    id: "studifysuccess",
    title: "StudifySuccess Mobile Features & AI Mascot",
    name: "Studify Success",
    eyebrow: "LEARNING & TEAM OPERATIONS",
    stackCategory: "Mobile",
    cardColor: "#EFDCE2",
    tagline: "Architected companion UX & rebuilt quiz engine for 500K+ active learners",
    category: "UX & Open Source",
    featured: true,
    year: "2026",
    role: "Mobile App Developer & UX Intern",
    image: "/projects/studify-learning.png",
    layoutType: "mobile-collage",
    collageImages: [
      "/projects/studify-preview.jpeg",
      "/projects/studify-learning.png"
    ],
    screenshots: [
      {
        src: "/projects/studify-learning.png",
        label: "Learning Space",
        alt: "Studify personalized learning, AI test generator, and notes module"
      },
      {
        src: "/projects/studify-preview.jpeg",
        label: "Companion App",
        alt: "Studify mobile study planner and quiz engine"
      }
    ],
    metrics: [
      { label: "Active Learners", value: "500K+" },
      { label: "Session Drops", value: "-40%" },
      { label: "Grading Precision", value: "100%" },
      { label: "Core Modules", value: "9+" }
    ],
    description: "Designed and engineered 9+ mobile core modules including an animated AI study mascot, an intelligent study planner, and a rebuilt quiz grading engine that eliminated session drops across 500K+ learners on Google Play.",
    tags: ["Mobile UX", "React Native", "Google Play App", "AI Mascot", "State Management", "Design Systems"],
    links: {
      github: "https://github.com/aditi-malviya666",
      live: "https://play.google.com/store/apps/details?id=com.studifysuccess.courses"
    },
    highlights: [
      "Architected 9+ production features: AI Mascot companion, Study Planner, and Dynamic Test Generator",
      "Rebuilt quiz grading engine to 100% precision, fixing auth race conditions and cutting drops by 40%",
      "Engineered animated emotional mascot states (encouraging, celebrating, thinking) driving daily streaks"
    ],
    caseStudy: {
      problem: "Students frequently abandon self-study sessions due to lack of immediate feedback and anxiety during timed mock tests.",
      audience: "500,000+ competitive exam aspirants and high school students.",
      designDecisions: [
        "Playful AI Mascot Companion: An expressive on-screen tutor celebrating streaks and offering hints.",
        "Frictionless Auth Recovery: Silent background token refresh that prevented quiz session loss.",
        "Progressive Difficulty Pacing: Gentle visual pacing indicators keeping anxiety low."
      ],
      technicalArchitecture: [
        "State machine governing mascot emotional transitions based on quiz accuracy.",
        "Optimistic local state updates with reliable background queue synchronization."
      ],
      impact: [
        "Reduced quiz abandonments and session drops by ~40%.",
        "Increased daily study streak completion across 500K+ active mobile app users."
      ]
    },
    interactiveType: "mascot-chat"
  },
  {
    id: "chronos-flow",
    title: "Chronos Flow • Personal Columnar Planner",
    name: "Chronos Flow",
    eyebrow: "PRODUCTIVITY WORKSPACE",
    stackCategory: "Web",
    cardColor: "#EADBF5",
    tagline: "Glassmorphic personal workspace with Pomodoro, habits & columnar timeline",
    category: "AI & Web",
    featured: true,
    year: "2026",
    role: "Lead Frontend Engineer & Interaction Designer",
    image: "/projects/chronos-flow.png",
    screenshots: [
      {
        src: "/projects/chronos-flow.png",
        label: "Workspace",
        alt: "Chronos Flow glassmorphic productivity workspace with Pomodoro timer and daily agenda"
      }
    ],
    metrics: [
      { label: "Pomodoro Audio", value: "3 Modes" },
      { label: "Data Storage", value: "100% Local" },
      { label: "Core Modules", value: "4 Spaces" },
      { label: "UI Aesthetic", value: "Glassmorphic" }
    ],
    description: "Designed and developed a glassmorphic productivity workspace featuring a Daily Agenda, Habit Routine Tracker, Long-Term Roadmap Kanban Board, interactive Pomodoro Focus Timer with ambient sounds (rain, campfire, ocean waves), and Daily Journaling.",
    tags: ["HTML5", "Vanilla CSS3", "JavaScript (ES6+)", "FontAwesome", "LocalStorage", "Glassmorphism"],
    links: {
      github: "https://github.com/aditi-malviya666/Chronos-Flow",
      live: "https://chronos-flow-planner.vercel.app/"
    },
    highlights: [
      "Engineered glassmorphic personal workspace uniting Daily Agenda, Habit Routine Tracker, and Long-Term Roadmap",
      "Built interactive Pomodoro Focus Timer with synthesized ambient background soundscapes (rain, campfire, ocean waves)",
      "Zero-latency state persistence with local storage serialization and fluid columnar date navigation"
    ],
    caseStudy: {
      problem: "Context switching between fragmented applications for daily scheduling, habit tracking, Pomodoro focus pacing, and long-term roadmap planning drains cognitive focus.",
      audience: "Developers, students, and creative engineers desiring an aesthetic, distraction-free columnar command center.",
      designDecisions: [
        "Glassmorphic Visual Hierarchy: Soft blurred card surfaces with subtle frosted borders and high text contrast.",
        "Ambient Sound Integration: Built-in relaxing acoustic audio cues directly linked to Pomodoro work sessions.",
        "Columnar Date Pacing: Intuitive horizontal calendar layout showing yesterday, today, and tomorrow at a glance."
      ],
      technicalArchitecture: [
        "Vanilla ES6+ JavaScript architecture with modular event listeners and zero heavy dependencies.",
        "CSS Glassmorphism with hardware-accelerated backdrop-filter and responsive CSS variables.",
        "Safe client-side LocalStorage schema guaranteeing zero data leakage to external clouds."
      ],
      impact: [
        "Instant sub-30ms load times deployed live on Vercel.",
        "100% private, client-side data persistence with offline capability."
      ]
    },
    interactiveType: "chronos-flow"
  },
  {
    id: "agriverse-app",
    title: "AgriVerse Mobile Application",
    name: "AgriVerse Mobile",
    eyebrow: "FARMING COMPANION",
    stackCategory: "Mobile",
    cardColor: "#E1E8D3",
    tagline: "Native offline crop symptom scanner with localized audio guidance",
    category: "AI & Web",
    featured: true,
    year: "2026",
    role: "Mobile App Architect & Lead Developer",
    image: "/projects/agriverse-mobile-pest.png",
    layoutType: "mobile-collage",
    collageImages: [
      "/projects/agriverse-mobile-pest.png",
      "/projects/agriverse-mobile-mandi.png"
    ],
    screenshots: [
      {
        src: "/projects/agriverse-mobile-pest.png",
        label: "Pest Scanner",
        alt: "AgriVerse AI Pest & Disease Scanner interface"
      },
      {
        src: "/projects/agriverse-mobile-mandi.png",
        label: "Mandi Rates",
        alt: "AgriVerse real-time mandi rates and market pricing"
      },
      {
        src: "/projects/agriverse-mobile-preview.jpeg",
        label: "Overview",
        alt: "AgriVerse mobile offline crop pathology scanner"
      }
    ],
    metrics: [
      { label: "Offline Ready", value: "100%" },
      { label: "Latency", value: "32ms" },
      { label: "App Size", value: "<15MB" },
      { label: "Languages", value: "5+" }
    ],
    description: "Cross-platform mobile application providing on-device plant pathology diagnostics with real-time camera viewfinder overlays, voice-first feedback, and localized treatment remedies.",
    tags: ["React Native", "TypeScript", "On-Device AI", "TFLite", "Mobile UX", "Cross-Platform"],
    links: {
      github: "https://github.com/aditi-malviya666/AgriVerse_app"
    },
    highlights: [
      "Engineered lightweight mobile interface bundling quantized MobileNetV3 for instant offline diagnosis",
      "Implemented voice-guided multi-lingual assistance for accessibility across diverse rural communities",
      "Architected background sync worker that queues gradient weight updates when connectivity is restored"
    ],
    caseStudy: {
      problem: "Farmers in cellular dead zones cannot use cloud-dependent diagnostic tools when urgent crop blight attacks occur.",
      audience: "Farmers, agrarian field inspectors, village co-ops.",
      designDecisions: [
        "One-Handed Thumb Zone UI: All primary actions reachable with a single hand while holding a diseased leaf in the field.",
        "Audio First Feedback: Spoken diagnostic remedies in regional dialects.",
        "Instant Offline Cache: Zero network spinner screens."
      ],
      technicalArchitecture: [
        "TFLite on-device quantized model executing within 32ms.",
        "Offline-first state machine managing asynchronous background gradient queueing."
      ],
      impact: [
        "Full diagnostic functionality sustained without any internet connection.",
        "Package size kept under 15MB for rapid installation on entry-level smartphones."
      ]
    },
    interactiveType: "fl-nodes"
  },
  {
    id: "diabetic-retinopathy",
    title: "Diabetic Retinopathy (DR) Diagnosis AI",
    name: "Diabetic Retinopathy",
    eyebrow: "RESEARCH • RETINAL HEALTH",
    stackCategory: "AI & ML",
    isResearch: true,
    cardColor: "#E6DCE8",
    tagline: "Automated fundus retinal vessel segmentation & clinical severity grading",
    category: "Systems & Vision",
    featured: true,
    year: "2026",
    role: "Computer Vision & Clinical UI Designer",
    image: "/projects/dr-retina-workstation.png",
    screenshots: [
      {
        src: "/projects/dr-retina-workstation.png",
        label: "DR Workstation",
        alt: "DR-PINN Retinal Hemodynamics Workstation with U-Net Vessels, Anatomical Overlay and Clear Vessel Mask"
      },
      {
        src: "/projects/dr-retina-2.png",
        label: "Vessel Mask & Overlays",
        alt: "DR-PINN U-Net retinal vessel segmentation mask and anatomical overlays"
      },
      {
        src: "/projects/dr-retina-preview.jpeg",
        label: "Overview",
        alt: "Diabetic Retinopathy automated retinal vessel segmentation and grading"
      }
    ],
    metrics: [
      { label: "Classification", value: "97.4%" },
      { label: "Inference Time", value: "55ms" },
      { label: "Severity Stages", value: "5 Levels" },
      { label: "Vessel Map", value: "High-Res" }
    ],
    description: "An automated clinical screening platform for ophthalmologists that analyzes fundus eye images to segment retinal blood vessels, detect microaneurysms, and grade Diabetic Retinopathy severity.",
    tags: ["Python", "PyTorch", "Computer Vision", "UNet", "Medical Imaging", "Flask"],
    links: {
      github: "https://github.com/aditi-malviya666/Diabetic-Retinopathy",
      live: "https://diabetic-retinopathy-xk2p.onrender.com/"
    },
    highlights: [
      "Engineered UNet architecture for precise retinal blood vessel segmentation and exudate detection",
      "Designed a clean clinical dashboard providing ophthalmologists with visual lesion overlays",
      "Implemented automated 5-stage clinical severity scoring (No DR, Mild, Moderate, Severe, PDR)"
    ],
    caseStudy: {
      problem: "Diabetic Retinopathy is a leading cause of preventable blindness, but manual fundus inspection is time-consuming and prone to human diagnostic fatigue.",
      audience: "Ophthalmologists, optometrists, healthcare clinics, screening camps.",
      designDecisions: [
        "Dual Image Comparison: Side-by-side view of raw fundus photo alongside segmented vessel heatmap.",
        "Color-Coded Severity Scale: Clear clinical warning levels from Grade 0 (Healthy) to Grade 4 (Proliferative).",
        "PDF Report Generation: One-click exportable diagnostic summary for patient records."
      ],
      technicalArchitecture: [
        "Deep convolutional UNet for pixel-level blood vessel segmentation.",
        "Quantized ResNet backbone classifying disease stage with 97.4% accuracy."
      ],
      impact: [
        "Accelerated retinal screening triage time from 15 minutes to under 5 seconds.",
        "Live deployment accessible on public cloud via Render."
      ]
    },
    interactiveType: "dr-retina"
  },
  {
    id: "fda-project",
    title: "FDA • Weather Prediction & Analytics",
    name: "FDA Weather Analysis",
    eyebrow: "FUNDAMENTALS OF DATA ANALYSIS",
    stackCategory: "AI & ML",
    cardColor: "#E8E5D4",
    tagline: "Fundamentals of Data Analysis • Meteorological forecasting & ML benchmarking",
    category: "AI & Web",
    featured: false,
    year: "2025",
    role: "Data Analyst & ML Engineer",
    image: "/projects/fda-project.svg",
    metrics: [
      { label: "Predictive Acc.", value: "94.8%" },
      { label: "Features Mined", value: "24+" },
      { label: "Weather Records", value: "100K+" },
      { label: "Algorithms", value: "XGB/RF" }
    ],
    description: "Developed as a coursework capstone for Fundamentals of Data Analysis (FDA), this meteorological data science pipeline analyzes high-dimensional atmospheric records, engineering barometric and humidity features to benchmark precipitation severity predictions with XGBoost and Random Forest.",
    tags: ["Python", "Pandas", "XGBoost", "scikit-learn", "Matplotlib", "Seaborn", "Feature Engineering"],
    links: {
      github: "https://github.com/aditi-malviya666/FDA"
    },
    highlights: [
      "Engineered automated feature extraction pipeline converting raw atmospheric telemetry into 24+ predictive meteorological features",
      "Benchmarked XGBoost, Random Forest, and LightGBM models with 10-fold cross-validation, achieving 94.8% event accuracy",
      "Formulated threshold-derived precipitation severity classification eliminating extreme-weather label imbalance"
    ],
    caseStudy: {
      problem: "Raw meteorological time-series datasets contain severe sensor dropouts, seasonal non-stationarity, and noisy atmospheric fluctuations that degrade standard weather forecasting models.",
      audience: "Data analysts, meteorological researchers, and academic peers in Fundamentals of Data Analysis (FDA).",
      designDecisions: [
        "Clean Diagnostic Telemetry: Heatmaps and violin plots illustrating correlation structures between atmospheric pressure, dew point, and rainfall.",
        "Threshold-Derived Severity Tiers: Balanced multi-class labeling for precipitation levels.",
        "Interpretability First: SHAP and feature importance rankings identifying primary meteorological drivers."
      ],
      technicalArchitecture: [
        "Pandas and NumPy data preprocessing pipeline with robust z-score outlier filtering and imputation.",
        "Scikit-learn and XGBoost regression/classification ensemble with stratified 10-fold cross-validation.",
        "Publication-ready Matplotlib and Seaborn visualization suite."
      ],
      impact: [
        "94.8% prediction accuracy for adverse precipitation events.",
        "Coursework capstone project for Fundamentals of Data Analysis (FDA) at DU FoT."
      ]
    },
    interactiveType: "fda-safety"
  },
  {
    id: "indoor-nav",
    title: "Indoor Navigation System (SIH 2024)",
    name: "Indoor Navigator",
    eyebrow: "SENSOR-BASED NAVIGATION",
    stackCategory: "Mobile",
    cardColor: "#D8E5E9",
    tagline: "GPS-independent wayfinding & spatial mapping for complex multi-story venues",
    category: "Systems & Vision",
    featured: true,
    year: "2025",
    role: "Computer Vision & Spatial UI Designer",
    image: "/projects/indoor-nav.svg",
    metrics: [
      { label: "Position Error", value: "<0.8m" },
      { label: "HUD Frame Rate", value: "60 FPS" },
      { label: "Floors Mapped", value: "Multi" },
      { label: "SIH Status", value: "Participant" }
    ],
    description: "Engineered for the Smart India Hackathon (SIH), this system enables precision navigation inside multi-floor hospitals, airports, and campuses without GPS, fusing BLE beacon telemetry with AR visual cues.",
    tags: ["Python", "Computer Vision", "BLE Beacons", "Dead Reckoning", "AR Wayfinding", "OpenCV"],
    links: {
      github: "https://github.com/aditi-malviya666/Indoor_navigation"
    },
    highlights: [
      "Built sensor-fusion localization combining Bluetooth Low Energy (BLE) RSSI and visual dead reckoning",
      "Designed an augmented reality directional overlay projecting path arrows onto the camera viewfinder",
      "Participated in FoT Hackathon (Internal Hackathon, SIH 2024) for breakthrough spatial accessibility"
    ],
    caseStudy: {
      problem: "GPS signals completely fail inside enclosed concrete structures, leaving visitors, patients, and emergency responders lost in massive facilities.",
      audience: "Hospital patients, transit passengers, facility managers, emergency crews.",
      designDecisions: [
        "Augmented Reality Breadcrumb Trails: Clear glowing floor path lines minimizing mental map conversion effort.",
        "Floor-Aware Transition UI: Gentle elevator and escalator guidance prompts before floor transitions.",
        "High-Contrast Accessibility: High-visibility waypoints for visually impaired navigation."
      ],
      technicalArchitecture: [
        "Trilateration algorithm coupled with Kalman filtering on BLE RSSI signals.",
        "Graph-based A* routing finding the shortest accessible path including wheelchair-friendly routes."
      ],
      impact: [
        "Positioning accuracy bounded within 0.8 meters indoors.",
        "Participated in FoT Hackathon (Internal Hackathon, SIH 2024) at Faculty of Technology, University of Delhi."
      ]
    },
    interactiveType: "indoor-nav"
  },
  {
    id: "agriverse-web",
    title: "AgriVerse Web • Plant Leaf Disease Platform",
    name: "AgriVerse Web",
    eyebrow: "RESEARCH • SMART AGRICULTURE",
    stackCategory: "Web",
    isResearch: true,
    cardColor: "#D7E5CF",
    tagline: "Decentralized Federated Learning diagnosis with farmer-first mobile UX",
    category: "Systems & Vision",
    featured: true,
    year: "2026",
    role: "ML UX Designer & Federated Systems Engineer",
    image: "/projects/agriverse-dashboard.png",
    screenshots: [
      {
        src: "/projects/agriverse-dashboard.png",
        label: "Dashboard",
        alt: "AgriVerse crop yield prediction dashboard with soil telemetry"
      },
      {
        src: "/projects/agriverse-analysis.png",
        label: "Disease analysis",
        alt: "AgriVerse leaf pathology diagnosis showing black rot detection and treatment remedies"
      }
    ],
    metrics: [
      { label: "Model Accuracy", value: "98.7%" },
      { label: "Data Kept Local", value: "100%" },
      { label: "Inference Time", value: "48ms" },
      { label: "Bandwidth Saved", value: "85%" }
    ],
    description: "A decentralized edge diagnosis platform that empowers farmers with instant crop disease detection via MobileNetV3 and FedAvg, keeping agricultural imagery private on-device.",
    tags: ["Python", "PyTorch", "Federated Learning", "MobileNetV3", "Flask", "Streamlit", "FedAvg"],
    links: {
      github: "https://github.com/vishalsnghkush/AgriVerse",
      live: "https://agriverse-farmer.onrender.com"
    },
    highlights: [
      "Achieved 98.7% classification accuracy using decentralized FedAvg aggregation across distributed farmer nodes",
      "Designed high-contrast, bilingual touch UI operable under bright daylight in rural agricultural fields",
      "Integrated audio diagnosis narration and visual symptom heatmaps for low-literacy accessibility"
    ],
    caseStudy: {
      problem: "Rural farmers face poor connectivity, low tech literacy, and valid privacy concerns regarding sharing their agricultural land data with centralized servers.",
      audience: "Smallholder farmers, agricultural extension workers, agronomy researchers.",
      designDecisions: [
        "High-Contrast Daylight Palette: Deep green and golden amber elements with 7:1 contrast ratio.",
        "Voice-Assisted Cues: Audio symptom readouts in regional languages.",
        "Visual Bounding Heatmaps: Plain English advice paired with visual color overlays on leaf lesions."
      ],
      technicalArchitecture: [
        "Decentralized Federated Learning server aggregating weights using FedAvg without transmitting raw images.",
        "MobileNetV3 quantized model running sub-50ms inference on low-cost Android hardware.",
        "Offline-first PWA caching previous diagnoses in IndexedDB."
      ],
      impact: [
        "98.7% diagnostic accuracy preserved without exposing farmer crop imagery.",
        "Deployed and tested on live public cloud via Render and Streamlit."
      ]
    },
    interactiveType: "fl-nodes"
  },
  {
    id: "cpu-scheduler",
    title: "CPU Scheduler Pro • Scheduling Workspace",
    name: "CPU Scheduler Pro",
    eyebrow: "OPERATING SYSTEMS",
    stackCategory: "Systems",
    cardColor: "#DCE3EC",
    tagline: "Interactive OS process scheduling visualizer with real-time Gantt telemetry",
    category: "Systems & Vision",
    featured: true,
    year: "2026",
    role: "Systems Programmer & UI Architect",
    image: "/projects/cpu-scheduler-preview.jpeg",
    screenshots: [
      {
        src: "/projects/cpu-scheduler-preview.jpeg",
        label: "Gantt Simulator",
        alt: "CPU Scheduler Pro operating systems visualization simulator"
      }
    ],
    metrics: [
      { label: "Algorithms", value: "7+" },
      { label: "Gantt 60fps", value: "100%" },
      { label: "CPU Accuracy", value: "100%" },
      { label: "Live Simulator", value: "Interactive" }
    ],
    description: "An interactive operating system workspace that visualizes CPU process scheduling algorithms (FCFS, SJF Preemptive/Non, Round Robin, Priority) with live Gantt charts and waiting time telemetry.",
    tags: ["React", "TypeScript", "Operating Systems", "Gantt Visualization", "Algorithms", "Tailwind CSS"],
    links: {
      github: "https://github.com/aditi-malviya666/OS_CPU_Scheduler",
      live: "https://cpuscheduler-one.vercel.app/"
    },
    highlights: [
      "Simulates 7+ OS scheduling algorithms with accurate context-switch overhead calculation",
      "Crafted interactive Gantt chart with drag-and-drop process arrival and burst time inputs",
      "Computes average waiting time, turnaround time, and CPU utilization metrics in real time"
    ],
    caseStudy: {
      problem: "Computer science students and OS engineers struggle to build intuition for preemptive context switching and starvation phenomena from textbook formulas.",
      audience: "Computer science students, OS professors, systems software engineers.",
      designDecisions: [
        "Color-Coded Process Pacing: Distinct cheerful color IDs for every running task (P1-Pn).",
        "Step-By-Step Playback: Play, pause, step-forward, and speed slider to dissect edge cases.",
        "Instant Comparative Analysis: Side-by-side comparison of Round Robin quantum variations."
      ],
      technicalArchitecture: [
        "Deterministic discrete-event simulation engine implemented in TypeScript.",
        "Reactive SVG Gantt chart with smooth horizontal scroll and scale animation."
      ],
      impact: [
        "Adopted by university peers as a core study reference for Operating Systems coursework.",
        "Zero-latency simulation of 50+ concurrent processes."
      ]
    },
    interactiveType: "cpu-scheduler"
  },
  {
    id: "ai-onboarding",
    title: "Adaptly • AI-Adaptive Onboarding (IISc)",
    name: "Adaptly",
    eyebrow: "ADAPTIVE LEARNING",
    stackCategory: "AI & ML",
    cardColor: "#D6E6E3",
    tagline: "Autonomous competency parsing & dynamic DAG pathway generator",
    category: "AI & Web",
    featured: true,
    year: "2026",
    role: "Interaction Designer & Frontend Engineer",
    image: "/projects/adaptly-preview.jpeg",
    screenshots: [
      {
        src: "/projects/adaptly-preview.jpeg",
        label: "Learning DAG",
        alt: "Adaptly AI-adaptive onboarding roadmap and skill gap analyzer"
      }
    ],
    metrics: [
      { label: "Ramp Time", value: "-45%" },
      { label: "Path Accuracy", value: "96.4%" },
      { label: "Interactive Nodes", value: "50+" },
      { label: "IISc Hackathon", value: "Featured" }
    ],
    description: "Developed for the IISc Hackathon, Adaptly parses candidate resumes or diagnostic quizzes to dynamically construct customized DAG learning roadmaps, reducing engineer onboarding ramp-up.",
    tags: ["React", "TypeScript", "LLM Integration", "Dynamic DAG", "Tailwind CSS", "Micro-interactions"],
    links: {
      github: "https://github.com/aditi-malviya666/AI-Adaptive-Onboarding-Engine",
      live: "https://ai-adaptive-onboarding-engine-ar6v.onrender.com/"
    },
    highlights: [
      "Designed node-based visual roadmap displaying prerequisite dependencies with physics-spring connections",
      "Created dynamic diagnostic engine that recalibrates syllabus difficulty in real time",
      "Engineered micro-credential milestone badges with celebratory particle animations"
    ],
    caseStudy: {
      problem: "Generic static developer onboarding docs overwhelm engineers with irrelevant modules and lack clear visibility into mastery progression.",
      audience: "New software engineering hires, engineering managers, bootcamp students.",
      designDecisions: [
        "Visual Dependency Graph: Interactive DAG node graph inspired by skill trees.",
        "Bite-Sized Milestones: Cards grouped by sprint with progressive disclosure of advanced topics.",
        "Micro-Celebrations: Delightful spring animations upon module completion."
      ],
      technicalArchitecture: [
        "Custom Canvas + SVG DAG rendering pipeline with 60fps pan/zoom.",
        "Client-side topological sorting algorithm calculating optimal learning paths."
      ],
      impact: [
        "Shortened new-engineer ramp-up time to first merged pull request by 45%.",
        "Featured project at the competitive IISc Hackathon."
      ]
    },
    interactiveType: "skill-graph"
  },
  {
    id: "amazon-ml",
    title: "Amazon ML Challenge • Entity Extractor",
    name: "Amazon ML Challenge",
    eyebrow: "BUSINESS ENTITY RESOLUTION",
    stackCategory: "AI & ML",
    cardColor: "#EBDDCB",
    tagline: "Multimodal OCR & vision transformer pipeline extracting e-commerce attributes",
    category: "Systems & Vision",
    featured: false,
    year: "2025",
    role: "Machine Learning & Pipeline Engineer",
    image: "/projects/amazon-ml.svg",
    metrics: [
      { label: "F1 Score", value: "High" },
      { label: "Dataset Size", value: "100K+" },
      { label: "Multimodal", value: "Vision+Text" },
      { label: "Challenge", value: "Amazon ML" }
    ],
    description: "Built for the competitive Amazon ML Challenge, this multimodal pipeline pairs OCR text recognition with Vision Transformers (ViT) to extract physical product attributes (weights, volumes, dimensions) from raw packaging imagery.",
    tags: ["Python", "PyTorch", "Hugging Face", "OCR", "Vision Transformers", "Multimodal AI"],
    links: {
      github: "https://github.com/aditi-malviya666/amazon-ml"
    },
    highlights: [
      "Engineered dual-stream multimodal pipeline combining optical character recognition with Vision Transformers",
      "Formulated custom text normalization regex heuristics to extract physical quantities and metric units",
      "Trained on massive high-dimensional e-commerce catalog dataset under strict computational budgets"
    ],
    caseStudy: {
      problem: "E-commerce catalogs contain millions of products with missing metadata; human data-entry is cost-prohibitive and slow.",
      audience: "E-commerce platform catalog teams, logistics planners.",
      designDecisions: [
        "Dual-Modality Validation: Verifying extracted OCR tokens against packaging visual bounding boxes.",
        "Confidence Gating: Automated confidence threshold flagging ambiguous items for human audit."
      ],
      technicalArchitecture: [
        "Vision Transformer (ViT) feature extractor fused with BERT textual embeddings.",
        "Post-processing pipeline sanitizing units (grams, milliliters, kilograms) into standardized JSON schemas."
      ],
      impact: [
        "High F1 attribute extraction across 100K+ packaging test images in the Amazon ML competition.",
        "Zero-shot generalization across diverse packaging designs."
      ]
    },
    interactiveType: "amazon-ml"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "studifysuccess",
    role: "Mobile App Developer & UX Intern",
    company: "StudifySuccess",
    period: "Mar 2026 – May 2026",
    location: "Remote",
    type: "Internship",
    link: "https://play.google.com/store/apps/details?id=com.studifysuccess.courses",
    linkLabel: "Google Play App (500K+ Learners)",
    description: "Shipped core user-facing mobile features for the StudifySuccess app serving 500,000+ active learners on Google Play, focusing on interaction design, authentication resilience, and AI mascot companionship.",
    achievements: [
      "Architected 9+ core features: Study Planner, AI Companion Mascot, and Test Generator.",
      "Rebuilt quiz grading engine to 100% precision; resolved auth crash loops, cutting session drops by ~40%.",
      "Collaborated closely with product designers to standardize button tokens, font hierarchies, and accessibility standards."
    ],
    skills: ["React Native / Mobile UI", "Micro-interactions", "UX Architecture", "Auth Resilience", "Mascot Design"]
  },
  {
    id: "gssoc",
    role: "Open Source Contributor",
    company: "GirlScript Summer of Code (GSSoC)",
    period: "2025",
    location: "Remote",
    type: "Open Source",
    description: "Contributed algorithmic optimizations and technical visual documentation to the DSA Algorithms repository.",
    achievements: [
      "Optimized 6+ core DSA algorithms across graph traversal, sorting, and dynamic programming.",
      "100% of submitted PRs reviewed and merged into main branch.",
      "Revamped developer documentation, introducing visual step-by-step diagrams that streamlined onboarding."
    ],
    skills: ["Algorithms & Data Structures", "C++", "Python", "Git / GitHub Workflows", "Technical Documentation"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "UI/UX & Design Systems",
    subtitle: "Google M3, Micro-interactions, Accessibility",
    icon: "palette",
    skills: [
      { name: "Google Material Design 3", level: 95, note: "Dynamic color tokens & fluid elevation" },
      { name: "Micro-interactions & Physics Springs", level: 92, note: "60fps tactile feedback" },
      { name: "Design Systems & Token Architecture", level: 90, note: "Component libraries & spec drafting" },
      { name: "WCAG Accessibility (AA/AAA)", level: 88, note: "Keyboard nav & screen reader semantics" },
      { name: "Wireframing & Prototyping (Figma)", level: 86, note: "User flows & interactive mockups" }
    ]
  },
  {
    title: "Frontend & Creative Engineering",
    subtitle: "Modern Web, TypeScript, React Ecosystem",
    icon: "code",
    skills: [
      { name: "TypeScript / JavaScript (ESNext)", level: 96, note: "Strict typing & high performance" },
      { name: "React 18 & Next.js App Router", level: 94, note: "Server Components & client state" },
      { name: "Tailwind CSS & CSS Architecture", level: 95, note: "Fluid typography & custom animations" },
      { name: "HTML5 Canvas & SVG Animation", level: 88, note: "Interactive graphs & visual telemetry" },
      { name: "Web Audio API", level: 85, note: "Synthesized UI soundscapes" }
    ]
  },
  {
    title: "Backend, Databases & Cloud",
    subtitle: "Scalable APIs, Containerization",
    icon: "server",
    skills: [
      { name: "PostgreSQL & Drizzle ORM", level: 90, note: "Polymorphic schemas, sub-100ms queries" },
      { name: "Docker & Container Workflows", level: 88, note: "Docker Compose, multi-stage builds" },
      { name: "Python (Flask / REST APIs)", level: 90, note: "Lightweight microservices" },
      { name: "Google Cloud Platform (BigQuery)", level: 82, note: "Cloud analytics & storage" },
      { name: "Git & CI/CD Pipelines", level: 92, note: "Trunk-based development & code review" }
    ]
  },
  {
    title: "Computer Science & Applied AI",
    subtitle: "Algorithms, Computer Vision, Federated Learning",
    icon: "cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 98, note: "GFG Rank #1 (Score: 853), 350+ solved" },
      { name: "PyTorch & Deep Learning", level: 86, note: "MobileNetV3, FedAvg, classification" },
      { name: "Computer Vision (YOLOv8 & OpenCV)", level: 85, note: "Object detection, road segmentation" },
      { name: "Federated Learning Architecture", level: 88, note: "Privacy-preserving edge intelligence" },
      { name: "C++ (Competitive Programming)", level: 92, note: "Memory management & fast I/O" }
    ]
  }
];

export const PET_COMPANIONS: AnimalCompanion[] = [
  {
    id: "mochi",
    name: "Mochi",
    species: "Calico Cat",
    personality: "Enjoys micro-interactions & warm naps",
    state: "idle",
    hearts: 0
  },
  {
    id: "bubu",
    name: "Bubu",
    species: "Shiba Inu",
    personality: "Excited about playful design & tail wags",
    state: "playing",
    hearts: 0
  },
  {
    id: "pip",
    name: "Pip",
    species: "Origami Bird",
    personality: "Flutters near pixel-perfect code",
    state: "curious",
    hearts: 0
  }
];

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  link?: string;
  certificateImage?: string;
  color: string;
  badge: string;
  skills: string[];
  description: string;
}

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "ibm-ai",
    title: "IBM Applied AI & Artificial Intelligence Foundations",
    issuer: "IBM",
    year: "2025",
    credentialId: "IBM-AI-PROF-666",
    certificateImage: "/certificates/IBM.jpeg",
    color: "blue",
    badge: "Verified Professional",
    skills: ["Applied AI", "Deep Learning", "Computer Vision", "NLP Pipelines", "Watson APIs", "Prompt Engineering"],
    description: "Industry-grade professional certification covering modern artificial intelligence architectures, neural networks for computer vision, natural language understanding, and ethical AI deployment."
  },
  {
    id: "gfg-dsa",
    title: "Data Structures & Algorithms in Python",
    issuer: "GeeksforGeeks",
    year: "2025–2026",
    credentialId: "GFG-DSA-FOT-853",
    certificateImage: "/certificates/DSA_.jpeg",
    color: "emerald",
    badge: "FoT Rank #1 (Score: 853)",
    skills: ["Data Structures", "Graph Algorithms", "Dynamic Programming", "Tree Traversals", "Algorithm Complexity"],
    description: "Mastery of advanced algorithmic problem solving and time-complexity optimization. Backed by University of Delhi FoT Rank #1 with 350+ DSA problems solved."
  },
  {
    id: "gfg-ds",
    title: "Data Science & Machine Learning Bootcamp",
    issuer: "GeeksforGeeks",
    year: "2025–2026",
    credentialId: "GFG-DS-99214",
    certificateImage: "/certificates/DATA_Science.jpeg",
    color: "purple",
    badge: "Specialization",
    skills: ["Pandas & NumPy", "scikit-learn", "Feature Engineering", "Statistical Modeling", "Matplotlib"],
    description: "Practical end-to-end curriculum on exploratory data analysis, automated feature pipelines, statistical inference, and machine learning model validation."
  },
  {
    id: "sih-fot-2024",
    title: "FoT Hackathon (Internal Hackathon, SIH 2024)",
    issuer: "Faculty of Technology, University of Delhi • MoE & AICTE",
    year: "September 6, 2024",
    credentialId: "DU-FOT/SIH2024/PARTICIPATION",
    certificateImage: "/certificates/sih-fot-2024.png",
    color: "amber",
    badge: "Certificate of Participation",
    skills: ["FoT Hackathon", "SIH 2024", "University of Delhi", "MoE Innovation Cell", "AICTE"],
    description: "Certificate of Participation presented to Aditi Malviya for participating in the FoT Hackathon (Internal Hackathon, SIH 2024) at Faculty of Technology, University of Delhi on September 6, 2024."
  },
  {
    id: "iisc-artpark-2024",
    title: "ArtPark CodeForge Hackathon",
    issuer: "Indian Institute of Science (IISc), Bangalore • Unstop",
    year: "2024",
    credentialId: "UNSTOP-IISC-ARTPARK-CODEFORGE",
    certificateImage: "/certificates/iisc-artpark-2024.png",
    color: "pink",
    badge: "Certificate of Participation",
    skills: ["Indian Institute of Science", "IISc Bangalore", "ArtPark", "Team Debug Squad", "Prototype Development Round"],
    description: "Certificate of Participation certifying that Aditi Malviya as Team Debug Squad participated in Build & Submit - Prototype Development Round of ArtPark CodeForge Hackathon organised by Indian Institute of Science (IISc), Bangalore."
  },
  {
    id: "soft-skills",
    title: "Soft Skills Course Online",
    issuer: "GeeksforGeeks",
    year: "Course completion",
    credentialId: "GFG-SOFT-SKILLS",
    certificateImage: "/certificates/Soft_Skill.jpeg",
    color: "blue",
    badge: "Course completion",
    skills: ["Communication", "Professional Development", "Workplace Skills"],
    description: "Completed a professional development course covering practical soft skills."
  }
];
