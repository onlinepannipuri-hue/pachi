import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dgkgtkfmk',
  api_key: '876998235178973',
  api_secret: 'leWymk955oc0as0hUTElNdrq4aE'
});

async function listVideos() {
  try {
    const result = await cloudinary.api.resources({
      resource_type: 'video',
      max_results: 50
    });
    console.log(JSON.stringify(result.resources, null, 2));
  } catch (error) {
    console.error(error);
  }
}

listVideos();
