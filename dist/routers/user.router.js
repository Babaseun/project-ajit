"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const user_rules_1 = require("../rules/user.rules");
const user_service_1 = require("../services/user.service");
const auth_1 = __importDefault(require("../middlewares/auth"));
exports.userRouter = express_1.Router();
const userService = new user_service_1.UserService();
exports.userRouter.post('/register', user_rules_1.userRules['forRegister'], (req, res) => {
    const errors = express_validator_2.validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const payload = express_validator_1.matchedData(req);
    const user = userService.register(payload);
    return user.then((u) => res.json(u));
});
exports.userRouter.post('/login', user_rules_1.userRules['forLogin'], (req, res) => {
    const errors = express_validator_2.validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const payload = express_validator_1.matchedData(req);
    const token = userService.login(payload);
    return token.then((t) => res.json(t));
});
exports.userRouter.get('/api/user', auth_1.default.verifyToken, (req, res) => {
    const { id } = res.locals.user;
    const user = userService.getUserById(id);
    return user.then((u) => res.json(u));
});
