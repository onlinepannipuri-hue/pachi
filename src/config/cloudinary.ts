/**
 * Cloudinary Configuration for Pachi Portfolio
 */
export const CLOUDINARY_CLOUD_NAME = 'dgkgtkfmk';

/**
 * Generate an optimized Cloudinary video URL based on publicId.
 * Includes automatic quality (q_auto) and automatic format (f_auto) for best performance.
 */
export const getCloudinaryUrl = (publicId: string): string => {
  if (!publicId) return '';
  // Check if it's already a full URL
  if (publicId.startsWith('http')) return publicId;
  
  const baseUrl = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload`;
  const transformations = 'q_auto,f_auto';
  
  return `${baseUrl}/${transformations}/${publicId}`;
};
