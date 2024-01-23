import { Clapperboard, PenToolIcon, Pentagon, Video } from "lucide-react";
import Image from "next/image";

export default function HeroSetion() {
  return (
    <div id="about" className="max-w-7xl min-w-[300px] mx-auto px-4 flex flex-col gap-4 md:gap-8 justify-center items-center relative">
      <Video className="absolute top-1/4 -mt-10 left-10 z-[-1] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-15 -rotate-12" />
      <Clapperboard className="absolute mt-10 top-1/4 right-20 z-[-1] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-15 rotate-12" />
      <PenToolIcon className="absolute bottom-1/4 -mb-10 right-10 z-[-1] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-15 rotate-12" />
      <Pentagon className="absolute bottom-1/4 mb-10 left-32 z-[-1] w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 opacity-15 -rotate-12" />
      <div className="personal-image mt-8 md:mt-20 rounded-md shadow-xl bounce-top">
        <Image
          src="/assets/personal-image.png"
          width={500}
          height={500}
          alt="Ibrahim Salah"
        />
      </div>
      <h1 id="hireme" className="blink-1 text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Hi, I&apos;m Ibrahim Salah
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-yellow-200 blink-1">
        # Motion Graphics Animator
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl text-center">
        I&apos;m a motion graphics animator with 3 years of experience in the
        field. I work with After Effects, Illustrator, and Photoshop. I also
        have experience in video editing and 3D animation.
      </p>
      <a
        href="https://drive.google.com/file/d/1Barq_EwXw8inayfzut2piEvLukozJzVU/view?usp=sharing"
        target="_blank"
        className="heartbeat bg-violet-400/0 border border-white/20 hover:bg-violet-300 text-white font-bold py-4 px-8 rounded-full transition-all"
      >
        view CV
      </a>
    </div>
  );
}
