import { cloudinary } from '../utils/cloudinary';

export class CloudinaryService {
  async upload(fileStr: string, id: string) {
    try {
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        // resource_type: 'video',
        upload_preset: 'dev',
        folder: 'dev',
        public_id: id,
      });
      return {
        message: 'file uploaded successfully ',
        uploadResponse,
      };
    } catch (err) {
      return `Unable to upload file ${err}`;
    }
  }
  async getImages() {
    try {
      const { resources } = await cloudinary.search
        .expression('folder:dev')
        .max_results(30)
        .execute();
      const imgUrls = resources.map((file: any) => {
        return {
          imageUrls: file.secure_url,
          publicIds: file.public_id,
        };
      });
      return imgUrls;
    } catch (error) {
      return { message: `Unable to get images`, error };
    }
  }
}
