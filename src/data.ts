/* ============================================================
   PORTFOLIO DATA. Edit this block to update the whole site.
   Every fact comes from the resume or the public GitHub repos.
   ============================================================ */

const GH = 'https://github.com/varshinickswamy-dot';
const LINKS = {
  github: GH,
  repos: GH + '?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/varshini-m-c-319a7a2a6',
  email: 'varshinimc10@gmail.com',
  phone: '+91 7411161714'
};

interface Project {
  id: string; name: string; sector: string; featured: boolean;
  status: string; repo: string | null; live?: string; flagship?: boolean; tags: string[]; summary: string;
  arch: string[]; archNote: string; stack: string[]; pitch: Line[];
}

const PROJECTS: Project[] = [
  {
    id: 'hersphere', name: 'HerSphere', sector: 'Career tech', featured: true, flagship: true,
    status: 'Live app and repository', repo: GH + '/HerSphere', live: 'https://hersphere.floot.app', tags: ['JavaScript', 'AI & ML'],
    summary: 'An AI career platform for students and women: career roadmaps, a skill gap analyser, resume builder with ATS checks, mock interviews, jobs, internships, scholarships and mentorship, all in one dashboard.',
    arch: ['Student profile', 'AI career mentor', 'Roadmap + skill gaps', 'Resume + interviews', 'Jobs + mentors'],
    archNote: 'A React and TypeScript app on Floot with serverless endpoints, PostgreSQL and session based sign in. A Node.js reference implementation lives in the repository too.',
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI mentor', 'Floot'],
    pitch: lines([
      'HerSphere is the project I am proudest of. It is an AI career platform for students and women, and it is live on the web.',
      'It gives a personalised career roadmap, a skill gap analyser, a resume builder with applicant tracking checks, and role specific mock interviews.',
      'It also brings jobs, internships, scholarships and mentorship into one dashboard, with student and recruiter workspaces behind a secure sign in.',
      'You can open the live app or read the code from this card.'
    ])
  },
  {
    id: 'jalrakshak', name: 'JalRakshak AI: Smart Water Monitoring', sector: 'Sustainability and IoT', featured: true, flagship: true,
    status: 'Live app and repository', repo: GH + '/Smart-Water-Monitoring-System-JalRakshak-AI-', live: 'https://jalrakshak-ai-chi.vercel.app/', tags: ['AI & ML'],
    summary: 'An AI powered smart water monitoring system for leakage, theft and water quality detection, built as my VTU major project.',
    arch: ['Sensors', 'Data collection', 'AI detection', 'Leak and theft alerts', 'Water quality insights'],
    archNote: 'Aimed at water conservation: spot a leak or illegal drawing early, and keep an eye on water quality.',
    stack: ['IoT', 'Artificial Intelligence', 'Leakage detection', 'Theft detection', 'Water quality'],
    pitch: lines([
      'JalRakshak AI is my major project on smart water monitoring.',
      'It uses AI and sensor data to detect water leakage and theft, and to keep track of water quality, so problems are caught early instead of after the water is lost.',
      'You can open the live app or read the code from this card.'
    ])
  },
  {
    id: 'smartyhub', name: 'SmartyHub: The Student Mentor', sector: 'EdTech', featured: true,
    status: 'Public repository', repo: GH + '/SmartyHub_The-Student-Mentor', tags: ['JavaScript'],
    summary: 'A student platform with career guidance, a chatbot, a resume tool and a study timer.',
    arch: ['Student sign in', 'Career guidance', 'Chatbot', 'Resume tool', 'Study timer'],
    archNote: 'A web front end for students.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    pitch: lines([
      'SmartyHub is a student mentor platform available in my GitHub projects.',
      'It brings career guidance, a chatbot, a resume tool and a study timer together in one place.'
    ])
  },
  {
    id: 'student', name: 'Student Management System', sector: 'Education', featured: true,
    status: 'Academic project', repo: null, tags: ['Java'],
    summary: 'A database-driven web app for managing student records, with separate Admin and Student dashboards and role-based access.',
    arch: ['Browser forms', 'Servlet', 'JDBC', 'MySQL', 'JSP views'],
    archNote: 'Servlets route each request by role, JDBC reads and writes MySQL, JSP renders the page.',
    stack: ['Java', 'Servlets', 'JSP', 'JDBC', 'MySQL'],
    pitch: lines([
      'My Student Management System is a Servlet and JSP application where admins and students get separate dashboards with role based access.',
      'Admins can view, update and delete student records through JDBC and MySQL, and students manage their own profile.'
    ])
  },
  {
    id: 'fraud', name: 'Online Payment Fraud Detection', sector: 'FinTech', featured: true,
    status: 'Public repository', repo: GH + '/Online-Payment-Fraud-Detection-', tags: ['Python', 'AI & ML'],
    summary: 'Flags fraudulent transactions by analysing patterns, comparing three classifiers and serving the trained model from a web app.',
    arch: ['Transactions', 'Preprocessing', 'Model comparison', 'Evaluation', 'Saved model + app.py'],
    archNote: 'Logistic Regression, Random Forest and Decision Tree, scored on accuracy, precision, recall and a confusion matrix.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy', 'Matplotlib'],
    pitch: lines([
      'In Online Payment Fraud Detection, I compare Logistic Regression, Random Forest and Decision Tree models on labelled transactions, and evaluate them with accuracy, precision, recall and a confusion matrix.',
      'The trained model and scaler are saved and used by a web app.'
    ])
  },
  {
    id: 'cancer', name: 'Cancer Type Detection with Report Generation', sector: 'HealthTech', featured: true,
    status: 'Public repository', repo: GH + '/Cancer_Type_Detection_using_image_and_report_generation', tags: ['Python', 'AI & ML'],
    summary: 'A CNN that classifies medical images, with training scripts for breast, lung and skin images, plus Grad-CAM and PDF report modules.',
    arch: ['Medical images', 'Balance + normalise', 'CNN per organ', 'Grad-CAM', 'PDF report + app'],
    archNote: 'Separate training scripts per image type, with an app entry point and a report generator.',
    stack: ['Python', 'Keras', 'TensorFlow', 'OpenCV', 'NumPy'],
    pitch: lines([
      'For Cancer Type Detection, I used a convolutional neural network to classify medical images, with separate training scripts for breast, lung and skin images.',
      'The repository also includes Grad-CAM and PDF report modules, so the result can be explained and shared.'
    ])
  },
  {
    id: 'anime', name: 'AnimeFlix', sector: 'Media', featured: true,
    status: 'Public repository', repo: GH + '/AnimeFlix', tags: ['JavaScript'],
    summary: 'A Netflix-style anime streaming interface: browse trending shows, search, watch trailers and keep a watchlist.',
    arch: ['React + Vite UI', 'api.js', 'Anime APIs', 'server.js', 'Routes + models'],
    archNote: 'Home, detail, watchlist and continue-watching views, plus login, register and admin screens.',
    stack: ['JavaScript', 'React', 'Vite', 'Node.js', 'CSS'],
    pitch: lines([
      'AnimeFlix is a Netflix style streaming interface for anime that I built.',
      'It has a React and Vite front end with home, detail, watchlist and continue watching views, plus login, register and admin screens.',
      'Data comes from anime APIs, and a server file with routes and models sits alongside.'
    ])
  },
  {
    id: 'voting', name: 'Online Voting System', sector: 'Civic tech', featured: true,
    status: 'Public repository', repo: GH + '/Online-Voting-System', tags: ['Python', 'JavaScript'],
    summary: 'Registered users vote online while administrators manage candidates and results. One vote per user, counted in real time.',
    arch: ['Register + login', 'Cast one vote', 'Live counting', 'Admin dashboard'],
    archNote: 'Voter, candidate and admin flows, with face and video helper modules in the repository.',
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    pitch: lines([
      'My Online Voting System lets registered users vote online while administrators manage candidates and results.',
      'It allows one vote per user and counts votes in real time on an admin dashboard.'
    ])
  },
  {
    id: 'ransom', name: 'Ransomware Detection', sector: 'Cybersecurity', featured: false,
    status: 'Public repository', repo: GH + '/Ransomware-Detection', tags: ['Python', 'AI & ML'],
    summary: 'Watches behavioural signals such as rapid file changes and abnormal encryption to warn before large-scale data loss.',
    arch: ['System activity', 'Feature extraction', 'Classifier', 'Alert via app.py'],
    archNote: 'Trains on a ransomware dataset and checks new behaviour with a saved model.',
    stack: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
    pitch: lines(['In Ransomware Detection, I look at behavioural signals such as rapid file changes and abnormal encryption.'])
  },
  {
    id: 'cartoon', name: 'Cartoonify Image', sector: 'Image processing', featured: false,
    status: 'Public repository', repo: GH + '/Cartoonify-Image', tags: ['Python'],
    summary: 'A web app that turns an uploaded photo into a cartoon-style image using edge detection and colour smoothing.',
    arch: ['Upload', 'Edge detection', 'Colour smoothing', 'Cartoon image'],
    archNote: 'A small Python web app that returns the result instantly.',
    stack: ['Python', 'Image processing'],
    pitch: lines(['With Cartoonify Image, I turn an uploaded photo into a cartoon using edge detection and colour smoothing.'])
  },
  {
    id: 'plant', name: 'Plant Disease Detection', sector: 'AgriTech', featured: false,
    status: 'Public repository', repo: GH + '/Plant-Disease-Detection', tags: ['Python', 'AI & ML'],
    summary: 'Deep learning that detects plant diseases from leaf images.',
    arch: ['Leaf image', 'Preprocessing', 'Deep learning model', 'Disease label'],
    archNote: 'A Python image classification project.',
    stack: ['Python', 'Deep learning'],
    pitch: lines(['In Plant Disease Detection, I use deep learning to recognise plant diseases from leaf images.'])
  },
  {
    id: 'crop', name: 'Smart Crop Prediction', sector: 'AgriTech', featured: false,
    status: 'Public repository', repo: GH + '/Smart-Crop-Prediction', tags: ['Python', 'AI & ML'],
    summary: 'A machine learning model that recommends crops from soil, weather and pH data.',
    arch: ['Soil + weather + pH', 'Model', 'Crop recommendation'],
    archNote: 'A Python machine learning project.',
    stack: ['Python', 'Machine learning'],
    pitch: lines(['Smart Crop Prediction recommends which crop to grow, based on soil, weather and pH data.'])
  },
  {
    id: 'resume', name: 'Resume Generator', sector: 'Productivity', featured: false,
    status: 'Public repository', repo: GH + '/Resume-Generator', tags: ['JavaScript'],
    summary: 'A web app that builds a downloadable resume from the details a user enters.',
    arch: ['User details', 'Template', 'Downloadable resume'],
    archNote: 'An EJS web app.',
    stack: ['JavaScript', 'EJS', 'Node.js'],
    pitch: lines(['Resume Generator builds a downloadable resume from the details a user types in.'])
  },
  {
    id: 'taskflow', name: 'ToDoList TaskFlow', sector: 'Productivity', featured: false,
    status: 'Public repository', repo: GH + '/ToDoList-TaskFlow', tags: ['JavaScript'],
    summary: 'A to-do list web app for planning and tracking tasks.',
    arch: ['Add tasks', 'Track progress', 'Complete'],
    archNote: 'A front end task manager.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    pitch: lines(['TaskFlow is a to-do list app for planning and tracking tasks.'])
  },
  {
    id: 'age', name: 'Age Calculator', sector: 'Utility', featured: false,
    status: 'Public repository', repo: GH + '/Age-Calculator-WebApp', tags: ['JavaScript'],
    summary: 'A responsive web app that shows your age in years, months and days.',
    arch: ['Date of birth', 'Calculation', 'Age breakdown'],
    archNote: 'A small responsive front end.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    pitch: lines(['Age Calculator shows an age in years, months and days.'])
  },
  {
    id: 'stock', name: 'Stock Portfolio Tracker', sector: 'FinTech', featured: false,
    status: 'Public repository', repo: GH + '/CodeAlpha_StockPortfolioTracker', tags: ['Python'],
    summary: 'A console app that tracks stock holdings and totals your investment. Built during my CodeAlpha internship tasks.',
    arch: ['Add stocks', 'Track holdings', 'Investment total'],
    archNote: 'A Python console application.',
    stack: ['Python'],
    pitch: lines(['Stock Portfolio Tracker tracks stock holdings and totals the investment.'])
  },
  {
    id: 'hangman', name: 'Hangman Game', sector: 'Games', featured: false,
    status: 'Public repository', repo: GH + '/CodeAlpha_HangmanGame', tags: ['Python'],
    summary: 'A console Hangman game with ASCII art and score tracking.',
    arch: ['Pick word', 'Guess letters', 'Score'],
    archNote: 'A Python console game.',
    stack: ['Python'],
    pitch: lines(['Hangman is a console game with ASCII art and score tracking.'])
  }
];

