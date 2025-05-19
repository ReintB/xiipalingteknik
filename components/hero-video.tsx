import MotionWrapper from "@/components/motion-wrapper";

export default function HeroVideo() {
  return (
    <section
      className="w-full py-12 md:py-12 lg:py-12 bg-muted"
      id="hero-video"
    >
      <div className="container px-4 md:px-6">
        <MotionWrapper animation="fadeInUp" delay={0.5}>
          <div className="max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-lg bg-muted">
            <iframe
              src="https://www.youtube.com/embed/qDfvuScxK8Q"
              title="Video Kenangan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              rel="0"
            />
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}