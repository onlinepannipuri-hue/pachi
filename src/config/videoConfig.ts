import { getCloudinaryUrl } from './cloudinary';

/**
 * Central Mapping of Videos to Cloudinary Public IDs.
 * 
 * ⚠️ Important: Cloudinary often strips emojis or special characters from the public_id.
 * If a video doesn't show up, check your Cloudinary Media Library and copy the [Public ID].
 * 
 * Example: `video_case_study_1`
 */

const videoIds = {
  // Filename: InShot_20260319_132728086.mp4
  inshot_main: 'pachi_hero',
  
  // Filename: Keep showing up...
  motivation_video: 'pachi_motivation',
  
  // Filename: POV- Dad & Son...
  family_pov: 'pachi_family_pov',
  
  // Filename: Premium Ring...
  jewelry_showcase: 'pachi_jewelry',
  
  // Filename: Style ku compromise...
  fashion_style: 'pachi_fashion',
  
  // Filename: When “Sorry” isn’t enough...
  saree_story: 'pachi_saree_story',
  
  // Filename: _Madura_Veeran_Food_Review...
  food_review_1: 'pachi_food_review',
  food_review_2: 'pachi_food_review',
  
  // Filename: Festive...
  festive_season: 'pachi_festive',
  
  // New: Punugu
  karma_video: 'pachi_karma_video'
};

// Map segments for easy use in sections
export const ALL_VIDEOS = Object.values(videoIds).map(id => getCloudinaryUrl(id));

export const HERO_VIDEO = getCloudinaryUrl(videoIds.inshot_main);

export const ABOUT_VIDEOS = [
  getCloudinaryUrl(videoIds.festive_season),
  getCloudinaryUrl(videoIds.saree_story),
  getCloudinaryUrl(videoIds.fashion_style),
  getCloudinaryUrl(videoIds.jewelry_showcase),
  getCloudinaryUrl(videoIds.motivation_video)
];

export const WORKFLOW_VIDEOS = {
  client: getCloudinaryUrl(videoIds.family_pov),
  script: getCloudinaryUrl(videoIds.food_review_1),
  shoot: getCloudinaryUrl(videoIds.food_review_2),
  edit: getCloudinaryUrl(videoIds.inshot_main),
};

export const CINEMATOGRAPHY_MEDIA = [
  getCloudinaryUrl(videoIds.jewelry_showcase),
  getCloudinaryUrl(videoIds.fashion_style),
  getCloudinaryUrl(videoIds.saree_story),
  getCloudinaryUrl(videoIds.festive_season),
];

export const BTS_VIDEO = getCloudinaryUrl(videoIds.food_review_2);

export const PERSONAL_CHANNEL_LATEST = getCloudinaryUrl(videoIds.motivation_video);
