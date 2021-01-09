import { Router, Response, Request } from 'express';
import { ImageService } from '../services/image.service';

export const imageRouter = Router();
const imageService = new ImageService();

imageRouter.post('/api/image', async (req: Request, res: Response) => {
  const response = await imageService.saveImage(req.body.image);

  return res.send(response);
});
imageRouter.get('/api/image', async (req: Request, res: Response) => {
  const response = await imageService.getImages();

  return res.send(response);
});
