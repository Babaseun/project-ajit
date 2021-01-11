"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const cloudinary_1 = require("../utils/cloudinary");
class CloudinaryService {
    async upload(fileStr, id) {
        try {
            const uploadResponse = await cloudinary_1.cloudinary.uploader.upload(fileStr, {
                // resource_type: 'video',
                upload_preset: 'dev',
                folder: 'dev',
                public_id: id,
            });
            return {
                message: 'file uploaded successfully ',
                uploadResponse,
            };
        }
        catch (err) {
            return `Unable to upload file ${err}`;
        }
    }
    async getImages() {
        try {
            const { resources } = await cloudinary_1.cloudinary.search
                .expression('folder:dev')
                .max_results(30)
                .execute();
            const imgUrls = resources.map((file) => {
                return {
                    imageUrls: file.secure_url,
                    publicIds: file.public_id,
                };
            });
            return imgUrls;
        }
        catch (error) {
            return { message: `Unable to get images`, error };
        }
    }
}
exports.CloudinaryService = CloudinaryService;
