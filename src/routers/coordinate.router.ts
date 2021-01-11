import { Router, Response, Request } from 'express';
import { CoordinateService } from '../services/coordinate.service';
import Auth from '../middlewares/auth';

export const coordinateRouter = Router();
const coordinateService = new CoordinateService();

coordinateRouter.post('/api/coords', Auth.verifyToken, async (req: Request, res: Response) => {
    const { id } = res.locals.user;
    req.body['owner_id'] = id;

    const response = await coordinateService.addCoordinates(req.body);
    return res.send(response);
  }
);
coordinateRouter.get('/api/coords', async (req: Request, res: Response) => {
  const response = await coordinateService.getAllCoordinates();

  return res.send(response);
});
