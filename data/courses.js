/* =====================================================================
   Loop & Logic — Site Data
   ---------------------------------------------------------------------
   EDIT THIS FILE to update the website content. No build step required.
   Everything below renders automatically on the page.
   ===================================================================== */

/* ------------------------------------------------------------------ */
/* 1. GLOBAL CONFIG — links, brand, contact                            */
/* ------------------------------------------------------------------ */
const LNL_CONFIG = {
  brand: "Loop & Logic",
  tagline: "Learn · Build · Grow",
  youtube: {
    url: "https://www.youtube.com/@loopNlogic",
    subscribers: 4500,
    handle: "@loopNlogic",
  },
  community: {
    youtube: "https://www.youtube.com/@loopNlogic",
    facebook: "https://www.facebook.com/loopandlogic",
    discord: "#",       // TODO: add real Discord invite
    whatsapp: "#",      // TODO: add real WhatsApp community link
    cpc: "#",           // TODO: add real Competitive Programming Community link
  },
  contact: {
    email: "loopnlogic.ai@gmail.com",
    phone: "+880 1XXX-XXXXXX",   // TODO: add real phone
    location: "Bangladesh",
  },
  // Course registration Google Form — used by every "Enroll / Register" button
  enrollUrl: "https://docs.google.com/forms/d/e/1FAIpQLSetPgjuid00P9Lhiv1z-gcURMq7DRllYca5Rq0JD-Ca2ch5TQ/viewform",
};

