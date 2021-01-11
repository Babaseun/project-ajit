import { Request, Response, NextFunction } from 'express';
import { User } from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const Auth = {
  async verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = <string>req.headers['x-access-token'];

    if (!token) {
      return res.status(400).send({ message: 'Token is not provided' });
    }
    try {
      const decoded = await (<any>jwt.verify(token, config.SECRET));
      const user = await User.findOne({ where: { id: decoded['id'] }, });
      if (!user)
        return res.status(400).send({ message: 'The token you provided is invalid' });
      res.locals.user = decoded;
      next();
    } catch (error) {
      return res.status(401).send({ message: 'Invalid auth token provided or user unauthorized!', error, });
    }
  },
};

export default Auth;
