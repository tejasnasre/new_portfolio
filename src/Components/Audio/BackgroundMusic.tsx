import React, { useState, useEffect, useRef } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

interface BackgroundMusicProps {
  audioSrc: string;
  autoplay?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioSrc,
  autoplay = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [firstInteractionComplete, setFirstInteractionComplete] =
    useState(false);

  useEffect(() => {
    // Create audio element directly in the DOM for better control
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.volume = 0.3;
    audio.id = "background-music";

    audioRef.current = audio;

    // Clean up on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  // Handle autoplay with user interaction requirement
  useEffect(() => {
    // Only add event listeners if first interaction hasn't happened yet
    if (firstInteractionComplete) return;

    const handleFirstInteraction = (e: MouseEvent | TouchEvent) => {
      // Ignore clicks on the play/pause button - those are handled separately
      const target = e.target as HTMLElement;
      if (target && target.closest('button[aria-label*="background music"]')) {
        return;
      }

      if (autoplay && audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setFirstInteractionComplete(true);

            // Remove event listeners after first successful interaction
            document.removeEventListener("click", handleFirstInteraction);
            document.removeEventListener("touchstart", handleFirstInteraction);
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    };

    document.addEventListener("click", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [autoplay, isPlaying, firstInteractionComplete]);

  // Add event listener to handle page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (audioRef.current) {
        if (document.hidden) {
          // When page is not visible, pause audio but keep state
          if (isPlaying) {
            audioRef.current.pause();
          }
        } else {
          // When page becomes visible again, resume if it was playing before
          if (isPlaying) {
            audioRef.current
              .play()
              .catch((error) =>
                console.error("Failed to resume audio:", error)
              );
          }
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isPlaying]);

  // Simpler toggle play/pause function that prevents event bubbling
  const togglePlayPause = (e: React.MouseEvent) => {
    // Stop event propagation to prevent triggering the document click handler
    e.stopPropagation();

    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      // Currently playing, need to pause
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      // Currently paused, need to play

      setFirstInteractionComplete(true); // Mark first interaction as complete

      try {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Failed to play audio:", error);
            setIsPlaying(false);
          });
      } catch (error) {
        console.error("Error in play() method:", error);
        setIsPlaying(false);
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <div className="relative">
        {/* Audio Control Button */}
        <button
          onClick={togglePlayPause}
          className="w-12 h-12 bg-black text-white border-2 border-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors"
          aria-label={
            isPlaying ? "Pause background music" : "Play background music"
          }
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* Status indicator */}
        <motion.div
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full ${
            isPlaying ? "bg-green-500" : "bg-red-500"
          } border border-black`}
          animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
          transition={{ repeat: isPlaying ? Infinity : 0, duration: 2 }}
        />
      </div>
    </motion.div>
  );
};

export default BackgroundMusic;
