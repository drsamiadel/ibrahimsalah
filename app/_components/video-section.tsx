export default function VideoSection() {
    return (
        <div className="w-full aspect-video relative p-4 md:p-12 rounded-lg overflow-hidden">
            <video muted loop id="projects-video" autoPlay>
                <source src="/assets/projects_compressed.mp4" type="video/mp4" />
            </video>
        </div>
    )
}