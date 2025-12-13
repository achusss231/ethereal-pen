import { useState, useRef, useEffect, memo } from "react";
import { motion } from "framer-motion";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  blurDataURL?: string;
  blend?: "bottom" | "radial" | "none";
  aspectRatio?: string;
}

export const LazyImage = memo(({ 
  src, 
  alt, 
  className = "", 
  containerClassName = "",
  priority = false,
  blurDataURL,
  blend = "none",
  aspectRatio
}: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      // Preload priority images immediately
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
      
      const img = new Image();
      img.src = src;
      img.onload = () => setIsLoaded(true);
      return () => {
        document.head.removeChild(link);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  const blendClass = blend === "bottom" 
    ? "blend-image" 
    : blend === "radial" 
    ? "blend-image-radial" 
    : "";

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton placeholder with blur effect */}
      <motion.div 
        className="lazy-skeleton absolute inset-0 rounded-inherit"
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        style={blurDataURL ? {
          backgroundImage: `url(${blurDataURL})`,
          backgroundSize: 'cover',
          filter: 'blur(20px)',
          transform: 'scale(1.1)'
        } : undefined}
      />
      
      {/* Soft gradient overlay for blending */}
      {blend !== "none" && (
        <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      )}
      
      {/* Actual image */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={isLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className={`${className} ${blendClass}`}
        />
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted rounded-inherit">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  );
});