"use client";

import gsap from "gsap";
import NavLink from "./NavLink";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DownloadIcon } from "lucide-react";

const NavLinks = () => {
  const ulRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => {
        gsap.to(ulRef.current, {
          flexDirection: "column",
          gap: "24px",
        });
      },
      onLeaveBack: () => {
        gsap.to(ulRef.current, {
          flexDirection: "row",
          gap: "16px",
        });
      },
    });
  });
  return (
    <ul ref={ulRef} className="flex gap-4 items-center">
      <li className="relative ">
        <NavLink>Home</NavLink>
      </li>
      <li className="relative ">
        <NavLink>Sobre mim</NavLink>
      </li>
      <li className="relative ">
        <NavLink>Projetos</NavLink>
      </li>
      <li className="relative ">
        <NavLink>Habilidades</NavLink>
      </li>
      <li className="relative ">
        <NavLink>Contato</NavLink>
      </li>
      <li>
        <button className="relative border-2 border-purple-700 px-9 py-3 rounded-xl  overflow-hidden group cursor-pointer">
          <span className="scale-x-0 origin-left bg-purple-700 absolute inset-0 duration-500 transition-transform group-hover:scale-x-100 group-hover:z-10 flex items-center justify-center">
            <DownloadIcon />
          </span>
          <span className="relative">Curriculo</span>
        </button>
      </li>
    </ul>
  );
};

export default NavLinks;
