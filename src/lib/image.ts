/**
 * Generates a srcSet string for responsive images
 * @param src Base image URL
 * @param widths Array of widths to generate srcSet for
 * @returns srcSet string
 */
export const generateSrcSet = (src: string, widths: number[] = [320, 640, 768, 1024, 1280, 1536]): string => {
  const isExternal = src.startsWith('http') || src.startsWith('//');
  const cdnHosts = new Set(['socialstoic-assets-cdn.s3.eu-west-2.amazonaws.com']);
  const url = new URL(src, window.location.origin);

  if (isExternal && !cdnHosts.has(url.hostname)) {
    return src;
  }

  // For local images, generate srcSet
  return widths
    .map(width => {
      // Add width parameter to the URL
      const sizedUrl = new URL(url.toString());
      sizedUrl.searchParams.set('w', width.toString());
      return `${sizedUrl.toString()} ${width}w`;
    })
    .join(', ');
};

/**
 * Generates a sizes attribute string for responsive images
 * @param sizes Array of size configurations
 * @returns sizes string
 */
export const generateSizes = (sizes: { minWidth?: number; size: string }[] = []): string => {
  if (sizes.length === 0) {
    // Default responsive sizes
    return '(min-width: 1536px) 1536px, (min-width: 1280px) 1280px, (min-width: 1024px) 1024px, (min-width: 768px) 768px, (min-width: 640px) 640px, 100vw';
  }

  return sizes
    .map(({ minWidth, size }) => (minWidth ? `(min-width: ${minWidth}px) ${size}` : size))
    .join(', ');
};
