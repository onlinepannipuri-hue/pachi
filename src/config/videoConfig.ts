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
  inshot_main: 'InShot_20260319_132728086',
  
  // Filename: Keep showing up.The right eyes are watching silently..mp4
  motivation_video: 'Keep_showing_up_The_right_eyes_are_watching_silently',
  
  // Filename: POV- Dad & Son Moments at MamaDada...
  family_pov: 'POV-_Dad___Son_Moments_at_MamaDada',
  
  // Filename: Premium Ring வாங்கணும்...
  jewelry_showcase: 'Premium_Ring_jewelry_showcase', // User may need to update this
  
  // Filename: Style ku compromise இல்ல...
  fashion_style: 'Style_ku_compromise_traditional', // User may need to update this
  
  // Filename: When “Sorry” isn’t enough...
  saree_story: 'When_Sorry_isnt_enough',
  
  // Filename: _Madura_Veeran_Food_Review...
  food_review_1: '_Madura_Veeran_Food_Review_Must-Try_Spot_Near_Sravana_Stores_720P_1',
  food_review_2: '_Madura_Veeran_Food_Review_Must-Try_Spot_Near_Sravana_Stores_720P',
  
  // Filename: ✨️ Don’t forget your special days!...
  festive_season: 'Don_t_forget_your_special_days',
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
