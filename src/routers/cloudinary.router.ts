import { Router, Response, Request } from 'express';
import { CloudinaryService } from '../services/cloudinary.service';
import Auth from '../middlewares/auth';

export const cloudinaryRouter = Router();
const cloudinaryService = new CloudinaryService();

cloudinaryRouter.post('/api/upload', Auth.verifyToken, async (req: Request, res: Response) => {
    // const { id } = res.locals.user;
    const response = await cloudinaryService.upload(
      req.body.file,
      req.body.image_id
    );

    return res.send(response);
  }
);
cloudinaryRouter.get('/api/images', async (req: Request, res: Response) => {
  const response = await cloudinaryService.getImages();
  return res.send(response);
});
