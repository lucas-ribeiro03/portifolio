import React, { useRef } from "react";
import Container from "./Container";
import Title from "./Title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  useGSAP(() => {
    gsap.from(["title", paragraphRef.current], {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: paragraphRef.current,
        start: "top 80%",
      },
    });
  }, []);
  return (
    <Container id="sobre-mim">
      <div className="flex flex-col gap-4 text-center w-full h-screen items-center justify-center">
        <Title ref={titleRef} className="title">
          Sobre mim
        </Title>
        <p
          ref={paragraphRef}
          className="paragraph text-lg lg:text-xl text-center lg:text-left lg:px-25"
        >
          Com 21 anos e cursando o 5º período de Ciências da Computação na
          UniCarioca, sou um desenvolvedor determinado e apaixonado por resolver
          problemas. Sou fluente inglês formado pelo CNA. Minhas habilidades
          incluem React, JavaScript, Next.js, Tailwind CSS, HTML e CSS,
          complementadas por uma forte capacidade de comunicação interpessoal.
          Busco oportunidades para aplicar meu conhecimento e crescer
          contribuindo para minha equipe profissionalmente em ambientes
          dinâmicos.
        </p>
      </div>
    </Container>
  );
};

export default About;