/* ------------------------------------------------------------------ */
/* 2. PAID COURSES — Foundation Program                                */
/*    Outlines below are taken from the official LNL course outlines.  */
/*    "price" is intentionally blank → cards show a Register CTA.       */
/* ------------------------------------------------------------------ */
const LNL_COURSES = [
  {
    id: "c-programming",
    title: "C Programming",
    category: "Programming",
    level: "Beginner",
    instructor: "Loop & Logic Faculty",
    duration: "24 classes",
    lessons: 24,
    rating: 4.9,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-c-programming.svg",
    tags: ["C", "Logic Building", "Contests"],
    summary: "No prior coding needed. Build rock-solid programming fundamentals in C — from your first program to pointers, structures, and file handling — with regular contests and mega contests.",
    outcomes: ["Write C programs from scratch", "Master loops, arrays & strings", "Understand pointers & memory", "Solve contest problems"],
    modules: [
      { title: "Module 1 · Getting Started", items: ["Why & history of C, compilation process", "Setting up IDE/compiler", "Structure of a C program & first program", "Basic I/O: printf() & scanf(), data types, format specifiers"] },
      { title: "Module 2 · Operators & Control Flow", items: ["Arithmetic, relational, logical & assignment operators", "Operator precedence, type conversion & casting", "if / if-else / nested if / else-if ladder", "switch-case & ternary operator (+ Contest)"] },
      { title: "Module 3 · Loops & Arrays", items: ["while, do-while & for loops, nested loops", "break/continue, loop patterns (+ Contest)", "1D arrays: input, traversal, operations", "Searching, max/min, reverse, rotation, frequency count", "2D arrays & matrix operations (+ Mega Contest 1)"] },
      { title: "Module 4 · Strings", items: ["String basics, character arrays vs strings, null character", "Library functions: strlen, strcpy, strcat, strcmp, strrev…", "Manual string ops: palindrome, pattern matching, word count (+ Mega Contest 2)"] },
      { title: "Module 5 · Functions & Recursion", items: ["Declaration, definition, parameters & return types", "Pass by value, variable scope & storage classes", "Recursion: factorial, fibonacci, recursive vs iterative (+ Mega Contest 3)"] },
      { title: "Module 6 · Pointers, Structures & Files", items: ["Pointers, memory addresses, pointer arithmetic", "Pointers with functions & arrays, pass by reference (+ Mega Contest 4)", "Structures, array of structures, typedef, self-referential structs", "File handling: fopen/fclose, file modes, character & string I/O", "Mini projects & final review"] },
    ],
  },
  {
    id: "data-structures",
    title: "Data Structures",
    category: "Data & Algorithms",
    level: "Intermediate",
    instructor: "Loop & Logic Faculty",
    duration: "24 classes",
    lessons: 24,
    rating: 4.9,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-data-structures.svg",
    tags: ["Linked List", "Trees", "Graphs"],
    summary: "Go from C fundamentals to mastering the data structures every engineer and interviewer cares about — linked lists, stacks, queues, trees, and graphs — with hands-on implementations.",
    outcomes: ["Implement linked lists & doubly linked lists", "Build stacks, queues & expression evaluators", "Master trees: BST, AVL & heaps", "Represent & traverse graphs (BFS/DFS)"],
    modules: [
      { title: "Module 1 · Foundations", items: ["Why data structures, real-life examples", "How memory stores data: static vs dynamic allocation", "C prerequisites: array, pointer, function, structure", "Self-referential structures"] },
      { title: "Module 2 · Linked Lists", items: ["Node creation, insertion & deletion concept", "Singly linked list with & without functions", "Insert/delete at beginning, end & any position", "Doubly linked list (+ Question Solve)"] },
      { title: "Module 3 · Stacks & Queues", items: ["Stack via array & linked list: push, pop, peek, search", "Expression evaluation: infix, prefix, postfix", "Queue via array & linked list: enqueue, dequeue, rear (+ Question Solve)"] },
      { title: "Module 4 · Trees", items: ["Intro to non-linear structures, types of trees", "Binary tree: representation & traversals (in/pre/post-order)", "Construct tree from traversal order", "Binary Search Tree: insertion, deletion & code", "AVL trees: insertion, deletion & code"] },
      { title: "Module 5 · Heaps & Graphs", items: ["Heap tree & heap sort with code", "Graph representation", "Graph traversal: BFS & DFS", "Extra graph topics (+ Question Solve)"] },
    ],
  },
  {
    id: "algorithms",
    title: "Algorithms",
    category: "Data & Algorithms",
    level: "Advanced",
    instructor: "Loop & Logic Faculty",
    duration: "16+ topics",
    lessons: 18,
    rating: 4.8,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-algorithms.svg",
    tags: ["Complexity", "DP", "Graphs"],
    summary: "Design and analyze efficient algorithms from a programmer's viewpoint. Master complexity analysis and the core paradigms — divide & conquer, greedy, dynamic programming, and graph algorithms.",
    outcomes: ["Analyze asymptotic complexity (Big-O, Ω, Θ)", "Apply divide & conquer, greedy & DP", "Solve classic DP problems (LCS, LIS, knapsack)", "Master graph & shortest-path algorithms"],
    modules: [
      { title: "Module 1 · Foundations & Complexity", items: ["Definition, properties & characteristics of algorithms", "Arrays, functions, recursion, variable scoping", "Asymptotic notation: Big-O, Ω, Θ", "Best / average / worst case, time & space complexity"] },
      { title: "Module 2 · Searching & Divide and Conquer", items: ["Brute force vs divide & conquer paradigm", "Linear search & binary search", "Time complexity & best/worst case analysis"] },
      { title: "Module 3 · Sorting", items: ["Brute force: bubble, insertion, selection sort", "Divide & conquer: quick sort & merge sort", "Complexity & case analysis for each"] },
      { title: "Module 4 · Greedy Algorithms", items: ["Greedy strategy, coin change, fractional knapsack", "Bin packing", "Huffman coding"] },
      { title: "Module 5 · Dynamic Programming", items: ["Intro to DP, DP coin change", "0/1 knapsack, factorial using DP", "LCS, LIS, LDS, LNIS, LNDS"] },
      { title: "Module 6 · Graph Algorithms", items: ["Graph types & representation (adjacency matrix/list)", "Traversal: BFS, DFS, topological sort, SCC", "Spanning trees: Prim's & Kruskal's (MST)", "Shortest paths: Dijkstra, Bellman–Ford, Floyd–Warshall"] },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    category: "Programming",
    level: "Beginner",
    instructor: "Loop & Logic Faculty",
    duration: "20 classes",
    lessons: 20,
    rating: 4.9,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-oop.svg",
    tags: ["Java", "UML", "Design"],
    summary: "Think in objects. Master the four pillars of OOP in Java — encapsulation, inheritance, polymorphism, and abstraction — plus UML modelling and real case-study projects.",
    outcomes: ["Master the 4 OOP pillars in Java", "Model systems with UML diagrams", "Handle exceptions & collections", "Build a full OOP mini-project"],
    modules: [
      { title: "Module 1 · OOP & Java Basics", items: ["What is OOP, OOP vs structured programming", "Core pillars overview & real-life analogies", "Java setup (JDK, IDE), keywords, data types, operators", "Loops, arrays, methods, String & Math classes"] },
      { title: "Module 2 · Classes & Objects", items: ["UML class & object diagrams, relationships, multiplicity", "Defining classes, creating objects, instance members", "'this' keyword, passing & returning objects", "Constructors, constructor & method overloading, array of objects"] },
      { title: "Module 3 · Encapsulation & Inheritance", items: ["Access specifiers, getters/setters, data hiding", "Static vs non-static members", "Single, multilevel & hierarchical inheritance", "super keyword, method overriding, constructor chaining, final keyword (+ Review)"] },
      { title: "Module 4 · Polymorphism & Abstraction", items: ["Compile-time & runtime polymorphism, dynamic dispatch", "instanceof operator", "Abstract classes & methods, template method pattern", "Interfaces, interface vs abstract class, default/static methods"] },
      { title: "Module 5 · Exceptions & Collections", items: ["try/catch/finally, throw/throws, checked vs unchecked", "User-defined exceptions", "Collections Framework: ArrayList, LinkedList, HashMap, HashSet", "Iterating collections (+ Review)"] },
      { title: "Module 6 · UML & Projects", items: ["UML relationships & advanced diagrams (use case, sequence, activity)", "OOP design case studies: Library & Online Shopping systems", "Translating UML to Java code", "Project work, code review & presentation (+ Review)"] },
    ],
  },
  {
    id: "eng-math",
    title: "Engineering Mathematics",
    category: "Mathematics",
    level: "Intermediate",
    instructor: "Loop & Logic Faculty",
    duration: "3 Credits",
    lessons: 7,
    rating: 4.8,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-eng-math.svg",
    tags: ["Differential Eq.", "Laplace", "Fourier"],
    summary: "Build the mathematical backbone every engineer needs: differential equations, Laplace transforms, and Fourier series — with applications to real engineering problems.",
    outcomes: ["Form & solve differential equations", "Apply Laplace & inverse Laplace transforms", "Work with Fourier series & transforms", "Model real engineering problems"],
    modules: [
      { title: "Module 1 · Differential Equations", items: ["Basic concepts & classification", "Formation of differential equations"] },
      { title: "Module 2 · First Order First Degree ODE", items: ["Separation of variables, integrating factor", "Linear ODE & Bernoulli's equation", "Homogeneous and exact equations"] },
      { title: "Module 3 · Higher Order ODE (constant coefficients)", items: ["Auxiliary equation", "Complementary function", "Particular integral"] },
      { title: "Module 4 · Higher Order ODE (variable coefficients)", items: ["Method of change of variables", "Reduction to linear form"] },
      { title: "Module 5 · Laplace Transformation", items: ["Introduction & Laplace transform", "Hyperbolic sine & cosine functions"] },
      { title: "Module 6 · Inverse Laplace Transformation", items: ["Inverse Laplace transformation", "Properties"] },
      { title: "Module 7 · Fourier Transformation", items: ["Fourier transform, sine & cosine transform", "Fourier series, even & odd functions", "Half-range sine & cosine series"] },
    ],
  },
  {
    id: "electronics",
    title: "Electronic Devices & Circuits",
    category: "Electronics",
    level: "Intermediate",
    instructor: "Loop & Logic Faculty",
    duration: "3 Credits",
    lessons: 12,
    rating: 4.8,
    reviews: 0,
    students: 0,
    price: "",
    oldPrice: "",
    banner: "assets/img/course-electronics.svg",
    tags: ["Semiconductors", "BJT/FET", "Op-Amps"],
    summary: "Understand the devices behind modern electronics — from semiconductors and diodes to transistors, amplifiers, oscillators, and operational amplifiers — with plenty of worked problems.",
    outcomes: ["Explain semiconductor physics & diodes", "Analyze rectifiers & voltage regulators", "Understand BJT, JFET & MOSFET devices", "Work with amplifiers, oscillators & op-amps"],
    modules: [
      { title: "Module 1 · Semiconductor Physics", items: ["Bonds, energy bands, effect of temperature", "Hole current, intrinsic & extrinsic semiconductors", "N-type & P-type, majority & minority carriers"] },
      { title: "Module 2 · PN Junction Diode", items: ["PN junction & its properties", "Biasing & volt-ampere characteristics", "Limitations in operation"] },
      { title: "Module 3 · Rectifiers & Waveshaping", items: ["Crystal diode as rectifier, full-wave bridge rectifier", "Output frequency & efficiency, math problems", "LED, clipping & clamping circuits"] },
      { title: "Module 4 · Voltage Regulation", items: ["Voltage stabilization & Zener diode", "Equivalent circuit & Zener as stabilizer", "Mathematical problems"] },
      { title: "Module 5 · Transistors (BJT & FET)", items: ["BJT: transistor action, CE connection, V-I characteristics", "JFET: principle, working & importance", "MOSFET: D-MOSFET operation & characteristics, intro to CMOS"] },
      { title: "Module 6 · Amplifiers, Oscillators & Op-Amps", items: ["Transistor biasing: base resistor & voltage divider methods", "Single & multistage amplifiers, role of capacitors", "Negative feedback, gain & math problems", "Colpitts & Hartley oscillators", "Operational amplifiers: ideal characteristics, virtual ground & applications"] },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 2b. FREE COURSES — full YouTube playlists (open & free)             */
/* ------------------------------------------------------------------ */
const LNL_FREE_COURSES = [
  { title: "C Programming",            cat: "Programming",   thumb: "https://i.ytimg.com/vi/FVwLNzYeo7w/hqdefault.jpg",       url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6o42wWTvMZZpwSAgxsQR5V" },
  { title: "Object-Oriented Programming", cat: "Programming", thumb: "https://i.ytimg.com/vi/4tVB2qWTQGk/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6tsu_i2BOE1g-MeVxos7PZ" },
  { title: "Digital Logic Design",     cat: "CS Core",       thumb: "https://i.ytimg.com/vi/CDhHeGsIcvM/hqdefault.jpg",     url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z4CwKE_OY6GA8kk3z8ThRbA" },
  { title: "Database Management System", cat: "CS Core",     thumb: "https://i.ytimg.com/vi/e0FKggG0gu4/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6RZ6sVm-SB1ZXY1mhilspY" },
  { title: "Data Structure",           cat: "CS Core",       thumb: "https://i.ytimg.com/vi/UVCAEKWIsQk/hqdefault.jpg",      url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6Y9h2A5hfLKz-UtGrkEg0Z" },
  { title: "Introduction to Data Science", cat: "AI & Data", thumb: "https://i.ytimg.com/vi/74GKhKA-1fo/hqdefault.jpg", url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z4j8fCZd7x0MWL08pitnH4Q" },
  { title: "Physics 101",              cat: "Science",       thumb: "https://i.ytimg.com/vi/0q5sV8LKQek/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z4wFFpXCW6vbegJxBcaYz-n" },
  { title: "Physics 102",              cat: "Science",       thumb: "https://i.ytimg.com/vi/NuRUwM33Imc/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6V0_URcjkELL-J-8GZTjfJ" },
  { title: "MAT-101",                  cat: "Mathematics",   thumb: "https://i.ytimg.com/vi/UC1MtEKBrkM/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z7SXZs3nEjDrcNaxXbf5eEu" },
  { title: "MAT-102",                  cat: "Mathematics",   thumb: "https://i.ytimg.com/vi/V8y7PuYOCdo/hqdefault.jpg",    url: "https://www.youtube.com/playlist?list=PL66eeXZhO4z7a-pM3YV38JP5f5U1rofBw" },
];

/* ------------------------------------------------------------------ */
/* 3. BANNER SLIDES (Swiper hero banner)                               */
/* ------------------------------------------------------------------ */
const LNL_SLIDES = [
  { img: "assets/img/slide-1.svg", title: "Foundation Program — Now Enrolling", desc: "C, Data Structures, Algorithms, OOP, Math & Electronics", cta: "Register Now", href: "#courses" },
  { img: "assets/img/slide-2.svg", title: "10 Free Full Courses on YouTube", desc: "C, OOP, DBMS, Data Structure, Physics, Math & more", cta: "Watch Free", href: "#free-courses" },
  { img: "assets/img/slide-3.svg", title: "Join 4,500+ Subscribers", desc: "Learn programming & problem solving, one video at a time", cta: "Subscribe", href: "https://www.youtube.com/@loopNlogic" },
  { img: "assets/img/slide-4.svg", title: "Build Strong Logic & Problem Solving", desc: "Coding fundamentals for academic & career success", cta: "See Courses", href: "#courses" },
];

/* ------------------------------------------------------------------ */
/* 4. TESTIMONIALS / SUCCESS STORIES (sample — replace with real)      */
/* ------------------------------------------------------------------ */
const LNL_TESTIMONIALS = [
  { name: "Ariful Islam", uni: "CSE Student", avatar: "assets/img/avatar-a.svg", rating: 5, review: "The C Programming course made logic building finally click for me. The contests kept me practicing every single week." },
  { name: "Sumaiya Akter", uni: "EEE Student", avatar: "assets/img/avatar-b.svg", rating: 5, review: "Engineering Mathematics felt impossible until L&L broke it into clear modules. Laplace and Fourier actually make sense now." },
  { name: "Tanvir Hossain", uni: "CSE Student", avatar: "assets/img/avatar-c.svg", rating: 5, review: "Data Structures with hands-on linked list and tree implementations prepared me perfectly for my course finals." },
  { name: "Nusrat Khan", uni: "CSE Student", avatar: "assets/img/avatar-d.svg", rating: 5, review: "The free YouTube courses are gold. I started there, loved the teaching, and joined the paid Foundation Program." },
  { name: "Rafiul Ferdous", uni: "EEE Student", avatar: "assets/img/avatar-e.svg", rating: 5, review: "Electronic Devices & Circuits with worked math problems made my semester so much easier. Highly recommend." },
  { name: "Jannatul Dina", uni: "CSE Student", avatar: "assets/img/avatar-f.svg", rating: 5, review: "OOP with UML case studies taught me to actually design software, not just write code. The mini-project was the best part." },
];

/* ------------------------------------------------------------------ */
/* 5. FEATURED YOUTUBE COURSES (shown in the YouTube promo strip)      */
/* ------------------------------------------------------------------ */
const LNL_VIDEOS = [
  { thumb: "https://i.ytimg.com/vi/FVwLNzYeo7w/hqdefault.jpg",      title: "C Programming — Full Course",        views: "Free playlist", href: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6o42wWTvMZZpwSAgxsQR5V" },
  { thumb: "https://i.ytimg.com/vi/UVCAEKWIsQk/hqdefault.jpg",     title: "Data Structure — Full Course",        views: "Free playlist", href: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6Y9h2A5hfLKz-UtGrkEg0Z" },
  { thumb: "https://i.ytimg.com/vi/e0FKggG0gu4/hqdefault.jpg",   title: "Database Management System",          views: "Free playlist", href: "https://www.youtube.com/playlist?list=PL66eeXZhO4z6RZ6sVm-SB1ZXY1mhilspY" },
  { thumb: "https://i.ytimg.com/vi/74GKhKA-1fo/hqdefault.jpg", title: "Introduction to Data Science",       views: "Free playlist", href: "https://www.youtube.com/playlist?list=PL66eeXZhO4z4j8fCZd7x0MWL08pitnH4Q" },
];

/* ------------------------------------------------------------------ */
/* 6. UPCOMING BATCHES (edit dates & seats; date drives countdown)     */
/* ------------------------------------------------------------------ */
const LNL_BATCHES = [
  { course: "C Programming", startDate: "2026-07-05", seatsLeft: 12, totalSeats: 40, level: "Beginner" },
  { course: "Data Structures", startDate: "2026-07-12", seatsLeft: 8, totalSeats: 35, level: "Intermediate" },
  { course: "Object-Oriented Programming", startDate: "2026-07-19", seatsLeft: 15, totalSeats: 40, level: "Beginner" },
];

/* ------------------------------------------------------------------ */
/* 7. FAQ                                                              */
/* ------------------------------------------------------------------ */
const LNL_FAQS = [
  { q: "Is prior experience required?", a: "Not for our beginner courses like C Programming and OOP — we start from absolute fundamentals (no prior coding needed). Intermediate courses such as Data Structures assume basic C knowledge, which our C course fully covers." },
  { q: "Will recordings be available?", a: "Yes. Class material is available to enrolled students, and we also publish full free courses on our YouTube channel that you keep access to anytime." },
  { q: "Will I get a certificate?", a: "Yes, you receive a Loop & Logic certificate of completion for the Foundation Program courses you finish." },
  { q: "How long is support available?", a: "You get active mentor support throughout your batch, plus our community and free YouTube resources for continued learning." },
  { q: "What will I build?", a: "Our courses are practice-driven with regular contests, mega contests, hands-on implementations (linked lists, trees, graphs), and mini-projects and case studies in OOP." },
  { q: "How do I register?", a: "Click any 'Register' or 'Enroll Now' button to open our course registration Google Form. Fill it in and our team will get back to you with batch details." },
];

/* ------------------------------------------------------------------ */
/* 8. TRUST / WHY-US CARDS                                             */
/* ------------------------------------------------------------------ */
const LNL_TRUST = [
  { icon: "users", title: "Expert Instructors", desc: "Learn from mentors who teach thousands of students across our courses and YouTube channel." },
  { icon: "briefcase", title: "Practice-Driven", desc: "Regular contests, mega contests, and hands-on implementations cement every concept." },
  { icon: "compass", title: "Strong Foundations", desc: "We focus on logic, problem solving and fundamentals that power academic & career success." },
  { icon: "award", title: "Certificates", desc: "Earn a Loop & Logic certificate when you complete a Foundation Program course." },
  { icon: "message-circle", title: "Community Support", desc: "An active community and mentors ready to help you whenever you get stuck." },
  { icon: "infinity", title: "Free + Paid Tracks", desc: "Start free on YouTube, then go deeper with the structured Foundation Program." },
];

/* ------------------------------------------------------------------ */
/* 9. COMMUNITY PLATFORMS                                              */
/* ------------------------------------------------------------------ */
const LNL_COMMUNITY = [
  { icon: "youtube", name: "YouTube", desc: "4,500+ subscribers learning with full free courses and tutorials.", href: LNL_CONFIG.community.youtube, color: "#FF0000" },
  { icon: "facebook", name: "Facebook", desc: "Announcements, resources, and a growing network of learners.", href: LNL_CONFIG.community.facebook, color: "#1877F2" },
  { icon: "discord", name: "Discord", desc: "Live chat, study groups, and instant help from peers & mentors.", href: LNL_CONFIG.community.discord, color: "#5865F2" },
  { icon: "whatsapp", name: "WhatsApp", desc: "Quick batch updates and reminders, right on your phone.", href: LNL_CONFIG.community.whatsapp, color: "#25D366" },
];

/* Expose everything for non-module usage */
window.LNL = { LNL_CONFIG, LNL_COURSES, LNL_FREE_COURSES, LNL_SLIDES, LNL_TESTIMONIALS, LNL_VIDEOS, LNL_BATCHES, LNL_FAQS, LNL_TRUST, LNL_COMMUNITY };
