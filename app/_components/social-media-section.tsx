import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function SocialMediaSection() {
  return (
    <div id="contact" className="flex flex-col items-center justify-center my-12 md:my-24">
      <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
        <a
          href="https://www.facebook.com/ibrahimsalah01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-blue-700 rounded-full py-2 px-3 transition-all"
        >
          <Facebook className="w-6 h-6" />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/ibrahiim_salah21?igsh=MzRlODBiNWFlZA=="
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-rose-800 rounded-full py-2 px-3 transition-all"
        >
          <Instagram className="w-6 h-6" />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ibrahim-salah-195b7b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-blue-600 rounded-full py-2 px-3 transition-all"
        >
          <Linkedin className="w-6 h-6" />
          <span>Linkedin</span>
        </a>
        <a
          href="https://www.behance.net/ibrahimsalah21"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-blue-800 rounded-full py-2 px-3 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
          </svg>
          <span>Behance</span>
        </a>
        <a
          href="https://wa.me/+201006324860"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-green-800 rounded-full py-2 px-3 transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp</span>
        </a>
        <a
          href="https://twitter.com/Hiimaalaya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center space-x-2 bg-white/10 hover:bg-blue-600 rounded-full py-2 px-3 transition-all"
        >
          <Twitter className="w-6 h-6" />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  );
}
