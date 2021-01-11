"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const express_validator_1 = require("express-validator");
const user_1 = require("../models/user");
exports.userRules = {
    forRegister: [
        express_validator_1.check('firstName')
            .not()
            .isEmpty()
            .withMessage('firstName field is required'),
        express_validator_1.check('lastName').not().isEmpty().withMessage('lastName field is required'),
        express_validator_1.check('email')
            .isEmail()
            .withMessage('Invalid email format')
            .custom((email) => {
            return user_1.User.findOne({ where: { email } }).then((u) => {
                if (u) {
                    return Promise.reject('E-mail already in use');
                }
            });
        }),
        express_validator_1.check('role')
            .custom((role) => role.toLowerCase() == 'customer' || role == 'business' ? true : false)
            .withMessage('Role must either be a customer or a business'),
        express_validator_1.check('password')
            .isLength({ min: 8 })
            .withMessage('Minimum length for password is 8'),
        express_validator_1.check('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword)
            .withMessage('Passwords are different'),
    ],
    forLogin: [
        express_validator_1.check('email')
            .isEmail()
            .withMessage('Invalid email format')
            .custom((email) => user_1.User.findOne({ where: { email } }).then((u) => {
            if (!u)
                return Promise.reject(`User with these email ${email} is not registered`);
        })),
        express_validator_1.check('password').custom((password, { req }) => {
            return user_1.User.findOne({ where: { email: req.body.email } }).then((u) => bcrypt_1.default.compare(password, u.password).then((match) => {
                if (!match)
                    return Promise.reject(`Invalid login credentials`);
            }));
        }),
    ],
};