const INTRO: Line[] = lines([
  "Hi, I'm Varshini.",
  "I'm an aspiring Java developer based in Bengaluru, and I'm a Java full stack development intern at Dhee Coding Lab.",
  "I'm studying Information Science and Engineering at Vivekananda Institute of Technology, and my CGPA is 9.24.",
  "My core stack is Java, Servlets, JSP, JDBC and MySQL, and I also build machine learning projects for fraud detection, medical imaging and cyber security.",
  "My flagship projects are HerSphere, a live AI career platform, and JalRakshak AI, a smart water monitoring system for leakage and theft detection.",
  "I'm looking for internships and entry level roles. Scroll down to see my work, or start the audio tour and I'll walk you through it."
]);

interface TourStep { target: string; block: 'start' | 'center'; title: string; lines: Line[] }

const TOUR: TourStep[] = ([
  {
    target: 'about', block: 'start', title: 'About me', lines: lines([
      "I'm a Java developer in the making.",
      'I build database driven web applications with Java, Servlets, JSP, JDBC and MySQL.',
      "Since July 2026 I've been a Java full stack development intern at Dhee Coding Lab."
    ])
  },
  {
    target: 'skills', block: 'start', title: 'Skills matrix', lines: lines([
      'This is my skills matrix, grouped into Java backend, SQL and databases, web front end, and applied AI.',
      'Each bar is my own estimate of my level, and each group links to the projects that show the skill.',
      "I'm comfortable with SQL beyond the basics: joins, CTEs, indexes, triggers, stored procedures and window functions."
    ])
  }
] as TourStep[]).concat(
  PROJECTS.filter((p) => p.featured).map((p) => ({ target: 'proj-' + p.id, block: 'center' as 'center', title: p.name, lines: p.pitch }))
).concat(([
  {
    target: 'experience', block: 'start', title: 'Experience', lines: lines([
      'At Dhee Coding Lab, I build CRUD applications with Java and MySQL and sharpen my debugging.',
      'Before that, I scored 90 point 16 percent in pre university and 96 point 32 percent in SSLC.'
    ])
  },
  {
    target: 'contact', block: 'start', title: 'Contact', lines: lines([
      "That's the tour. You can reach me by email, or find me on LinkedIn and GitHub.",
      'Thank you for visiting.'
    ])
  }
] as TourStep[]));

