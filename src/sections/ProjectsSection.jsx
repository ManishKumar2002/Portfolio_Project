import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// GitHub blocks its pages from being embedded directly. Use a lightweight
// repository preview inside an iframe instead of a broken github.com iframe.
// The portfolio also uses this for its own project card to avoid recursive embeds.
function createInfoFrame(project) {
  const isGithub = Boolean(project.github);
  const url = project.github || project.live;
  const title = isGithub ? "GitHub repository" : "Portfolio website";
  const description = isGithub
    ? project.github.replace("https://github.com/", "")
    : "You are viewing this portfolio.";
  const action = isGithub ? "Open repository" : "Open portfolio";
  const escapeHtml = (text) =>
    String(text).replace(/[&<>"']/g, (char) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[char]));

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; height: 100vh; display: flex; flex-direction: column;
      justify-content: center; padding: 14px 18px; background: #111827;
      color: #f9fafb; font-family: system-ui, -apple-system, sans-serif; }
    .label { color: #9ca3af; text-transform: uppercase; font-size: 10px;
      font-weight: 700; letter-spacing: 1.2px; }
    .name { font-size: clamp(15px, 5vw, 20px); font-weight: 700;
      overflow-wrap: anywhere; margin: 8px 0 6px; line-height: 1.25; }
    .description { font-size: 11px; color: #cbd5e1; margin: 0 0 12px;
      overflow-wrap: anywhere; }
    a { font-size: 12px; font-weight: 600; color: #a5b4fc; text-decoration: none; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <div class="label">${escapeHtml(title)}</div>
  <div class="name">${escapeHtml(project.title)}</div>
  <p class="description">${escapeHtml(description)}</p>
  <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(action)} &#8599;</a>
</body>
</html>`;
}

export default function ProjectsSection() {
  const projects = [
    {
      title: "Rashtriya Rabari Ekta Manch Website",
      description:
        "Designed and developed a responsive website, creating custom page layouts and templates in Figma before building them with Next.js and TypeScript. Integrated .NET APIs to display dynamic content and navigation menus, with a focus on clear layouts and usability across screen sizes.",
      tech: ["Figma", "Next.js", "TypeScript", "UI/UX", ".NET API Integration"],
      live: "https://rashtriyarabariektamanch.org/",
    },

    {
      title: "Portfolio Website",
      description:
        "Modern single-page portfolio built with React, Tailwind CSS, and Framer Motion to showcase frontend engineering and UI/UX skills. Features smooth scroll navigation, scroll-triggered animations, and a polished animated loading experience. Includes a canvas-based particle background, reusable component architecture, and accessibility-focused markup. Fully responsive and optimized for performance across mobile and desktop devices.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      live: "https://portfolio-manishkr.vercel.app/",
    },

    {
      title: "E-Commerce Website",
      description:
        "Designed and developed a complete e-commerce platform with dynamic product cards, category-wise browsing, discount product sections, and detailed product pages. Built core user flows including login, user profile, cart management, and checkout process. Implemented interactive UI components and optimized layouts for usability and responsiveness using HTML, CSS, and JavaScript.",
      tech: ["JavaScript", "HTML", "CSS"],
      live: "https://gramindukan.in",
    },

    {
      title: "GJU Hisar Website & Admin Panel",
      description:
        "University website and admin portal developed using ASP.NET MVC and HTML/CSS with role-based access control.",
      tech: ["ASP.NET MVC", "JavaScript", "HTML", "CSS"],
      live: "https://gjust.ac.in",
    },

    {
      title: "Memory Card Game",
      description:
        "Built an interactive Memory Card Game using HTML, CSS, and JavaScript with smooth card-flip animations and real-time score updates. The game includes two difficulty levels, where Level 1 contains 6 card pairs and Level 2 increases complexity with 8 card pairs. Designed responsive UI and implemented core game logic for matching, scoring, and progression.",
      tech: ["JavaScript", "HTML", "CSS"],
      github: "https://github.com/ManishKumar2002/Memory-Game",
    },

    {
      title: "Tic Tac Toe Game",
      description:
        "A classic Tic-Tac-Toe game built with React that includes advanced features like move history, winning square highlighting, and sortable move lists.",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/ManishKumar2002/Tic-Tac-Toe_Game",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl glass p-8 md:p-12 border border-white/5"
        >
          <h2 className="section-title text-center">Projects</h2>

          <div className="mt-12 space-y-6">
            {projects.map((project, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-xl bg-white/5 hover:bg-white/10 transition-all p-5 md:p-6 flex flex-col md:flex-row gap-6"
              >
                {/* Website previews use live iframes. GitHub and this portfolio
                    use link-based iframe cards because those pages cannot be
                    safely embedded as regular iframes. */}
                <div className="relative w-full md:w-64 lg:w-72 shrink-0 aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900">
                  {project.github || project.title === "Portfolio Website" ? (
                    <iframe
                      title={`${project.title} repository preview`}
                      srcDoc={createInfoFrame(project)}
                      sandbox="allow-popups allow-popups-to-escape-sandbox"
                      loading="lazy"
                      className="w-full h-full border-0"
                    />
                  ) : (
                    <iframe
                      title={`${project.title} live website preview`}
                      src={project.live}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      className="w-full h-full border-0"
                    />
                  )}

                  <a
                    href={project.github || project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} in a new tab`}
                    title="Open in new tab"
                    className="absolute top-2 right-2 z-10 rounded-md bg-gray-950/90 border border-white/20 p-2 text-white hover:bg-gray-800 transition"
                  >
                    <ExternalLink size={15} />
                  </a>
                </div>

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold">{project.title}</h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* TECH STACK */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded text-xs bg-indigo-500/20 text-indigo-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300"
                      >
                        <Github size={16} />
                        View on GitHub
                      </a>
                    )}

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
