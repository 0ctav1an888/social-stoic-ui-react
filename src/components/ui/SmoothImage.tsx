import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  blurHash?: boolean;
  sizes?: string;
  srcSet?: string;
  priority?: boolean; // For critical above-the-fold images
}

const SmoothImage: React.FC<SmoothImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = "aspect-video",
  blurHash = true,
  sizes,
  srcSet,
  priority = false,
  ...props
}) => {
  const { loading: _loading, ...restProps } = props;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setIsError(false);
  }, [src, srcSet]);

  return (
    <div className={cn("overflow-hidden relative", aspectRatio, className)}>
      {/* Blur placeholder */}
      {!isLoaded && blurHash && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : undefined}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...restProps}
      />
      
      {/* Error state */}
      {isError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span>Failed to load image</span>
        </div>
      )}
    </div>
  );
};

export default SmoothImage;
