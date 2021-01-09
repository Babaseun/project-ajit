import bcrypt from 'bcrypt';
import { check } from 'express-validator';
import { User } from '../models/user';

export const userRules = {
  forRegister: [
    check('firstName')
      .not()
      .isEmpty()
      .withMessage('firstName field is required'),
    check('lastName').not().isEmpty().withMessage('lastName field is required'),
    check('email')
      .isEmail()
      .withMessage('Invalid email format')
      .custom((email) => {
        return User.findOne({ where: { email } }).then((u) => {
          if (u) {
            return Promise.reject('E-mail already in use');
          }
        });
      }),
    check('role')
      .custom((role) =>
        role.toLowerCase() == 'customer' || role == 'business' ? true : false
      )
      .withMessage('Role must either be a customer or a business'),

    check('password')
      .isLength({ min: 8 })
      .withMessage('Minimum length for password is 8'),
    check('confirmPassword')
      .custom(
        (confirmPassword, { req }) => req.body.password === confirmPassword
      )
      .withMessage('Passwords are different'),
  ],
  forLogin: [
    check('email')
      .isEmail()
      .withMessage('Invalid email format')
      .custom((email) =>
        User.findOne({ where: { email } }).then((u) => {
          if (!u)
            return Promise.reject(
              `User with these email ${email} is not registered`
            );
        })
      ),
    check('password').custom((password, { req }) => {
      return User.findOne({ where: { email: req.body.email } }).then((u) =>
        bcrypt.compare(password, u!.password).then((match) => {
          if (!match) return Promise.reject(`Invalid login credentials`);
        })
      );
    }),
  ],
};
