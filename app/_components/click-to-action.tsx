export default function ClickToAction() {
  return (
    <div id="hire" className="p-4 max-w-7xl min-w-[300px] mx-auto my-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <h2 className="text-3xl md:text-4xl font-bold text-violet-400">
          Want to know more?
        </h2>
        <a
          href="https://drive.google.com/file/d/1oubsY2vDltFEFbJNSSWIctc7h6me3YER/view?usp=drive_link"
          target="_blank"
          className="bg-violet-400 hover:bg-violet-300 text-white font-bold py-2 px-4 rounded-full"
        >
          view CV
        </a>
      </div>
    </div>
  );
}
