import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import config from '../config/config';

const Helper = {
  generateToken(id: string) {
    const token = jwt.sign({ id }, config.SECRET, {
      expiresIn: '1d',
    });
    return token;
  },
  hashPassword(password: string) {
    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
    return hash;
  },
  comparePassword(password: string, hashPassword: string) {
    return bcrypt.compareSync(password, hashPassword);
  },
};

export default Helper;
