const https = require('https');

const options = {
  hostname: 'api.cloudinary.com',
  path: '/v1_1/dgkgtkfmk/resources/video',
  method: 'GET'
};

const req = https.request(options, (res) => {
  console.log('Server Date:', res.headers.date);
  res.on('data', () => {});
  res.on('end', () => {});
});

req.on('error', (e) => {
  console.error(e);
});

req.end();
