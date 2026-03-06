import gsap from "gsap";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { useGSAP } from "@gsap/react";
import _ScrollTrigger, { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  gsap.registerPlugin(ScrollTrigger);

  const navRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      start: "top -80",
      onEnter: () => {
        gsap.to(navRef.current, {
          flexDirection: "column",
          margin: "20px",
          width: "fit-content",
          height: "100%",
          borderRadius: "10px",
          justifyContent: "space-around",
          duration: 0.6,
          ease: "power3.out",
          backdropFilter: "blur(10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          background: "transparent",
          borderRadius: "0",
          flexDirection: "row",
          width: "100%",
          height: "auto",
          margin: 0,
          justifyContent: "space-between",
          duration: 0.6,
          ease: "power3.out",
          backdropFilter: "blur(0)",
          boxShadow: "0 0 0 rgba(0,0,0,0.4)",
        });
      },
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={`flex justify-between px-12 py-4  lg:fixed lg:top-0 lg:left-0 items-center w-full z-10`}
    >
      <Logo />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
