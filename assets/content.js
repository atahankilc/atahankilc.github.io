// Single source of truth for every concept. The real site would read the same shape.
window.CONTENT = {
  name: "Atahan Kılıç",
  handle: "atahankilc",
  role: "AI & full-stack software engineer",
  location: "Munich, DE",
  email: "atahan.kilc@gmail.com",
  github: "https://github.com/atahankilc",
  linkedin: "https://www.linkedin.com/in/atahan-kilic",
  tagline: "I build systems that have to be right — then make them feel effortless.",
  about: [
    "AI & full-stack software engineer in Munich. I build AI products end to end: the agent and LLM layer, the React and React Native front ends people touch, and the back ends that keep the answers honest.",
    "Since April 2026 I've been building BugSense for my M.Sc. thesis at TUM: the software of an AI-based UTI diagnostic. A mini-incubator images a paper cassette, a model proposes infection, species and bacterial load, and a clinician approves, edits or rejects every result before it goes anywhere. Instead of a 48–72 hour lab culture, the answer comes back the same day. Under EU law that makes it both an in-vitro diagnostic (IVDR) and a high-risk AI system (AI Act).",
    "Alongside the thesis I'm a working student at CHECK24, building the customer area and aftersales for CHECK24 Autoteile across PHP/Symfony, React and SQL. Before that: a year and a half at NextAim shipping web, iOS and Android apps with AI chat on Azure-hosted LLMs, and two and a half years at HAVELSAN on NATO-standard simulators and real-time C++.",
  ],
  now: [
    "Full-stack @ CHECK24 Autoteile",
    "M.Sc. Informatics @ TUM — thesis on BugSense",
    "Building Harmos, an AI-native CAD platform",
  ],
  // the whoami card: three short columns instead of the about paragraphs (project ids make a line clickable)
  glance: [
    { title: "now", items: [["CHECK24 Autoteile", "full-stack · PHP · React · SQL"], ["TUM", "M.Sc. Informatics"]] },
    { title: "building", items: [["BugSense · M.Sc. thesis", "AI-based UTI diagnostic: a model reads an imaged cassette, a clinician approves every result. Same-day answer instead of a 48–72\u00a0h lab culture.", "bugsense"]] },
    { title: "before", items: [["NextAim · 1.5 y", "web · iOS · Android · LLM chat"], ["HAVELSAN · 2.5 y", "NATO simulators · real-time C++"]] },
  ],
  projects: [
    {
      id: "bugsense", title: "BugSense", year: "2026—", kind: "Medical device · Website + thesis",
      blurb: "The website I built for BugSense, an AI-assisted UTI diagnostic (that's the live link). My M.Sc. thesis is the device software behind it: re-architected as a regulation-ready SaMD under IEC 62304 / ISO 14971, with on-device acquisition, cloud inference, audit logging and clinician reporting. The thesis isn't public.",
      stack: ["Python", "Django", "Django REST Framework", "OpenAPI (drf-spectacular)", "FastAPI", "ONNX Runtime", "NumPy", "Pillow", "PostgreSQL 16", "Row-Level Security", "S3-compatible storage", "Argon2", "JWT", "TOTP 2FA", "cryptography", "Expo", "React Native", "React Native Web", "Expo Router", "TanStack Query", "Zustand", "NativeWind", "MMKV", "expo-camera", "Electron", "electron-builder", "PyInstaller", "Docker Compose", "Caddy", "pytest", "Jest", "Ruff", "mypy", "IVDR", "EU AI Act", "IEC 62304", "ISO 14971", "Next.js 16 (website)", "next-intl", "Tailwind CSS v4"],
      link: null, live: "https://bugsensedx.com", liveLabel: "website", shape: "dish",
    },
    {
      id: "northstar", title: "North Star", year: "2026", kind: "Product",
      blurb: "Real-time collaborative ideation workspace: post-its, structure, competitor feature matrices — rendered in a 3D ASCII aesthetic.",
      stack: ["TypeScript", "React", "Vite", "three.js", "React Three Fiber", "custom ASCII effect", "Zustand", "React Router", "Motion", "Firebase Auth (Google)", "Cloud Firestore", "Firebase Realtime Database", "Cloud Functions", "Firestore security rules", "Firebase Emulator Suite", "fflate", "OpenAI (bring your own key)", "GitHub Actions", "GitHub Pages"],
      link: "https://github.com/atahankilc/north-star", live: "https://atahankilc.github.io/north-star/", shape: "star",
    },
    {
      id: "steward", title: "Steward", year: "2026—", kind: "Product",
      blurb: "Talk to your building. Ask where something is, how to get there for you (wheelchair, trolley, no lifts) and what changes when a lift closes; facility managers edit the building by chat or voice, always propose → confirm → apply. 280 buildings. A deterministic geometry/graph core computes every answer, the LLM only speaks.",
      stack: ["TypeScript", "React", "Vite", "three.js", "React Three Fiber", "drei", "MapLibre GL", "Supabase JS", "Python 3.12", "FastAPI", "Uvicorn", "Claude (tool use)", "NetworkX", "Shapely", "NumPy", "OpenCV", "Pillow + HEIF", "pypdf", "pdfium", "psycopg", "Supabase (Postgres)", "speech-to-text", "text-to-speech", "OpenStreetMap", "uv", "pytest", "oxlint", "Vercel"],
      link: "https://github.com/atahankilc/steward", live: "https://steward-io.vercel.app", shape: "building",
    },
    {
      id: "sharksight", title: "SharkSight", year: "2026", kind: "Product",
      blurb: "10,128 customer comments become prioritized, evidence-linked requirements for the next BMW 1/5/7 Series. The AI proposes, the PM decides, every step lands in an append-only audit trail.",
      stack: ["Python 3.12", "FastAPI", "Pydantic", "OpenAI API", "scikit-learn", "NumPy", "openpyxl", "PostgreSQL", "pgvector", "Alembic", "psycopg", "TypeScript", "React", "Vite", "three.js", "React Three Fiber", "drei", "TanStack Query", "React Router", "Docker", "Render", "Neon"],
      link: "https://github.com/atahankilc/shark-sight", live: "https://shark-sight.onrender.com", shape: "bars",
    },
    {
      id: "harmos", title: "Harmos", year: "2026", kind: "Platform",
      blurb: "An AI-native CAD platform. Every capability is a typed command; the GUI is just another client of the API the agent uses. Geometry addressed by predicate selectors, verified by the engine.",
      stack: ["Python", "aiohttp (WebSocket + HTTPS)", "build123d", "OpenCascade B-Rep", "SQLite", "PostgreSQL", "Claude", "OpenAI", "schema-generated protocol types", "TypeScript", "React", "Vite", "three.js", "GLB streaming", "Zustand", "pnpm workspaces", "Vitest", "Playwright", "uv"],
      link: "https://github.com/atahankilc/harmos", live: null, shape: "gear",
    },
    {
      id: "tate", title: "TATE AI", year: "2025", kind: "0→1 Product",
      blurb: "Teachers dictate a lesson summary; Gemini turns it into structured class and student records. Field-tested with real teachers, SUS 83/100.",
      stack: ["TypeScript", "Expo SDK 53", "React Native 0.79", "React 19", "Expo Router", "Expo API routes", "expo-speech-recognition", "Vercel AI SDK", "Gemini 2.0 Flash", "Zod", "NativeWind", "Tailwind CSS", "Reanimated", "Gesture Handler", "Bottom Sheet", "React Native Calendars", "Day.js", "ESLint", "Prettier"],
      link: "https://github.com/atahankilc/tate-ai", live: null, shape: "wave",
    },
    {
      id: "router", title: "Routemaxxing", year: "2026", kind: "Product",
      blurb: "An LLM router trained from real request logs that show only which model ran. Rebuilt 1,000 rows into 10,845 turns and shipped a cost–quality frontier.",
      stack: ["Python (standard library)", "cache-aware cost model", "nearest-neighbour matching", "cross-fitting", "doubly robust estimation", "bootstrap intervals", "matplotlib", "DuckDB", "FastAPI", "Uvicorn", "TypeScript", "React", "Vite", "TanStack Table", "TanStack Virtual"],
      link: "https://github.com/atahankilc/ai-slop-router", live: null, shape: "graph",
    },
  ],
  experience: [
    { when: "2026 —", org: "CHECK24", role: "Working Student, Full-stack", what: "Customer area and aftersales for CHECK24 Autoteile. PHP, Symfony, React, SQL." },
    { when: "2024 — 26", org: "NextAim", role: "Working Student, Software", what: "Web + iOS + Android with Expo, owned store releases. AI chat on Azure LLMs, a transport management system on Supabase, Auth0/Cognito/RLS, Stripe." },
    { when: "2023 — 24", org: "HAVELSAN", role: "Software Developer", what: "NATO-standard military messaging and training simulators. React/Redux, Spring Boot, 20+ services over Kafka, Docker orchestration." },
    { when: "2021 — 23", org: "HAVELSAN", role: "Candidate Engineer", what: "Real-time embedded C++, aviation protocol plugins, a Wireshark dissector generator in Java + Lua." },
  ],
  education: [
    { when: "2024 —", what: "M.Sc. Informatics, Technical University of Munich" },
    { when: "2018 — 23", what: "B.Sc. Computer Engineering, METU · 3.71/4.00" },
  ],
  // the full story behind each timeline bar (shown when a bar is clicked); keys match GANTT in index.html
  roles: {
    check24: {
      org: "CHECK24 Autoteile", role: "Working Student, Full-stack", where: "Munich",
      story: "I work on the customer area and aftersales of CHECK24 Autoteile, the car-parts shop inside CHECK24: the part of the platform people come back to after they've ordered. I add new customer-facing features there, end to end, from the SQL and the Symfony services up to the React screens.",
      did: ["New customer-facing features for the customer area and aftersales.", "Across the whole stack: PHP and Symfony on the back end, React on the front end, SQL underneath."],
      tags: ["PHP", "Symfony", "React", "SQL"],
    },
    nextaim: {
      org: "NextAim", role: "Working Student, Software", where: "Munich",
      story: "A year and a half of shipping products end to end. One codebase for web, iOS and Android, and I owned the whole path to production, including the App Store and Play Store releases. Much of it was AI: chat products on an Azure-hosted LLM, where the hard part was making chat, document upload and message handling reliable.",
      did: [
        "Cross-platform apps for web, iOS and Android with React, React Native, Next.js and Expo; owned deployments and store releases.",
        "AI chat applications with Next.js and the Vercel AI SDK on an Azure-hosted LLM, hardening chat, document upload and message flows.",
        "A transportation management system on Supabase: relational data modelling, advanced multi-table filtering, backend-heavy workflows.",
        "Authentication, role-based access and subscription payments with Auth0, AWS Cognito, Supabase RLS and Stripe.",
      ],
      tags: ["React Native", "Expo", "Next.js", "Vercel AI SDK", "Supabase", "Stripe"],
    },
    havelsanDev: {
      org: "HAVELSAN", role: "Software Developer", where: "Ankara",
      story: "Full-stack work on NATO-standard military messaging and training simulators: software where a wrong message isn't a cosmetic bug, so correctness and reliability came first. I also made the system usable for the people who actually run it, military users who aren't engineers.",
      did: [
        "Front ends in React and Redux Toolkit, back-end services in Spring Boot, part of a 20+ microservice ecosystem talking over Kafka.",
        "Containerised and orchestrated the whole system with Docker.",
        "A custom management application so non-technical military users could control the simulators themselves.",
      ],
      tags: ["React", "Redux", "Spring Boot", "Kafka", "Docker"],
    },
    havelsanCand: {
      org: "HAVELSAN", role: "Candidate Engineer", where: "Ankara",
      story: "Where I started, alongside my B.Sc.: close to the metal. Real-time code, aviation protocols, and the tests that keep military communication honest.",
      did: [
        "Real-time embedded C++, including interrupt handling and message translation for operational systems.",
        "Aviation communication protocol plugins, and a tool that generates Wireshark plugins automatically (Java + Lua).",
        "Automated test suites in Java and JUnit that caught critical edge cases in military communication workflows.",
      ],
      tags: ["C++", "Java", "JUnit", "Lua", "Wireshark"],
    },
    tum: {
      org: "Technical University of Munich", role: "M.Sc. Informatics", where: "Munich",
      story: "My master's in Informatics, done alongside real work: first at NextAim, now at CHECK24. Since April 2026 it has been about one thing, my thesis on BugSense.",
      did: [], tags: [],
    },
    thesis: {
      org: "TUM · Master's thesis", role: "BugSense: deployment-ready architecture for an AI-assisted UTI diagnostic device", where: "Munich", project: "bugsense",
      story: "A mini-incubator images a paper cassette, a model proposes infection, species and bacterial load, and a clinician approves, edits or rejects every result. The answer comes the same day instead of after a 48–72 h lab culture. Under EU law that makes it both an in-vitro diagnostic and a high-risk AI system, so the architecture itself has to make those obligations hold.",
      did: [
        "An inter-service pipeline from on-device acquisition through cloud inference to clinician-facing reporting.",
        "A hybrid cloud–local deployment that balances inference latency, data residency and offline operation at the point of care.",
        "Turning an early implementation into a regulation-ready device under IEC 62304 and ISO 14971: requirements with end-to-end traceability, risk-control mapping, MDR / GDPR / AI Act analysis.",
      ],
      tags: ["IEC 62304", "ISO 14971", "EU MDR", "AI Act"],
    },
    metu: {
      org: "Middle East Technical University", role: "B.Sc. Computer Engineering", where: "Ankara",
      story: "Computer Engineering at METU, graduating with a cGPA of 3.71 / 4.00 (about 1.4 on the German scale). From 2021 on I studied and worked at HAVELSAN at the same time.",
      did: [], tags: [],
    },
  },
  skills: {
    "Front": ["TypeScript", "React", "Next.js", "React Native", "Expo", "Redux", "TanStack Query", "Zustand", "Tailwind", "NativeWind", "shadcn/Radix", "MUI", "React Hook Form", "Zod", "Reanimated", "Framer Motion", "Tiptap", "Electron", "Astro", "Vite"],
    "Back": ["Python", "FastAPI", "Pydantic", "Django REST", "Celery", "Node", "Express", "Prisma", "SQLAlchemy", "Alembic", "Java", "Spring Boot", "PHP", "Symfony", "WebSockets", "OpenAPI", "Stripe"],
    "Data": ["Postgres", "pgvector", "Supabase", "Neon", "MongoDB", "Firebase", "Redis", "DuckDB", "ChromaDB", "Kafka"],
    "AI": ["Agent design", "Tool use", "RAG", "Claude", "OpenAI", "Azure OpenAI", "Gemini", "Vercel AI SDK", "PyTorch", "ONNX", "OpenCV", "scikit-learn"],
    "Auth": ["OAuth 2", "JWT", "Auth0", "Cognito", "Supabase RLS", "TOTP 2FA"],
    "3D": ["three.js", "React Three Fiber", "build123d", "CadQuery", "Shapely", "NetworkX", "MapLibre", "Ray tracing", "Rasterization"],
    "Ops": ["Docker", "Nginx", "GitHub Actions", "AWS (Amplify, CDK, S3)", "GCP", "Azure", "Vercel", "Render", "EAS", "Sentry", "Grafana"],
    "Test": ["Vitest", "Jest", "Playwright", "pytest", "Testing Library", "Supertest"],
    "Low": ["C", "C++", "CMake", "Lua", "Real-time", "Embedded", "UDP sockets", "Unix shell"],
  },
};

