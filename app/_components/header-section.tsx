import { PenLine } from "lucide-react";
import Link from "next/link";
import MobileMenu from "./mobile-menu";
import MenuRoutes from "./menu-routes";

export default function HeaderSection() {
  return (
    <header className="max-w-7xl min-w-[300px] mx-auto flex items-center justify-between px-4 py-4">
      <div>
        <Link href="/" className="text-3xl text-red-500">
          Ibrahim Salah
        </Link>
      </div>
      <div className="hidden md:flex">
        <MenuRoutes />
      </div>
      <MobileMenu />
    </header>
  );
}
