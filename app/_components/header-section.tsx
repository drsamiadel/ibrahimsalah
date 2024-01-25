"use client";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import MenuRoutes from "./menu-routes";
import { useEffect, useRef } from "react";

export default function HeaderSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header.classList.remove("border-gray-800/0");
        header.classList.add("border-gray-800");
        header.classList.remove("shadow-none");
        header.classList.add("shadow-lg");
      } else {
        header.classList.remove("border-gray-800");
        header.classList.add("border-gray-800/0");
        header.classList.remove("shadow-lg");
        header.classList.add("shadow-none");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-[200] bg-custom border-b border-gray-800/0 shadow-none"
    >
      <header className="max-w-7xl min-w-[300px] mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <Link href="/" className="text-3xl text-violet-400">
            Ibrahim Salah
          </Link>
        </div>
        <div className="hidden md:flex">
          <MenuRoutes />
        </div>
        <MobileMenu />
      </header>
    </div>
  );
}
