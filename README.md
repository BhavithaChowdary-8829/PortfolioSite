# Bhavitha Chowdary Nadendla — Personal Portfolio 💼

A modern, fully responsive personal portfolio website built with plain HTML, CSS, and JavaScript. Features a glassmorphism design, animated gradient text, scroll-reveal animations, and a dark space-blue theme — all with no frameworks and no build step.

## Sections

| Section | Description |
|---|---|
| **Hero** | Introduction with animated floating profile image and call-to-action buttons |
| **About** | Three glass cards covering background, mission, and goals |
| **Skills** | Grid of technical skills — HTML5, CSS3, JavaScript, Python, Java, C, SQL |
| **Education** | Vertical timeline of academic background |
| **Projects** | Featured project cards with preview images |
| **Resume** | Direct link to view or download the resume PDF |
| **Contact** | Contact form plus email, phone, and LinkedIn details |

## Features

- **Glassmorphism UI** — frosted-glass cards using `backdrop-filter: blur()`
- **Gradient text effects** on headings and the logo
- **Scroll-reveal animations** powered by the Intersection Observer API
- **Floating profile animation** with a CSS keyframe loop
- **Sticky blurred navbar** with smooth-scroll anchor navigation
- **Custom scrollbar** styled to match the theme
- **Fully responsive** — breakpoints at 992px, 768px, and 480px
- **Hover micro-interactions** on cards, buttons, and timeline items

## Tech Stack

- **HTML5** — semantic structure and section layout
- **CSS3** — Flexbox, CSS Grid, gradients, animations, media queries
- **JavaScript (Vanilla)** — Intersection Observer for reveal animations
- **Google Fonts** — Poppins

## Project Structure

```
portfolio/
├── index.html                 # All page sections
├── style.css                  # Theme, layout, animations, responsive rules
├── script.js                  # Scroll-reveal animation logic
├── profile.jpg                # Hero profile photo
├── weather-dashboard.jpeg     # Project preview
├── tutorial-app.jpeg          # Project preview
├── image.png                  # Project preview
└── resume.pdf                 # Downloadable resume
```

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/BhavithaChowdary-8829/portfolio.git
   ```
2. Move into the folder:
   ```bash
   cd portfolio
   ```
3. Open `index.html` in a browser, or run a local server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`.

## Deploying with GitHub Pages

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select the `main` branch and the `/root` folder.
4. Save — the site goes live at `https://BhavithaChowdary-8829.github.io/portfolio/`.
