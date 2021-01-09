import { Router, Response, Request } from 'express';
import { CloudinaryService } from '../services/cloudinary.service';
import Auth from '../middlewares/auth';

export const cloudinaryRouter = Router();
const uploadService = new CloudinaryService();

cloudinaryRouter.post('/api/upload', Auth.verifyToken, async (req: Request, res: Response) => {
    // const { id } = res.locals.user;
    const response = await uploadService.upload(req.body.file, req.body.imageId);

    return res.send(response);
  }
);
cloudinaryRouter.get('/api/images', async (req: Request, res: Response) => {
  const response = await uploadService.getImages();
  console.log(response);
  return res.send(response);
});
