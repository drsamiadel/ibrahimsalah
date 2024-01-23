import Image from "next/image";

export default function HeroSetion() {
  return (
    <div id="about" className="max-w-7xl min-w-[300px] mx-auto px-4 flex flex-col gap-4 md:gap-8 justify-center items-center">
      <div className="personal-image mt-8 md:mt-20 rounded-md shadow-xl">
        <Image
          src="/assets/personal-image.png"
          width={500}
          height={500}
          alt="Ibrahim Salah"
        />
      </div>
      <h1 id="hireme" className="text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Hi, I&apos;m Ibrahim Salah
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center text-yellow-200">
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
        className="bg-violet-400/0 border border-white/20 hover:bg-violet-300 text-white font-bold py-4 px-8 rounded-full transition-all"
      >
        view CV
      </a>
    </div>
  );
}
