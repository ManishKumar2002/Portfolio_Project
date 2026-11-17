import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Globe2 } from "lucide-react";

const DESKTOP_PREVIEW_WIDTH = 1280;
const DESKTOP_PREVIEW_HEIGHT = 720;

// Show the first screen of a desktop-sized site, scaled down into the card.
// Disable iframe interaction so a project preview behaves like a thumbnail.
function ProjectPreview({ project, isLiveActive }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.25);
  const [githubImageFailed, setGithubImageFailed] = useState(false);

  useEffect(() => {
    if (!project.live || !containerRef.current) return;

    const node = containerRef.current;
    const updateScale = () => {
      setScale(node.getBoundingClientRect().width / DESKTOP_PREVIEW_WIDTH);
    };

    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(node);
    return () => observer.disconnect();
  }, [project.live]);

  const isOwnPortfolio = project.live?.includes("portfolio-manishkr.vercel.app");
  const previewUrl = isOwnPortfolio
    ? project.live + (project.live.includes("?") ? "&" : "?") + "portfolioPreview=1"
    : project.live;

  // GitHub blocks iframes, but provides a generated Open Graph repository preview.
  const githubRepository = project.github?.replace(/^https:\/\/github\.com\//, "");
  const githubPreview = githubRepository
    ? `https://opengraph.githubassets.com/1/${githubRepository}`
    : null;

  return (
    <div
      ref={containerRef}
      data-live-preview={project.live || undefined}
      className="group/preview relative w-full md:w-80 lg:w-96 shrink-0 aspect-video overflow-hidden rounded-xl border border-white/10 bg-slate-900"
    >
      {project.github ? (
        githubImageFailed ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-gray-900 to-slate-800 p-5 text-center">
            <Github size={36} className="text-gray-200" />
            <span className="text-sm font-semibold text-gray-100">{project.title}</span>
            <span className="text-xs text-gray-400">GitHub repository</span>
          </div>
        ) : (
          <img
            src={githubPreview}
            alt={`${project.title} GitHub repository preview`}
            loading="lazy"
            className="h-full w-full object-cover"
            onError={() => setGithubImageFailed(true)}
          />
        )
      ) : isLiveActive ? (
        <iframe
          title={`${project.title} homepage preview`}
          src={previewUrl}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
          scrolling="no"
          className="absolute left-0 top-0 border-0 pointer-events-none"
          style={{
            width: DESKTOP_PREVIEW_WIDTH,
            height: DESKTOP_PREVIEW_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950/80 px-4 text-center">
          <Globe2 size={30} className="text-indigo-300" />
          <p className="text-sm font-semibold text-gray-100">Live website preview</p>
          <p className="text-xs text-gray-400">Loads when you stop scrolling here</p>
        </div>
      )}

      <a
        href={project.github || project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} in a new tab`}
        title={`Open ${project.title}`}
        className="absolute inset-0 z-10 flex items-start justify-end p-3 bg-transparent transition-colors hover:bg-black/10"
      >
        <span className="rounded-md bg-gray-950/90 border border-white/20 p-2 text-white shadow-lg">
          <ExternalLink size={16} />
        </span>
      </a>
    </div>
  );
}

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const [activePreview, setActivePreview] = useState(null);

  // Full website iframes continue running scripts and animations, even when
  // visually scaled down. Keep only the centered preview active, and unmount
  // it while the user scrolls so it cannot compete with the portfolio itself.
  useEffect(() => {
    let resumeTimer;
    let scrolling = false;

    const activateClosestPreview = () => {
      const section = sectionRef.current;
      if (!section) return;

      const viewportHeight = window.innerHeight;
      const previews = Array.from(
        section.querySelectorAll("[data-live-preview]")
      );
      const visible = previews
        .map((node) => {
          const rect = node.getBoundingClientRect();
          const visibleHeight = Math.max(
            0,
            Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0)
          );
          return {
            url: node.getAttribute("data-live-preview"),
            distance: Math.abs(rect.top + rect.height / 2 - viewportHeight / 2),
            visibleHeight,
          };
        })
        .filter((item) => item.visibleHeight >= 60)
        .sort((a, b) => a.distance - b.distance);

      setActivePreview(visible[0]?.url ?? null);
    };

    const onScrollOrResize = () => {
      // Immediately free the iframe's resources as scrolling starts.
      if (!scrolling) {
        scrolling = true;
        setActivePreview(null);
      }
      window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        scrolling = false;
        activateClosestPreview();
      }, 450);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    resumeTimer = window.setTimeout(activateClosestPreview, 300);

    return () => {
      window.clearTimeout(resumeTimer);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

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
    <section ref={sectionRef} id="projects" className="py-20 px-4">
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
                <ProjectPreview project={project} isLiveActive={activePreview === project.live} />

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
