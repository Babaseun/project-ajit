import { Router, Response, Request } from 'express';
import { CoordinateService } from '../services/coordinate.service';

export const coordinateRouter = Router();
const coordinateService = new CoordinateService();

coordinateRouter.post('/api/coords', async (req: Request, res: Response) => {
  const response = await coordinateService.addCoordinates(req.body.coords);

  return res.send(response);
});
coordinateRouter.get('/api/coords', async (req: Request, res: Response) => {
  const response = await coordinateService.getAllCoordinates();

  return res.send(response);
});