// Dates (sort keys) for the projects. Months marked ~ are estimates from repo activity.
(function () {
  const extra = {
    harmos: { date: "2026-08", when: "Aug 2026" },
    bugsense: { date: "2026-04", when: "Apr 2026 —" },
    steward: { date: "2026-10", when: "Oct 2026 —" },
    sharksight: { date: "2026-10", when: "Oct 2026" },
    northstar: { date: "2026-09", when: "2026" },
    router: { date: "2026-08", when: "Aug 2026" },
    tate: { date: "2025-04", when: "2025" },
  };
  window.CONTENT.projects.forEach((p) => Object.assign(p, extra[p.id] || {}));
  // What the architecture view in the pane shows. Written from each repo's README and architecture docs.
  window.CONTENT.arch = {
    bugsense: {
      summary: "My M.Sc. thesis: the software behind BugSense, a culture-based UTI test. A mini-incubator images the test cassette over several hours, an AI model proposes a diagnosis, and a healthcare professional reviews it before it is released. That makes it an in-vitro diagnostic device under the IVDR and a high-risk AI system under the EU AI Act. The thesis builds those requirements into the architecture instead of documenting them afterwards. (The live link is the public website; the thesis code isn't public.)",
      flow: ["Mini-incubator", "Core service", "Inference worker", "AI proposal", "Clinician review", "Release", "Viewer"],
      parts: [
        ["clients", "clinical app (review and release), viewer app (released results only), the mini-incubator sending time-series images; on web, desktop and mobile"],
        ["core service", "accounts and organisations, run and image intake, review and release, the audit trail"],
        ["inference", "a separate worker running the frozen model: ONNX Runtime, CPU only, the same in every deployment"],
        ["data", "PostgreSQL and image storage, behind one storage interface"],
      ],
      decisions: [
        "One codebase, two first-class deployments: a multi-tenant cloud run by BugSense, and a self-contained on-premises install bundled with the desktop app. The customer chooses; both get the same scope.",
        "PostgreSQL in both, because the guarantees live inside the database: tenant isolation is row-level security on tenant_id, so the database refuses cross-tenant reads even if the application gets it wrong.",
        "A tamper-evident audit log: each entry hashes its own content plus the previous entry's hash, and signed checkpoints use a key kept outside the database.",
        "The model version is the whole pipeline: the digest of a manifest covering the weights, preprocessing, frame selection and abstain threshold. Change any of them and it is a new model version.",
        "One inference per test, committed only once a proposal is durably stored. A failed dispatch retries the same stored image series, within a budget.",
        "The AI only proposes. Its fields have the same shape as the released result, so a reviewer changes values, never structure. The model may abstain, and its confidence is stored but never shown until clinical evidence supports showing it.",
        "The research question: which regulatory requirements can the architecture itself guarantee, and which stay organisational or clinical tasks?",
        "Built with an AI coding agent working from a structured knowledge base of decisions, requirements, risks and rules.",
      ],
    },
    northstar: {
      summary: "A static single-page app on GitHub Pages with no server of its own. The browser talks to Firebase directly, and Firebase's security rules decide who can read and write what.",
      flow: ["Browser SPA", "src/data", "Firestore", "Realtime DB", "Other clients"],
      parts: [
        ["src/data/", "the only layer that talks to Firebase, so another backend swap stays contained"],
        ["src/three/", "React Three Fiber backdrop with a hand-written ASCII effect, plus the welcome intro"],
        ["src/views/", "the canvas: a DOM layer that pans and zooms, holding cards, links, matrices, tables, kanbans and documents"],
        ["rules", "firestore.rules and database.rules.json, tested against the local emulators"],
      ],
      decisions: [
        "Firebase, chosen for longevity: InstantDB was shutting down, free Supabase projects pause, and Convex bills every cursor update.",
        "Firestore holds everything persistent. Realtime Database only carries presence and cursors, because it is cheap and has onDisconnect.",
        "Hybrid rendering: WebGL for the backdrop and transitions, DOM for anything you read or edit. The ASCII effect never touches text.",
        "Only what is on screen gets drawn; a dense, zoomed-out matrix paints into a 2D canvas.",
        "Plain-path routing on GitHub Pages: the build copies index.html to 404.html, so every deep link boots the app.",
      ],
    },
    steward: {
      summary: "A request goes frontend → api → agents → core. The agents decide what to compute, a deterministic core computes it. No agent states a room, distance or route that didn't come out of a tool.",
      flow: ["Question / voice", "Guide agent", "Tools", "Geometry + graph core", "Route", "Answer"],
      parts: [
        ["frontend/", "React + Vite + three.js: map, building search, plan view, the Guide chat and Edit mode"],
        ["backend/api/", "FastAPI: sessions, Supabase persistence, speech in and out, the live building state"],
        ["backend/agents/", "the Claude agents: Guide (find, route, react, edit), Builder (edits a building), Creator (drafts one from floor plans)"],
        ["backend/core/", "no LLM, no HTTP: route graph, geometry, solvers, access profiles, edits, plan import"],
      ],
      decisions: [
        "Dependencies point one way: core never imports agents or api.",
        "One tool layer for every agent: building_overview, search, room_facts, find_route, find_nearest and the edit tools are plain Python functions exposed as tools.",
        "Access needs (wheelchair, trolley, no lifts) are routing profiles on the graph, so a closed lift reroutes deterministically.",
        "Edits go propose → confirm → apply: a draft is validated before it changes the shared building.",
        "Without an API key the Guide runs offline, so the app always starts.",
      ],
    },
    sharksight: {
      summary: "An evidence base runs through a staged AI pipeline and comes out as scored, evidence-linked requirements. The AI proposes, the product manager decides, and every step lands in an append-only audit trail.",
      flow: ["10,128 comments", "Signals", "Clusters", "Themes", "Areas", "Requirements", "Score", "PM"],
      parts: [
        ["evidence", "customer comments, a customer study, sales figures, option price lists and about 900 cited web sources"],
        ["backend/", "FastAPI and PostgreSQL with pgvector; every pipeline step is an agent with its own model, effort, spend cap and switch"],
        ["frontend/", "React + three.js, five pages in the PM's order: Evidence, Structure, Definition, Prioritize, Document"],
        ["audit", "append-only; the database itself refuses edits and deletions"],
      ],
      decisions: [
        "Two real-date checkpoints, JAN 26 and JUL 26. The second builds on the first, so needs that are new, held, stronger or weaker are visible.",
        "Every requirement has a customer metric and a target ladder (baseline, threshold, target, stretch); each number is marked cited, projected, assumption or gap.",
        "A score for every requirement × car line × market, with its factors (customer, business, future) visible, sorted into Must, Should and Could.",
        "When new evidence moves a score against a band the PM confirmed, the AI doesn't change it. It raises an upgrade or downgrade proposal with its cause.",
        "Deployed on Render, database on Neon.",
      ],
    },
    harmos: {
      summary: "A CAD application whose main operator is an AI. The engine owns all state; every client, the AI included, talks to it over one versioned protocol, so the GUI has no privileged path.",
      flow: ["Agent / editor", "Protocol", "Commands", "Selectors", "B-Rep kernel", "Verify", "Commit"],
      parts: [
        ["engine/", "Python: protocol server, document model, command registry, op-log, B-Rep kernel adapter, verification and the agent loop"],
        ["schemas/", "the contract as data: protocol, rejection classes, selector vocabulary. The engine loads it, the client generates its types from it"],
        ["client/", "pnpm workspace: protocol types, a three.js viewer and the React editor, fed per-body GLB deltas"],
        ["docs/", "ADRs, requirements, hazards and the worklog; make check decides when a change is finished"],
      ],
      decisions: [
        "Every capability is a typed, named, serializable command, applied in atomic transactions against a known base version.",
        "Geometry is addressed by predicates (\"the planar face whose normal ≈ +Z\"), not kernel IDs, so intent survives a rebuild.",
        "The agent loop: orient → propose → validate → evaluate → verify → commit. Validation, the kernel and verification fail separately, and each returns a structured rejection, never prose.",
        "Measurement replaces belief: the agent asks the engine for a wall thickness and gets a number with a unit.",
        "The agent commits to its own branch, never to main.",
      ],
    },
    tate: {
      summary: "A teacher dictates a summary after class. Speech recognition turns it into text, and Gemini turns the transcript into a structured lesson record.",
      flow: ["Voice", "Speech recognition", "Transcript", "API route", "Gemini", "Lesson JSON"],
      parts: [
        ["app/", "Expo Router screens, plus api/chat+api.ts, the one network call: a server route that proxies to Gemini"],
        ["components/", "recorder, transcript editor and AI summary; class, subject, student, lecture and schedule views"],
        ["lib/chat/", "the system prompt that shapes the record: objective, topics, methods, materials, homework, observations, absences, notes"],
        ["mock-data/", "classes, students and timelines in memory: a prototype, no persistence yet"],
      ],
      decisions: [
        "The Gemini key stays on the server: the app calls its own API route, never Gemini directly.",
        "The teacher can correct the transcript before it is summarized.",
        "One Expo codebase for iOS, Android and the web.",
        "Field-tested with real teachers: SUS 83/100.",
      ],
    },
    router: {
      summary: "The logs show only which model ran: no outputs, no token counts. The router reconstructs what was actually billed, then routes each task to the cheapest model whose expected quality matches.",
      flow: ["1,000 rows", "10,845 calls", "Features", "Neighbours", "Estimates", "Route"],
      parts: [
        ["rebuild", "each row is a whole trajectory; splitting the model-produced runs gives 10,845 billed calls (grouping by opening text gave 953 groups, 19 of them mixed-model)"],
        ["ledger", "cache-aware input + output cost, tokens estimated as chars / 4; logged spend $278.36"],
        ["router", "features from the first request only; per model it estimates cost, tokens, a quality proxy, uncertainty and support"],
        ["evaluation", "five-fold cross-fitting, task-grouped folds, a doubly robust estimator and paired bootstrap intervals"],
      ],
      decisions: [
        "A whole trajectory stays on one model family, so a mid-task switch never throws away the cache.",
        "Recommended policy v4: $138.00, 50.4% below logged spend, quality +0.0004 (95% interval −0.0041 … +0.0048): no detected change.",
        "v5 is cheaper ($120.48), but its GPT decision rests on 20 trajectories, so it isn't the recommendation.",
        "Transparent lexical and structural nearest-neighbour matching, no black-box model.",
      ],
    },
  };
  window.CONTENT.availability = "Open to full-time roles · Munich / EU";
  window.CONTENT.languages = [["Turkish", "Native"], ["English", "C1"], ["German", "A2"]];
  window.CONTENT.timeline = [
    { date: "2026-07", end: "now", lane: "work", title: "CHECK24", role: "Working Student, Full-stack", text: "Customer area and aftersales for CHECK24 Autoteile.", tags: ["PHP", "Symfony", "React", "SQL"] },
    { date: "2024-09", end: "2026-03", lane: "work", title: "NextAim", role: "Working Student, Software", text: "Web, iOS and Android with Expo; owned App Store / Play releases. AI chat on Azure LLMs, a Supabase transport management system, Auth0 / Cognito / RLS, Stripe.", tags: ["React Native", "Next.js", "Supabase", "Stripe"] },
    { date: "2024-04", end: "now", lane: "edu", title: "TUM", role: "M.Sc. Informatics", text: "Thesis (since Apr 2026): BugSense, the software of an AI-based UTI diagnostic, built so that IVDR and AI Act obligations hold by architecture.", tags: [] },
    { date: "2023-08", end: "2024-03", lane: "work", title: "HAVELSAN", role: "Software Developer", text: "NATO-standard military messaging and training simulators. React/Redux front ends, Spring Boot services in a 20+ service Kafka ecosystem, Docker orchestration.", tags: ["Spring Boot", "Kafka", "React", "Docker"] },
    { date: "2023-07", end: "", lane: "edu", title: "METU", role: "B.Sc. Computer Engineering", text: "Graduated, cGPA 3.71 / 4.00.", tags: [] },
    { date: "2021-11", end: "2023-07", lane: "work", title: "HAVELSAN", role: "Candidate Engineer", text: "Real-time embedded C++, aviation protocol plugins, an automated Wireshark dissector generator in Java + Lua.", tags: ["C++", "Java", "Lua"] },
  ];
})();
