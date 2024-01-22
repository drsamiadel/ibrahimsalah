import Image from "next/image";

export default function SkillsSection() {
  const skills = [
    {
      name: "Adobe Premiere Pro",
      image: "/assets/pr.png",
    },
    {
      name: "Adobe After Effects",
      image: "/assets/ae.png",
    },
    {
      name: "Adobe Illustrator",
      image: "/assets/ai.png",
    },
    {
      name: "Adobe Photoshop",
      image: "/assets/ps.png",
    },
    {
      name: "Cinema 4D",
      image: "/assets/c4d.png",
    },
  ];
  return (
    <div id="skills" className="max-w-7xl mx-auto p-4 min-w-[300px] grid grid-cols-2 grid-flow-row pb-20 md:pb-32">
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-400">
          Skills
        </h2>
        <p className="text-base md:text-xl text-gray-100">
          I have experience with the following technologies:
        </p>
        <Image
          src="/assets/skills.svg"
          width={300}
          height={300}
          alt="Skills"
          className="mt-14 hidden md:block"
          style={{
            transform: "rotateY(180deg)",
          }}
        />
      </div>
      <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
        <div className="flex items-center justify-center gap-4 flex-wrap main-skills mt-8">
          {skills.map((skill) => (
            <Image
              src={skill.image}
              width={150}
              height={150}
              alt={skill.name}
              key={skill.name}
              className={`shadow-xl hover:scale-110 hover:shadow-2xl ${
                skill.name === "Cinema 4D" ? "rounded-full" : "rounded-3xl"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
