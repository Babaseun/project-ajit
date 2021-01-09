import Bluebird from 'bluebird';
import {
  User,
  UserAttributes,
  UserViewModel,
  UserCreationAttributes,
} from '../models/user';

import Helper from '../helpers/helper';
export class UserService {
  static get userAttributes() {
    return ['id', 'email', 'firstName', 'lastName', 'role'];
  }

  async register(user: UserCreationAttributes) {
    const { role, password, ...results } = user;

    const hash = Helper.hashPassword(password);

    const { id } = await User.create({
      ...results,
      password: hash,
      isAuthenticated: true,
      role: role.toLowerCase(),
    });

    const token = Helper.generateToken(id);
    return { token };
  }

  async login({ email }: UserAttributes) {
    const user = await User.findOne({ where: { email } });
    user!.isAuthenticated = true;
    await user!.save();
    const token = Helper.generateToken(user!.id);
    return { token };
  }

  getUserById(id: string) {
    return User.findByPk(id, {
      attributes: UserService.userAttributes,
    }) as Bluebird<UserViewModel>;
  }
}
