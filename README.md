Bhavitha Chowdary Nadendla — Personal Portfolio 💼

A modern, fully responsive personal portfolio website built with plain HTML, CSS, and JavaScript. Features a glassmorphism design, animated gradient text, scroll-reveal animations, and a dark space-blue theme — all with no frameworks and no build step.

Sections
Section	Description
Hero	Introduction with animated floating profile image and call-to-action buttons
About	Three glass cards covering background, mission, and goals
Skills	Grid of technical skills — HTML5, CSS3, JavaScript, Python, Java, C, SQL
Education	Vertical timeline of academic background
Projects	Featured project cards with preview images
Resume	Direct link to view or download the resume PDF
Contact	Contact form plus email, phone, and LinkedIn details
Features
Glassmorphism UI — frosted-glass cards using backdrop-filter: blur()
Gradient text effects on headings and the logo
Scroll-reveal animations powered by the Intersection Observer API
Floating profile animation with a CSS keyframe loop
Sticky blurred navbar with smooth-scroll anchor navigation
Custom scrollbar styled to match the theme
Fully responsive — breakpoints at 992px, 768px, and 480px
Hover micro-interactions on cards, buttons, and timeline items
Tech Stack
HTML5 — semantic structure and section layout
CSS3 — Flexbox, CSS Grid, gradients, animations, media queries
JavaScript (Vanilla) — Intersection Observer for reveal animations
Google Fonts — Poppins
Project Structure
portfolio/
├── index.html                 # All page sections
├── style.css                  # Theme, layout, animations, responsive rules
├── script.js                  # Scroll-reveal animation logic
├── profile.jpg                # Hero profile photo
├── weather-dashboard.jpeg     # Project preview
├── tutorial-app.jpeg          # Project preview
├── image.png                  # Project preview
└── resume.pdf                 # Downloadable resume
Getting Started
Clone the repository:
bash
   git clone https://github.com/BhavithaChowdary-8829/portfolio.git
Move into the folder:
bash
   cd portfolio
Open index.html in a browser, or run a local server:
bash
   python -m http.server 8000

Then visit http://localhost:8000.

Deploying with GitHub Pages
Push the project to a GitHub repository.
Go to Settings → Pages.
Under Source, select the main branch and the /root folder.
Save — the site goes live at https://BhavithaChowdary-8829.github.io/portfolio/.
Featured Projects
Weather Dashboard — Real-time weather app with current conditions, wind, humidity, visibility, pressure, sunrise/sunset, and a 5-day forecast.
Tutorial App — A student learning platform with interactive card-based lessons, notes, and user login.
Portfolio Website — This site.
Customization
Colors — the accent palette (
#00d4ff, 
#2563eb, 
#7dd3fc) is set in style.css; change those values to reskin the site.
Content — edit text directly in index.html; no templating required.
Sections — add a new <section id="..."> and a matching <nav> link.
Roadmap
 Connect the contact form to a backend (Formspree, EmailJS, or similar)
 Add a mobile hamburger menu
 Add live demo and source links to each project card
 Optimize images to WebP for faster loading
 Improve accessibility (focus states, ARIA labels, contrast checks)
Contact
Email — bavitha.nadendla8829@gmail.com
LinkedIn — bavitha-chowdary-nadendla
GitHub — @BhavithaChowdary-8829


Released under the MIT License. Feel free to use the code as a reference, but please replace the personal content and images with your own.

© 2026 Bhavitha Chowdary Nadendla