interface Ask { label: string; target: string; lines: Line[] }
const ASKS: Ask[] = [
  { label: 'Introduce yourself', target: 'hero', lines: INTRO },
  {
    label: 'Why hire me?', target: 'projects', lines: lines([
      'I combine a solid Java and SQL foundation with real projects, including HerSphere, a live AI career platform, and JalRakshak AI for smart water monitoring.',
      'I already work with Servlets, JSP, JDBC and MySQL as a full stack intern, and I ship trained machine learning models inside working applications.',
      "I'm open to internships and entry level roles in Bengaluru."
    ])
  },
  {
    label: 'My tech stack', target: 'skills', lines: lines([
      'On the backend, Core Java, Servlets, JSP and JDBC with MySQL.',
      'On the front end, HTML, CSS, JavaScript and React.',
      'For AI work, Python with scikit-learn, Keras and OpenCV, and Flask for web apps.'
    ])
  },
  {
    label: 'How to reach me', target: 'contact', lines: lines([
      'Email is the quickest way. The address is in the contact section, with a copy button.',
      'You can also open my LinkedIn and GitHub from the same section.'
    ])
  }
];

interface Skill { n: string; l: number; note: string }
interface SkillGroup { id: string; name: string; blurb: string; skills: Skill[]; proof: string[] }

