import demoVideo from "@/assets/markify-demo.mp4";

const DemoVideo = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            See Markify in Action
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch how easy it is to add watermarks to your images
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto animate-fade-in">
          <video
            className="w-full h-auto rounded-lg border-4 border-primary shadow-elegant"
            controls
            preload="metadata"
          >
            <source src={demoVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
