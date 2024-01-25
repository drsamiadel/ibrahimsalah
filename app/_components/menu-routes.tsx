"use client";

import { PenLine } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function MenuRoutes() {
  useEffect(() => {
    const MenuMobile = document.querySelector(".menu-mobile");
    const mobileLinks = document.querySelectorAll(".menu-mobile a");

    const handleScroll = () => {
      MenuMobile?.classList.remove("right-0");
      MenuMobile?.classList.add("-right-full");
    };

    mobileLinks.forEach((link) => {
      link.addEventListener("click", handleScroll);
    });
  }, []);

  return (
    <ul className="flex flex-col gap-6 md:flex-row">
      <li className="text-center">
        <Link href="#">Home</Link>
      </li>
      <li className="text-center">
        <Link href="#about">About</Link>
      </li>
      <li className="text-center">
        <Link href="#skills">Skills</Link>
      </li>
      <li className="text-center">
        <Link href="#projects">Projects</Link>
      </li>
      <li className="text-center">
        <Link
          href="#hireme"
          className="border border-white/20 text-violet-500/60 px-3 py-2 rounded-md hover:bg-violet-800 transition-colors"
        >
          <PenLine className="inline-block mr-2" size={24} />
          Hire Me
        </Link>
      </li>
    </ul>
  );
}
