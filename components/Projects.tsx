"use client";
import { projects } from "@/data/projects";
import Container from "./Container";
import ProjectCard from "./ProjectCard";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      // Animação dos cards individuais
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((card, index) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.7,
          delay: index * 0.15,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <Container id="projetos">
      <div ref={sectionRef}>
        <h1
          ref={titleRef}
          className="text-3xl sm:text-4xl text-purple-700 font-bold text-center mb-8 sm:mb-10"
        >
          Projetos
        </h1>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full px-8"
        >
          {projects.map((project) => (
            <ProjectCard
              githubLink={project.url}
              projectDesc={project.descriptiton}
              projectName={project.name}
              projectPrint={project.coverImage}
              techsUsed={project.techsUsed}
              key={project.name}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Projects;
