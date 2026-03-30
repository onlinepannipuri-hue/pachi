const https = require('https');
const crypto = require('crypto');

const cloud_name = 'dgkgtkfmk';
const api_key = '876998235178973';
const api_secret = 'leWymk955oc0as0hUTElNdrq4aE';

const renameMapping = [
  {
    from: 'Premium_Ring_வாங்கணும்_ஆனா_pocket_safe_ஆகணுமா_அப்படின்ன்னா_நம்ம_SBJ_Rings_Collection_தான்_சரிய_gmbd6o',
    to: 'pachi_jewelry'
  },
  {
    from: 'Style_ku_compromise_இல்ல_பாரம்பரியம்_Trendy_look_ஒரே_design_la_Traditional_touch_இருக்கணும்_uire6b',
    to: 'pachi_fashion'
  },
  {
    from: 'When_Sorry_isn_t_enough_he_lets_the_saree_speak.This_saree_beautifully_captures_the_essence_o_pjj4vk',
    to: 'pachi_saree_story'
  },
  {
    from: '️_Don_t_forget_your_special_days_-_Steal_the_spotlight_this_festive_season_Drape_yourself_sfx085',
    to: 'pachi_festive'
  },
  {
    from: 'InShot_20260319_132728086_aljonm',
    to: 'pachi_hero'
  },
  {
    from: 'Keep_showing_up.The_right_eyes_are_watching_silently._gxt1ck',
    to: 'pachi_motivation'
  },
  {
    from: 'POV-_Dad_Son_Moments_at_MamaDada_He_thought_he_was_teaching_his_son_to_play_but_really_he_nmckfb',
    to: 'pachi_family_pov'
  },
  {
    from: '_Madura_Veeran_Food_Review_Must-Try_Spot_Near_Sravana_Stores_720P_1_f9i2ro',
    to: 'pachi_food_review'
  },
  {
    from: 'Debt_struggles_karma_blocks_Can_Punugu_change_it_Yes_Punugu_is_believed_to_clear_karma_bl_xon10f',
    to: 'pachi_karma_video'
  }
];

async function renameResource(from, to) {
  // Compensating for 2 hour system clock mismatch (Server is 2hrs ahead of current system GMT)
  const timestamp = Math.round((new Date()).getTime() / 1000) + 7200;
  
  const params = `from_public_id=${from}&timestamp=${timestamp}&to_public_id=${to}${api_secret}`;
  const signature = crypto.createHash('sha1').update(params).digest('hex');

  const postData = `from_public_id=${encodeURIComponent(from)}&to_public_id=${encodeURIComponent(to)}&resource_type=video&timestamp=${timestamp}&api_key=${api_key}&signature=${signature}`;

  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.cloudinary.com',
      path: `/v1_1/${cloud_name}/video/rename`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length
      }
    };

    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });

    req.on('error', reject);
    req.write(postData);
    req.end();
  });
}

async function runRenaming() {
  for (const item of renameMapping) {
    console.log(`Renaming: ${item.from} -> ${item.to}...`);
    try {
      const result = await renameResource(item.from, item.to);
      console.log('Result:', JSON.stringify(result, null, 2));
    } catch (error) {
      console.error('Error renaming:', error);
    }
  }
}

runRenaming();
