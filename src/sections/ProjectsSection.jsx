import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {

    const projects = [
        {
            title: "Rashtriya Rabari Ekta Manch",
            description:
                "Designed and developed a responsive website, creating custom page layouts and templates in Figma before building them with Next.js and TypeScript. Integrated .NET APIs to display dynamic content and navigation menus, with a focus on clear layouts and usability across screen sizes.",
            tech: ["Figma", "Next.js", "TypeScript", "UI/UX", ".NET API Integration"],
            live: "https://rashtriyarabariektamanch.org/",
            previewImage: "data:image/webp;base64,UklGRkoQAABXRUJQVlA4ID4QAAAwcACdASoIAukAP0WgxVywK7EsI9RqaiAoiWVu2OU/QQ4HFXOp9f0fbfXnmdN4p6vz7/lu4b/g+Idhw52x6Mlh5Z1IoA/Ou8w1a5TzKL9R6Wjv5qQslj4z8gOyWPjPyA7JY+Mzv9GfMHvDAxZI5VMc77W0aASUkRhtC76AQt5M8kJMq+3jTAXA3DVC5LNIuyCTX9I1wF3EYucqcyao1J8FQnutQRZshK0jTxq/0V5M7Ya/Rcet16In7glCgj+XFdZQ7vG7o47hYLbwDWMEydFAj8AGRxN5USeJbxB90MkBK9pMq01ClRkeRN9Zws738P8NSQYgfS+v81QqgbX0sstLk2jB/EIeFEkhnPk6IOgJPPXSfkm9lxVcuehWoRhFG4yYCATwvB74BxlK1z0mBEZJ4Y6nhZv7f9zxs4NrWBd3ZoDRcO4bpRf8t/TTioqMNDQ0IrEHB38eVEKKU59PDuojpSmblXCswUl8zQS+1NhLO1EaGKHJTJX4D1ndzVpdDrew0+yLWAsuq6eFl1Xxal8k1wjM/tI5b2WGUv8Dx5E0MaotoNGcSzSiRH4t8asPHmWFAS6W6hjW+YaZsL083zc0nexfBDLn8ldUldPgRLte6M3hW8XiZGg95f1WH2dZLsK5OJX0Vb91T9MrA3X0QQV/BoYcnvPf/tUOsC60B/XOpe4Zq5BH1s56eQVwbCJZA81gO9/f2izaUL0AEJj6xGBAUGqst8ATRrRlTuyY0LVN9wXdqDm1cNF/YTWQrAMyJ6S+gnPIpgRaP5EYgnAHq53xy4LCxLMtPiqBV2wsIP5UFaTi5VGYgAZBx31zNfd9cfy1HQd1qmbHizwKBGvnBHwNBqhlZPZhrjYeDbdktDLoXgcdptQTuZNlzVUn3+xi9n4RsTVBpkqh+ByPnV2F/waCasyUjKVwn8DR3k0+EtuE4uqhHwBRcDvnb/e4dKuGDJQsN5Ta6fiZDuZRnrITtauJo+Hk3txwjsteedq3WnojTVqpBX+sMtQO3tYLHK3410apqq0WKq0K/IJMy/aXj84e87bEg/YNoX0Ql6p5mFEmS4sAvgphdW6QZ6Bo6zNJ6dBN17DUSFTpdJhUCNqfJofcCbtkPaorIhOqirynJmppUmGK5vI998RArjnjzkKTWYhgJegQSzYdIYpXCWus7FvvWhelu0TvPi44HfrLB9vv1FmXxxT4e/cRxgAA/u5LrwGXwD4IFAt45hAAdozSwqHTuArBc4DynZ9NbUWShhMn3UTO5Wx6Pyu6kliUEk0PaOqJycYPSOrHuZ98XCe7J1V1BCQN+diLIocfEXDw18NQ3hnoXr5/1ZU45TPxfqUOsrJ2FWqgkf0pLspCSBkjTxUXcP5lxzZUUWl2cjS9VBzSY9tQPGYpDvVatM9cgVaWfsnakGg2eJlrXMM22TiUkTvujRopqhJ8NJlNR3gj1OhMMf1OZGZ439w7IOupzDI0YXojy7jfeb42irJZzFEpC/swBh9xfLTW1ZHnNHKgStmJiK7GKmsvz2FloP5sItkkIUt8siA1iLsAm0M6rogSTYv1aYHMc5QRbb7icPt5s7kuCNS9WwoGdUKZUROFsa8CjyDFkuxFKii+TodeSnKCmzECWkHs1mIzyiuHvyuDyWqTO6TM7yH7GYA5j2EK5VgtEICtSlv/iIU2FjwdffhDnOm5f3DLuXOwcYBPnZlTAgOhUEqK55pPCVPoVdYlxzWzTLzsKjVufZ8tKHAqI+SH0Ho/MDrZ11pjTQFNkTe9JtzuDAH38oDKWukyCR0uev6mFQavOPsQcSghpQchNQY2ukSUZdWprTEYRNvnJ7cpxqwupLZV+FdC+Mvy27sWIilsjtuoMuMmcKTRQ6PRFNQo9eUUcKm/o26N/eCO5kdMcxusnx6OoeIGsCQQqhr8aIQymAEArt42JwAzd4OlIPUusTxWejfxGufUDtSoEmOd618NNy1kIRgtQUJQhTxcM3jzPEk6X4aZsvQUg7ASp+ZldZ6sPU1ad1nSlMv38IdtEBUKEXEBwUznSrbqzrHUvu0YjTdiS++8b3bHPt4oT1S7Xi3F72cctg9O1Ink3Qu9vgAAAA8hRN0v9J9bO9+CPlxlcikDRmG7XfoUB38M65Kc5iw5jOn08sFiQMeMgGjnYidFYGf0ltpdGIyt8+AxDlNVfBWNyoNiyAawQ9JXAOhrS6ukSUnA8EORD2JkrOmAc83Kv4irycLzx5/AlIAAABdd3vBDwz4Z7LxUFx02VcuAAZbNlF7q7jp6vtS9egZt1TTdyQ69wdvkJlygy/5uBW4Eppc+Tgvb8xo1v2QKPuc6Fs3TgX9MWXWet1uTDIKvGaMXO/3oEHlpKaESZwItd1HESrYqyah+YW3zt2t6fXuU0NieB2zcebSjdKpY57r56REX6Qux/jQy62XTHjUB/aZykzTYsHTEBqYBs8liQGAQbbb9QnG5fzsB16YqvfXpHt7L7TuNrZcjSF8DUP4t7in4RVdmIHWNkgCrcIibRwQxJbMAo9pbvxXoPLpwpG6/Q7lb6xOUXCyMgmBXhkTW37ONgan4iR8J4FwVl9MakVCJiDAowg9dIAMTEvo5A1biNR0pp4rIoYV1npXc4x65wCcTI2U5F7zsC/G3mtHYrSBoFTKG8Du46MT8OwmQ4bA/A3pAszNdsusErShHqZuz6If+U49TXES5I/3DV6n9CcjID7jcOv5Jy2wdd35v7xbPBjvCrsaYw3ER7np2P9pr3LtgpMpj/EeNK3LTL5v69xqb8TiwW8KC8WfYy4bllmM5/4CThx/FJvtvIJXUzdT4UcTWmIsgF5ICteHJif1xxld42WM10M5tCfVYi1bBnvh/L1ao2YnsJw5u/U+6qHdpizaRX7mlp1sD9j9RAlOcEaQr13SwgBJjGteu3Pqq5TdTnYlt5WY4TwCBqpK0XKaUrhXP8cExMJFhIxUJfsS3O4IJczxJhjYgrfDujIXutWFbBSYi+RjRqG18YkLDiCBjvBs6alKkwldnjVt/vulWSdZqILCxkG1hv+jCnbcN1H+VRy3m0Rx6iQbcJWrTXTBPAaOVJTQ5DR7nds5RnkrTaBoz/Dfk8FEjg+vk2pmXtBRjVlko9O7fhkzJKa7j6bB6Dr3kVoR9zsAVcCvKVKTyUrG4QEsNyPwzoXaCbzEEmgEOMEDXP16Ir26GjiCYfGqo1H83vLyhPzFxri1sD0YiC3Mos4L+6Tpmm9HEUWC9wqyQzYS47B0iuSuGlpuuF5B12SB3br3sMyUM+WwnrRcHB1uGssEiYHfGk1tQlxhidUcd9zKRKdbymzQHaz732f9cZ2M9f8BAffVU/Fh1vNtcwmZwFhj3MZ9JWDP6bMawzfiTiyKLSyLNRmw2gm92u58FZbpZXcZ/NLRDtXDaAaNFNspvGWiqfZQg6DkfSyJYxg8jn0SM6sXYQd7hGq9z8mfV1+45p6scQKXL10OOM8JDuWMnoTZA8oifziCZ+shzXAcRE/8Yr230O3fDfWwusZtPdatj3dJZZHTlIYkDF4LnqQa10nkGwnDF1AyWB8+sbe1SOTuH3Q4P8GHxdKNYhCM7y3MDhwqWka67VQZYIXfLosZahs5rdt0xq+xt6puLFy/TiG7i2mzv0FwC9L6qj965VGakCI1WVf0rxWznc5cJuXDc+AxOaNJGr76AJJeLZrkTTudvSUYYFP0ougSulqg2sAp8y4ydfeFRoqu1D+OzsdWMEk2X1ZUaKaTq+2A2aHgrvqE7mOdF4gKC6ABgPvvuK6jUuKziuSkO87ujPYNl3GGlGj6lbc2UdPsw/eBhYxfEppzY881kiMdYHRsiQHM8hP9aVDnd1ciJDIYSsplcUaVHX4cNXwkU3GDEdNjsqxON06AsqU3wb1oMnao20xBPATMO2hf5smw9jr7llVOXVG/EOFLdv0gF7waxhNyUS43rdAqJESrLYyf9kCl6/UfIFYzSFKSKIQ4r3j49Ksj3cb1U2ZTD6gW+DGLa6NJR5BXRfufqqa+CtFUOAioZxzeBFDiKvFh81T3b2O8Od15ts1YzhdF/S33gHZd2SU3MbBbmhVytlOn4zajITX7aK2qgtIUNLx7NgueJk7mgtZx944naVaIEGo4KT9NXwzPOwbmOCXeJdqp4J+Rt6n0IElVWZL0t5n/NUxuNM1v85lsbP9fwT1jsBcSbn3XpveatP3hOE+4mJ0jkjMG0YItcR3zIWTg3pIb1ppH9B0IThrDOjoG2SZDEACUZoyRzFFwoJl5TB3O5F1Ajy1o7FizyPjw1/OGGz82rFSuylpsBXGsND/gZ0CenkGpgl+8y5qN1ik/+p92JNEikrtYoqn/YUWKnKoKyTfFut42vfI4q+UhVJF+dxJ32sex/Hs9sSoMcGxmcg3kBEDGyd7PadCOWmI1PhyJWfyqeVIUzGrAi6b5KOrxNF0CjG8vLLftFnp46e3oT1MkJUIiiCBvOMvCBMU8wvyLnadhwWwSyD6PIN6pUZzOwgujCUCIRRt+Jku/LMrzT/KCZkCaftkCMvc92552friGvm6X10C+ZD37PC4CeHWrkUEOc+Dc5PUDKaxGIBpmrya2+o2hF0+RD1hke0g03LDEd4Ue0OYAHEaEG9+eFJssfuGhAhbNP70XG4znrRKMGNLve4MfY7MFLqYBa+keRgaux720n57fjwazK6pzHjUDv/96X60WrOWltDYo/yhGRpPZhsCfAXD9pByYpbjLKI3hLNrfrVy0ml0Mhoq1KBsZTj7KfJT5sTsXPSO+k2l2duBVVbZEPjyO5jxv/CPmCB5jsUECGm4DgklYhOFranb/LElhuvmXRbwKarUmwFXdubEu+kVC5UcK+wCaqPVRgx5d0xcqXEXfsLDqY6ZSlMuFJtYwjzJQjg4BaUBAKU+vJlDXASeibL7BWrklM46R/eeqM6QNvdt6KdQPr7FTLlHCsc+h51w8i0KghqLPilMp9feM5vRzIkVjYrx24GdOHLCB/IfQkFOJ+91+uUjDCHUnD0HGPmD3EAQ1de5/m4GUGLkM+VmGv4apYhXybfekSOaUQoYfPHySFq5IT+DizOzRgqm6z1acJnMp98GsDbsT43gUB+UPaTwVD2g3WAU740nh0AsZXvg3yFXdCsvIys9IJmrN1wBRrmqGHeEF5/5v9I6QrYQ2UC5N6HLDCqi807YJV5+RqAlPdko3AhukaEX1SEtJzIvYdefHjdb0KrxXmBRxXgHiakH3aDv90SIOZeB2CCqRClC5gDYXE7/3mZL6JLOeciGFufFbDXcI1TEL/5aNwlm04J9WQMeV2CDoLr/n3luLpeIOaOwgY0cAkxPqtnDnN2HUn0NYT/uSKNURyLgfTjjZyGTc9LkqQVP6vsJtWRQ4w4kmUs4Noxp0rSwZbdDIIaQEx8TwB+CCEjJeVoYPeeW4+jnS++XTa7c2Z0qxeobCLi6oso1Mfmm3j9q0EnePuty+8SQPQV/M0GtdUnY0LdcWMAVx+jywzn7NzUB1ixwjDEKPbEJeMWrY6FUSvFoo36lhsvRHEw520SkBB4AA="
        },

        {
            title: "Portfolio Website",
            description:
                "Modern single-page portfolio built with React, Tailwind CSS, and Framer Motion to showcase frontend engineering and UI/UX skills. Features smooth scroll navigation, scroll-triggered animations, and a polished animated loading experience. Includes a canvas-based particle background, reusable component architecture, and accessibility-focused markup. Fully responsive and optimized for performance across mobile and desktop devices.",
            tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
            live: "https://portfolio-manishkr.vercel.app/",
            previewImage: "/portfolio.png"
        },

        {
            title: "E-Commerce Website",
            description:
                "Designed and developed a complete e-commerce platform with dynamic product cards, category-wise browsing, discount product sections, and detailed product pages. Built core user flows including login, user profile, cart management, and checkout process. Implemented interactive UI components and optimized layouts for usability and responsiveness using HTML, CSS, and JavaScript.",
            tech: ["JavaScript", "HTML", "CSS"],
            live: "https://gramindukan.in",
            previewImage: "/ecommerce.png"
        },

        {
            title: "GJU Hisar Website & Admin Panel",
            description:
                "University website and admin portal developed using ASP.NET MVC and HTML/CSS with role-based access control.",
            tech: ["ASP.NET MVC", "JavaScript", "HTML", "CSS"],
            live: "https://gjust.ac.in",
            previewImage: "/gjust_website.png"
        },

        {
            title: "Memory Card Game",
            description:
                "Built an interactive Memory Card Game using HTML, CSS, and JavaScript with smooth card-flip animations and real-time score updates. The game includes two difficulty levels, where Level 1 contains 6 card pairs and Level 2 increases complexity with 8 card pairs. Designed responsive UI and implemented core game logic for matching, scoring, and progression.",
            tech: ["JavaScript", "HTML", "CSS"],
            github: "https://github.com/ManishKumar2002/Memory-Game",
            previewImage: "/memory-game.png"
        },

        {
            title: "Tic Tac Toe Game",
            description:
                "A classic Tic-Tac-Toe game built with React that includes advanced features like move history, winning square highlighting, and sortable move lists.",
            tech: ["React", "JavaScript", "HTML", "CSS"],
            github: "https://github.com/ManishKumar2002/Tic-Tac-Toe_Game",
            previewImage: "/tic-tac-toe.png"
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
                                {/* Larger, always-visible screenshots of the existing projects */}
                                <div className="w-full md:w-64 lg:w-72 shrink-0 aspect-video rounded-lg overflow-hidden border border-white/10 bg-slate-900/70 flex items-center justify-center">
                                    <img
                                        src={project.previewImage}
                                        alt={`${project.title} screenshot`}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                    />
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
