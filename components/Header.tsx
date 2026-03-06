/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import GitIcon from "./GitIcon";
import LinkedinIcon from "./LinkedinIcon";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const shadowRef = useRef(null);

  useGSAP(() => {
    gsap.from(".left-side", {
      x: -300,
      duration: 0.8,
    });

    gsap.from(".right-side", {
      scale: 0,
      duration: 0.8,
    });

    gsap.to(shadowRef.current, {
      keyframes: [
        { x: 30, y: -12 },
        { x: -22, y: 15 },
        { x: 11, y: -5 },
        { x: -10, y: 16 },
        { x: 12, y: 0 },
        { x: -20, y: -19 },
        { x: 12, y: 15 },
        { x: 0, y: -10 },
      ],
      duration: 10,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row w-full gap-12 lg:gap-80 justify-center items-center min-h-screen px-6 *:z-10 overflow-hidden text-center lg:text-left"
    >
      <aside className="left-side flex flex-col items-center lg:items-start">
        <p className="text-lg lg:text-3xl">
          Olá, eu sou o <br />
          <span className="text-4xl lg:text-6xl text-purple-700 font-bold">
            Lucas Ribeiro
          </span>
        </p>

        <p className="text-lg lg:text-3xl mt-2">
          Desenvolvedor FullStack <br />
          Apaixonado por{" "}
          <TypeAnimation
            sequence={[
              "Tecnologia",
              1000,
              "Aprendizado",
              1000,
              "Evolução",
              1000,
            ]}
            repeat={Infinity}
          />
        </p>

        <div className="flex gap-4 mt-8">
          <Link
            href={"https://github.com/lucas-ribeiro03"}
            className="bg-zinc-900/70 p-3 lg:p-4 rounded-xl hover:bg-zinc-900 duration-300 transition hover:scale-110 group border-2 border-purple-500"
          >
            <GitIcon className="w-8 lg:w-10 invert group-hover:fill-purple-700 group-hover:invert-0 transition duration-300" />
          </Link>

          <Link
            href={"https://www.linkedin.com/in/lucasribeirodevfrontend/"}
            className="bg-zinc-900/70 p-3 lg:p-4 rounded-xl hover:bg-zinc-900 duration-300 transition hover:scale-110 group border-2 border-purple-500"
          >
            <LinkedinIcon className="w-8 lg:w-10 invert group-hover:fill-purple-700 group-hover:invert-0 transition duration-300" />
          </Link>
        </div>
      </aside>

      <div className="right-side relative flex justify-center items-center">
        <span
          ref={shadowRef}
          className="bg-purple-700 blur-[70px] lg:blur-[90px] w-64 h-64 lg:w-95 lg:h-95 rounded-full absolute top-5 left-5 -z-10"
        ></span>

        <img
          src="/images/me.jpeg"
          className="w-56 h-56 lg:w-100 lg:h-100 rounded-full z-50 object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
