import config from '../config/config';

export const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: config.CLOUDINARY_NAME,
  api_key: config.api_key,
  api_secret: config.api_secret,
});
