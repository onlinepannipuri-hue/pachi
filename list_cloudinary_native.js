const https = require('https');

const cloud_name = 'dgkgtkfmk';
const api_key = '876998235178973';
const api_secret = 'leWymk955oc0as0hUTElNdrq4aE';

const auth = Buffer.from(`${api_key}:${api_secret}`).toString('base64');

const options = {
  hostname: 'api.cloudinary.com',
  path: `/v1_1/${cloud_name}/resources/video?max_results=50`,
  method: 'GET',
  headers: {
    'Authorization': `Basic ${auth}`
  }
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const json = JSON.parse(data);
    console.log(JSON.stringify(json.resources, null, 2));
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();
