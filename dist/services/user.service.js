"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const user_1 = require("../models/user");
const helper_1 = __importDefault(require("../helpers/helper"));
class UserService {
    static get userAttributes() {
        return ['id', 'email', 'firstName', 'lastName', 'role'];
    }
    async register(user) {
        const { role, password } = user, results = __rest(user, ["role", "password"]);
        const hash = helper_1.default.hashPassword(password);
        const { id } = await user_1.User.create(Object.assign(Object.assign({}, results), { password: hash, isAuthenticated: true, role: role.toLowerCase() }));
        const token = helper_1.default.generateToken(id);
        return { token };
    }
    async login({ email }) {
        const user = await user_1.User.findOne({ where: { email } });
        user.isAuthenticated = true;
        await user.save();
        const token = helper_1.default.generateToken(user.id);
        return { token };
    }
    getUserById(id) {
        return user_1.User.findByPk(id, {
            attributes: UserService.userAttributes,
        });
    }
}
exports.UserService = UserService;
