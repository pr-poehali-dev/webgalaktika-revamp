import { useEffect, useRef } from 'react';

export const InteractiveParticles = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
    }[] = [];

    let mouseX = 0;
    let mouseY = 0;

    const colors = ['#00FF41', '#00CC33', '#39FF14'];
    let lastMouseMove = 0;
    const throttleDelay = 16;

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastMouseMove < throttleDelay) return;
      lastMouseMove = now;

      mouseX = e.clientX;
      mouseY = e.clientY;

      for (let i = 0; i < 2; i++) {
        particles.push({
          x: mouseX,
          y: mouseY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      if (particles.length > 60) {
        particles.splice(0, particles.length - 60);
      }
    };

    let animationId: number;
    let lastTime = 0;
    const fps = 30;
    const frameInterval = 1000 / fps;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
      
      if (deltaTime >= frameInterval) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
          const particle = particles[i];
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.size *= 0.96;

          if (particle.size < 0.5) {
            particles.splice(i, 1);
            continue;
          }

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = 0.5;
          ctx.fill();
          ctx.globalAlpha = 1;
        }

        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate(0);

    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
    />
  );
};