import { Router, Response, Request } from 'express';
import { UploadService } from '../services/upload.service';
import Auth from '../middlewares/auth';

export const uploadRouter = Router();
const uploadService = new UploadService();

uploadRouter.post(
  '/api/upload',
  Auth.verifyToken,
  async (req: Request, res: Response) => {
    // const { id } = res.locals.user;
    const response = await uploadService.upload(
      req.body.file,
      req.body.imageId
    );

    return res.send(response);
  }
);
uploadRouter.get('/api/images', async (req: Request, res: Response) => {
  const response = await uploadService.getImages();
  console.log(response);
  return res.send(response);
});
