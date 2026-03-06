/* eslint-disable @next/next/no-img-element */
import { useRef, useEffect, useState } from "react";
import Container from "./Container";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const orbitContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  const techs = [
    { name: "React", image: "/images/React.svg" },
    { name: "Javascript", image: "/images/JavaScript.svg" },
    { name: "Html", image: "/images/HTML5.svg" },
    { name: "Css", image: "/images/CSS3.svg" },
    { name: "Tailwind", image: "/images/TailwindCSS.svg" },
    { name: "Next", image: "/images/Next.svg" },
    { name: "Node", image: "/images/Node.svg" },
  ];

  // Detectar tamanho da tela
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint do Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      // Animação de entrada do título com ScrollTrigger
      gsap.from(titleRef.current, {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Se for mobile, animar grid
      if (isMobile && gridContainerRef.current) {
        const gridItems = gsap.utils.toArray<HTMLElement>(".tech-grid-item");

        // Animação do container do grid
        gsap.from(gridContainerRef.current, {
          scale: 0.9,
          opacity: 0,
          duration: 0.8,
          ease: "back.out",
          scrollTrigger: {
            trigger: gridContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // Animação individual de cada item do grid
        gridItems.forEach((item, index) => {
          gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.08,
            ease: "back.out",
            scrollTrigger: {
              trigger: gridContainerRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        });
      }

      // Se for desktop, animar órbita
      if (!isMobile && orbitRef.current) {
        const items = gsap.utils.toArray<HTMLElement>(".tech-item");
        const totalItems = items.length;
        const radius = 250;

        // 1. Posicionar os itens em círculo inicialmente
        items.forEach((item, index) => {
          const angle = (index / totalItems) * Math.PI * 2;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          gsap.set(item, {
            x: x,
            y: y,
            xPercent: -50,
            yPercent: -50,
          });
        });

        // 2. Animação de entrada do container da órbita com ScrollTrigger
        gsap.from(orbitContainerRef.current, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "back.out",
          scrollTrigger: {
            trigger: orbitContainerRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        // 3. Animar a rotação do container principal (Orbit)
        gsap.to(orbitRef.current, {
          rotation: 360,
          duration: 30,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: orbitContainerRef.current,
            start: "top 80%",
          },
        });

        // 4. Contra-rotacionar os ícones para que fiquem sempre "em pé"
        gsap.to(items, {
          rotation: -360,
          duration: 30,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: orbitContainerRef.current,
            start: "top 80%",
          },
        });

        // 5. Efeito de flutuação individual suave
        items.forEach((item, index) => {
          gsap.to(item, {
            y: "+=10",
            duration: 2 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.1,
          });
        });

        // 6. Animação individual de cada card tech ao entrar na viewport
        items.forEach((item, index) => {
          gsap.from(item, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.08,
            ease: "back.out",
            scrollTrigger: {
              trigger: orbitContainerRef.current,
              start: "top 80%",
            },
          });
        });
      }
    },
    { scope: containerRef, dependencies: [isMobile] },
  );

  return (
    <Container id="habilidades">
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-0"
      >
        <Title ref={titleRef} className="mb-12">
          Habilidades
        </Title>

        {/* LAYOUT MOBILE - GRID */}
        {isMobile && (
          <div
            ref={gridContainerRef}
            className="grid grid-cols-3 gap-4 w-full max-w-sm"
          >
            {techs.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="tech-grid-item flex flex-col items-center gap-2 cursor-pointer group"
              >
                {/* Card do Ícone */}
                <div className="w-20 h-20 flex items-center justify-center bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-xl group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500">
                  <img
                    className={`w-10 h-10 object-contain block transition-transform duration-500 group-hover:rotate-12 ${
                      tech.name === "Next" ? "invert" : ""
                    }`}
                    src={tech.image}
                    alt={`${tech.name} Logo`}
                  />
                </div>

                {/* Nome da Tech */}
                <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase text-center line-clamp-1">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* LAYOUT DESKTOP - ÓRBITA */}
        {!isMobile && (
          <div
            ref={orbitContainerRef}
            className="relative w-150 h-150 flex items-center justify-center"
          >
            {/* O Ponto Central Invisível onde a órbita gira */}
            <div
              ref={orbitRef}
              className="absolute top-1/2 left-1/2 w-0 h-0 z-10"
            >
              {techs.map((tech, index) => (
                <div
                  key={`${tech.name}-${index}`}
                  className="tech-item absolute flex flex-col items-center gap-3 cursor-pointer group"
                  style={{ width: "120px" }}
                >
                  {/* Card do Ícone Padronizado */}
                  <div className="w-24 h-24 flex items-center justify-center bg-zinc-900/90 border border-zinc-800 rounded-3xl shadow-2xl backdrop-blur-xl group-hover:border-purple-500/50 group-hover:scale-110 transition-all duration-500">
                    <img
                      className={`w-12 h-12 object-contain block transition-transform duration-500 group-hover:rotate-12 ${
                        tech.name === "Next" ? "invert" : ""
                      }`}
                      src={tech.image}
                      alt={`${tech.name} Logo`}
                    />
                  </div>

                  {/* Nome da Tech */}
                  <span className="text-xs font-bold text-zinc-500 group-hover:text-white transition-colors tracking-widest uppercase text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Brilho de fundo central suave */}
            <div className="absolute w-100 h-100 bg-purple-600/5 rounded-full blur-[120px] pointer-events-none" />
          </div>
        )}
      </div>
    </Container>
  );
};

export default Technologies;
