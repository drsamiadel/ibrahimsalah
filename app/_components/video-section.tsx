import { Clapperboard } from "lucide-react";

export default function VideoSection() {
  return (
    <div
      id="projects"
      className="max-w-7xl mx-auto min-w-[300px] relative p-4 md:p-12 rounded-lg overflow-hidden"
    >
      <h2 className="text-3xl md:text-6xl font-bold text-violet-400 flex items-center gap-2">
        ShowReel
        <div className="w-full h-0.5 bg-slate-800">
        </div>
            <Clapperboard className="text-gray-50/20 rotate-12" size={80} />
      </h2>
      <video muted loop id="projects-video" autoPlay controls={true} className="mt-4 md:mt-10">
        <source src="/assets/projects_compressed.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
