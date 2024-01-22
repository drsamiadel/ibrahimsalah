import { PenLine } from "lucide-react";
import Link from "next/link";

export default function MenuRoutes() {
  return (
    <ul className="flex flex-col gap-6 md:flex-row">
      <li className="text-center">
        <Link href="/">Home</Link>
      </li>
      <li className="text-center">
        <Link href="/">About</Link>
      </li>
      <li className="text-center">
        <Link href="/">Skills</Link>
      </li>
      <li className="text-center">
        <Link href="/">Projects</Link>
      </li>
      <li className="text-center">
        <Link
          href="/"
          className="border border-red-500/60 px-3 py-2 rounded-md hover:bg-red-500 transition-colors"
        >
          <PenLine className="inline-block mr-2" size={24} />
          Hire Me
        </Link>
      </li>
    </ul>
  );
}