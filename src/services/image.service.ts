import { ImageAttributes, Image } from '../models/image';

export class ImageService {
  async saveImage(image: ImageAttributes) {
    try {
      const res = await Image.create(image);
      return res;
    } catch (err) {
      return `Unable to save image ${err}`;
    }
  }
  async getImages() {
    try {
      const res = await Image.findAll();
      return res;
    } catch (error) {
      return { message: `Unable to get images`, error };
    }
  }
}
