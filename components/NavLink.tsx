"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

type NavLinkProps = {
  children: React.ReactNode;
};

const NavLink = ({ children }: NavLinkProps) => {
  const underlineRef = useRef(null);
  const handleEnter = () => {
    gsap.to(underlineRef.current, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.in",
      overwrite: "auto",
    });
  };

  const handleLeave = () => {
    gsap.to(underlineRef.current, {
      scaleX: 0,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };
  return (
    <>
      <Link
        href={`#${children === "Sobre mim" ? "sobre-mim" : children?.toString().toLowerCase()}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        {children}
      </Link>
      <span
        ref={underlineRef}
        className="bg-purple-700 w-full h-0.5 absolute left-0 -bottom-px origin-left scale-x-0"
      ></span>
    </>
  );
};

export default NavLink;
