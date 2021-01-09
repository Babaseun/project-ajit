import { cloudinary } from '../utils/cloudinary';

export class UploadService {
  async upload(fileStr: string, imgID: string) {
    try {
      const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        // resource_type: 'video',
        upload_preset: 'dev',
        folder: 'dev',
        public_id: imgID,
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

      const publicIds = resources.map((file: any) => file.public_id);
      return publicIds;
    } catch (error) {
      return { message: `Unable to get images`, error };
    }
  }
}
