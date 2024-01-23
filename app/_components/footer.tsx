import Image from "next/image";

export default function Footer() {
  return (
    <div className="h-[44rem] relative footer-section flex flex-col gap-8 items-center justify-center md:justify-end pb-10">
      <h2
        className="text-3xl md:text-6xl font-bold text-white flex items-center gap-2"
        style={{ textShadow: "0 0 10px rgba(0,0,0,0.7)" }}
      >
        Want to know more?
      </h2>
      <a
        href="https://drive.google.com/file/d/1Barq_EwXw8inayfzut2piEvLukozJzVU/view?usp=sharing"
        target="_blank"
        className="bg-violet-400/20 hover:bg-violet-300 text-white font-bold py-4 px-8 rounded-full transition-all"
        >
        view CV
        </a>
        <span className="text-white text-sm mt-4" style={{ textShadow: "0 0 5px rgba(0,0,0,0.8)" }}>
            © {new Date().getFullYear()} - Made with ❤️ by <a href="https://www.samiadel.me" target="_blank" className="underline">Sami Adel</a>
        </span>
    </div>
  );
}
