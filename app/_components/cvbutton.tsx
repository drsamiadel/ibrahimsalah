import { ExternalLink } from "lucide-react";

export default function CVButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1Di7NIs28ARWgNVVVRk0Xe5063--XFGhx/view?usp=drive_link"
      target="_blank"
      className="heartbeat bg-violet-400/0 border border-white/20 hover:bg-violet-300 text-white font-bold py-4 px-14 rounded-full transition-all flex items-center gap-x-2 justify-center"
    >
      <ExternalLink className="-mt-1" size={18} />
      CV
    </a>
  );
}
