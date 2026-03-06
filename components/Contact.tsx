import { SendHorizonalIcon } from "lucide-react";
import Container from "./Container";
import Input from "./Input";
import TextArea from "./TextArea";
import contact from "../data/contact-email.json";
import Lottie from "lottie-react";
import Title from "./Title";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animação do formulário: entra pela esquerda com fade-in
      gsap.from(formRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animação da animação Lottie: entra pela direita com fade-in
      // No mobile, entra de cima para baixo
      gsap.from(lottieRef.current, {
        x: 100,
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // Animação dos campos do formulário com stagger
      const inputs = gsap.utils.toArray<HTMLElement>(".contact-input");
      inputs.forEach((input, index) => {
        gsap.from(input, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Animação do botão com um efeito de "pulse" suave ao entrar
      const button = gsap.utils.toArray<HTMLElement>(".contact-button")[0];
      if (button) {
        gsap.from(button, {
          scale: 0.9,
          opacity: 0,
          duration: 0.7,
          delay: 0.4,
          ease: "back.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    },
    { scope: containerRef },
  );

  return (
    <Container id="contato">
      <div ref={containerRef} className="w-full px-4 sm:px-6 md:px-0">
        <Title className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12">
          Entre em contato
        </Title>
        <div className="flex flex-col md:flex-row justify-around w-full items-center gap-8 md:gap-12">
          <form
            ref={formRef}
            action=""
            className="w-full md:w-1/2 flex gap-4 flex-col"
          >
            <div className="contact-input">
              <Input
                id="name"
                labelText="Seu nome"
                type="text"
                placeholder="Insira seu nome"
              />
            </div>
            <div className="contact-input">
              <Input
                id="email"
                labelText="Seu email"
                type="email"
                placeholder="Insira seu email"
              />
            </div>
            <div className="contact-input">
              <TextArea
                id="message"
                placeholder="Insira sua mensagem"
                labelText="Sua mensagem"
              ></TextArea>
            </div>

            <button className="contact-button bg-purple-700 px-8 sm:px-12 py-2 sm:py-3 transition duration-300 cursor-pointer rounded-xl hover:scale-105 hover:bg-purple-800 flex gap-2 sm:gap-3 text-center justify-center items-center text-sm sm:text-base">
              Enviar mensagem
              <SendHorizonalIcon size={18} />
            </button>
          </form>
          <div
            ref={lottieRef}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <Lottie
              className="w-64 sm:w-80 md:w-96 lg:w-xl"
              animationData={contact}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