const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'java', name: 'Java backend', blurb: 'The core of her work.', proof: ['student', 'hersphere'],
    skills: [
      { n: 'Core Java and OOP', l: 82, note: 'Encapsulation, inheritance, polymorphism, abstraction' },
      { n: 'Collections', l: 78, note: 'List, Set, Map, ArrayList, LinkedList, HashSet, HashMap' },
      { n: 'Exceptions and threads', l: 72, note: 'Custom exceptions, multithreading, string handling' },
      { n: 'Servlets and JSP', l: 74, note: 'Role-based dashboards' },
      { n: 'JDBC', l: 76, note: 'Java to MySQL connectivity' }
    ]
  },
  {
    id: 'db', name: 'SQL and databases', blurb: 'Beyond basic queries.', proof: ['student'],
    skills: [
      { n: 'MySQL and CRUD', l: 80, note: 'Create, read, update, delete' },
      { n: 'Joins and subqueries', l: 78, note: 'Multi-table queries' },
      { n: 'Views and CTEs', l: 72, note: 'Readable, reusable queries' },
      { n: 'Indexes, triggers, procedures', l: 68, note: 'Performance and automation' },
      { n: 'Window functions', l: 66, note: 'Ranking and running totals' }
    ]
  },
  {
    id: 'web', name: 'Web front end', blurb: 'Responsive and accessible.', proof: ['hersphere', 'smartyhub', 'anime'],
    skills: [
      { n: 'HTML5 and semantic markup', l: 84, note: 'Structure that reads well' },
      { n: 'CSS3 and responsive design', l: 80, note: 'Layouts that adapt' },
      { n: 'Forms and validation', l: 76, note: 'Clean input handling' },
      { n: 'JavaScript', l: 66, note: 'Interactive interfaces' },
      { n: 'React and Vite', l: 55, note: 'Used in AnimeFlix' }
    ]
  },
  {
    id: 'ml', name: 'Applied AI and ML', blurb: 'Models that ship inside apps.', proof: ['hersphere', 'jalrakshak', 'fraud', 'cancer'],
    skills: [
      { n: 'Python', l: 72, note: 'Scripts, Flask apps, ML pipelines' },
      { n: 'scikit-learn and pandas', l: 66, note: 'Classification and preprocessing' },
      { n: 'Keras and CNNs', l: 58, note: 'Medical image classification' },
      { n: 'OpenCV', l: 52, note: 'Image preprocessing' },
      { n: 'Flask services', l: 64, note: 'Serving trained models' }
    ]
  }
];

