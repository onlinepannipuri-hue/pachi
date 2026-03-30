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
  inshot_main: 'InShot_20260319_132728086_aljonm',
  
  // Filename: Keep showing up...
  motivation_video: 'Keep_showing_up.The_right_eyes_are_watching_silently._gxt1ck',
  
  // Filename: POV- Dad & Son...
  family_pov: 'POV-_Dad_Son_Moments_at_MamaDada_He_thought_he_was_teaching_his_son_to_play_but_really_he_nmckfb',
  
  // Filename: Premium Ring...
  jewelry_showcase: 'Premium_Ring_வாங்கணும்_ஆனா_pocket_safe_ஆகணுமா_அப்படின்ன்னா_நம்ம_SBJ_Rings_Collection_தான்_சரிய_gmbd6o',
  
  // Filename: Style ku compromise...
  fashion_style: 'Style_ku_compromise_இல்ல_பாரம்பரியம்_Trendy_look_ஒரே_design_la_Traditional_touch_இருக்கணும்_uire6b',
  
  // Filename: When “Sorry” isn’t enough...
  saree_story: 'When_Sorry_isn_t_enough_he_lets_the_saree_speak.This_saree_beautifully_captures_the_essence_o_pjj4vk',
  
  // Filename: _Madura_Veeran_Food_Review...
  food_review_1: '_Madura_Veeran_Food_Review_Must-Try_Spot_Near_Sravana_Stores_720P_1_f9i2ro',
  food_review_2: '_Madura_Veeran_Food_Review_Must-Try_Spot_Near_Sravana_Stores_720P_1_f9i2ro',
  
  // Filename: Festive...
  festive_season: '️_Don_t_forget_your_special_days_-_Steal_the_spotlight_this_festive_season_Drape_yourself_sfx085',
  
  // New: Punugu
  karma_video: 'Debt_struggles_karma_blocks_Can_Punugu_change_it_Yes_Punugu_is_believed_to_clear_karma_bl_xon10f'
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
