import { Router, Response, Request } from 'express';
import { matchedData } from 'express-validator';
import { validationResult } from 'express-validator';
import { userRules } from '../rules/user.rules';
import { UserService } from '../services/user.service';
import { UserAttributes } from '../models/user';
import Auth from '../middlewares/auth';

export const userRouter = Router();
const userService = new UserService();

userRouter.post(
  '/register',
  userRules['forRegister'],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(422).json(errors.array());
    const payload = matchedData(req) as UserAttributes;

    const user = userService.register(payload);

    return user.then((u) => res.json(u));
  }
);

userRouter.post(
  '/login',
  userRules['forLogin'],
  (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(422).json(errors.array());

    const payload = matchedData(req) as UserAttributes;
    const token = userService.login(payload);

    return token.then((t) => res.json(t));
  }
);
userRouter.get('/api/user', Auth.verifyToken, (req: Request, res: Response) => {
  const { id } = res.locals.user;

  const user = userService.getUserById(id);

  return user.then((u) => res.json(u));
});
