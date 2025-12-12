import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
}

export const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  priority = false 
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${containerClassName}`}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="lazy-skeleton absolute inset-0 rounded-inherit" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0, y: 8, scale: 0.995 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 8, scale: 0.995 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className={className}
        />
      )}
    </div>
  );
};