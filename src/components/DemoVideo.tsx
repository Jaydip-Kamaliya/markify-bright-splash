import { useState, useRef } from "react";
import demoVideo from "@/assets/markify-demo.mp4";
import { Card } from "@/components/ui/card";
import { Play, Pause } from "lucide-react";

const DemoVideo = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlayPause();
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progressPercent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progressPercent);
    }
  };

  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = (clickX / rect.width) * 100;
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage);
    }
  };

  const handleTimelineDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.buttons === 1 && videoRef.current && timelineRef.current) {
      const rect = timelineRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
      const newTime = (percentage / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
      setProgress(percentage);
    }
  };

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
          <Card 
            className="relative overflow-hidden transition-all duration-300 hover:shadow-glow group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-lg transition-all duration-300"
                preload="metadata"
                onClick={handleVideoClick}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Play/Pause Overlay Button */}
              <div 
                className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <button
                  onClick={togglePlayPause}
                  className="pointer-events-auto w-20 h-20 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-primary shadow-glow"
                  aria-label={isPlaying ? "Pause video" : "Play video"}
                >
                  {isPlaying ? (
                    <Pause className="w-10 h-10 text-primary-foreground" />
                  ) : (
                    <Play className="w-10 h-10 text-primary-foreground ml-1" />
                  )}
                </button>
              </div>

              {/* Custom Controls Overlay */}
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 transition-opacity duration-300 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlayPause}
                    className="text-white hover:text-primary transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>
                  <div 
                    ref={timelineRef}
                    className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden cursor-pointer hover:h-1.5 transition-all"
                    onClick={handleTimelineClick}
                    onMouseMove={handleTimelineDrag}
                  >
                    <div 
                      className="h-full bg-primary rounded-full transition-all duration-100" 
                      style={{ width: `${progress}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DemoVideo;