const SOFT_SKILLS = ['Problem solving', 'Analytical thinking', 'Communication', 'Team collaboration', 'Adaptability', 'Quick learning', 'Time management'];

interface Stat { label: string; to: number; decimals: number; suffix: string }
const STATS: Stat[] = [
  { label: 'CGPA at VTU', to: 9.24, decimals: 2, suffix: '' },
  { label: 'Projects built', to: 17, decimals: 0, suffix: '' },
  { label: 'Public repositories', to: 18, decimals: 0, suffix: '' },
  { label: 'Practice problems solved', to: 50, decimals: 0, suffix: '+' }
];

interface Milestone { when: string; title: string; org: string; body: string }
const EXPERIENCE: Milestone[] = [
  {
    when: 'July 2026 to now', title: 'Java Full Stack Development Intern', org: 'Dhee Coding Lab Pvt. Ltd.',
    body: 'Building web applications with Core Java, HTML, CSS, JDBC, Servlets, JSP and MySQL. Implementing CRUD operations with Java and MySQL, and strengthening debugging, database management and problem-solving through practical projects.'
  },
  {
    when: 'Aug 2023 to now', title: 'B.E. in Information Science and Engineering', org: 'Vivekananda Institute of Technology, Bengaluru',
    body: 'Visvesvaraya Technological University. CGPA 9.24.'
  },
  { when: 'Mar 2022', title: 'Pre-University Course (PCMB), Class XII', org: 'Vidya Nidhi Independent PU College, Tumkur', body: '90.16%' },
  { when: 'Aug 2020', title: 'SSLC, Class X', org: 'Vasavi Vidyanikethan, Magadi Town', body: '96.32%' }
];

const NAV_ITEMS: Array<[string, string]> = [
  ['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Experience', 'experience'], ['Contact', 'contact']
];
