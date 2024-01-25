"use client";

import { Menu, PenLine, X } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import MenuRoutes from "./menu-routes";

export default function MobileMenu() {
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    menuRef.current?.classList.remove("-right-full");
    menuRef.current?.classList.add("right-0");
  };

  const closeMenu = () => {
    menuRef.current?.classList.remove("right-0");
    menuRef.current?.classList.add("-right-full");
  };

  return (
    <>
      <button className="md:hidden" onClick={openMenu}>
        <Menu size={24} />
      </button>
      <div
        className="menu-mobile fixed -right-full top-0 bg-blue-950 h-full w-full flex items-center justify-center transition-all z-[9999] duration-300"
        ref={menuRef}
      >
        <button className="absolute right-0 top-0 p-4" onClick={closeMenu}>
          <X size={24} />
        </button>
        <MenuRoutes />
      </div>
    </>
  );
}
