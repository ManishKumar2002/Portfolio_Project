import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId;
        let stars = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        // ===== CONSTELLATION STAR =====
        class ConstellationStar {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 1;
                this.brightness = Math.random() * 0.5 + 0.5;
                this.connections = [];
                this.floatOffset = Math.random() * Math.PI * 2;
            }

            update() {
                // very subtle floating
                this.floatOffset += 0.01;
                this.y += Math.sin(this.floatOffset) * 0.05;
            }

            draw() {
                // draw connections
                this.connections.forEach(other => {
                    const dx = other.x - this.x;
                    const dy = other.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200) {
                        const opacity = (1 - dist / 200) * 0.3;
                        ctx.strokeStyle = `rgba(120, 200, 255, ${opacity})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(other.x, other.y);
                        ctx.stroke();
                    }
                });

                // draw star
                const gradient = ctx.createRadialGradient(
                    this.x, this.y, 0,
                    this.x, this.y, this.size * 2
                );

                gradient.addColorStop(0, `rgba(255,255,255,${this.brightness})`);
                gradient.addColorStop(0.5, `rgba(160,200,255,${this.brightness * 0.6})`);
                gradient.addColorStop(1, "rgba(255,255,255,0)");

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // ===== INIT CONSTELLATION =====
        const initConstellation = () => {
            stars = [];

            const STAR_COUNT = 80;

            for (let i = 0; i < STAR_COUNT; i++) {
                stars.push(new ConstellationStar());
            }

            // connect nearby stars (max 3 links each)
            stars.forEach((star, i) => {
                for (let j = i + 1; j < stars.length; j++) {
                    const other = stars[j];
                    const dx = star.x - other.x;
                    const dy = star.y - other.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200 && star.connections.length < 3) {
                        star.connections.push(other);
                    }
                }
            });
        };

        initConstellation();

        // ===== ANIMATION LOOP =====
        const animate = () => {
            ctx.fillStyle = "rgba(5, 10, 25, 0.15)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            resizeCanvas();
            initConstellation();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{
                background: "radial-gradient(ellipse at bottom, #0d1117 0%, #010409 100%)"
            }}
        />
    );
}
