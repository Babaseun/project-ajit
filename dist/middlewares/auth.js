"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config/config"));
const Auth = {
    async verifyToken(req, res, next) {
        const token = req.headers['x-access-token'];
        if (!token) {
            return res.status(400).send({ message: 'Token is not provided' });
        }
        try {
            const decoded = await jsonwebtoken_1.default.verify(token, config_1.default.SECRET);
            const user = await user_1.User.findOne({
                where: { id: decoded['id'], isAuthenticated: true },
            });
            if (!user)
                return res.status(400).send({ message: 'The token you provided is invalid' });
            res.locals.user = decoded;
            next();
        }
        catch (error) {
            return res.status(401).send({ message: 'Invalid auth token provided or user unauthorized!', error, });
        }
    },
};
exports.default = Auth;
