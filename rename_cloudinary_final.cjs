const https = require('https');
const crypto = require('crypto');

const cloud_name = 'dgkgtkfmk';
const api_key = '876998235178973';
const api_secret = 'leWymk955oc0as0hUTElNdrq4aE';

// Final attempt to rename the problematic Tamil ID by fixing the subtle typo
const renameMapping = [
  {
    from: 'Premium_Ring_வாங்கணும்_ஆனா_pocket_safe_ஆகணுமா_அப்படின்னா_நம்ம_SBJ_Rings_Collection_தான்_சரிய_gmbd6o',
    to: 'pachi_jewelry'
  }
];

async function renameResource(from, to) {
  // Compensating for 2 hour system clock mismatch
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
