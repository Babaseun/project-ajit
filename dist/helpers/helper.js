"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config/config"));
const Helper = {
    generateToken(id) {
        const token = jsonwebtoken_1.default.sign({ id }, config_1.default.SECRET, {
            expiresIn: '1d',
        });
        return token;
    },
    hashPassword(password) {
        const hash = bcrypt_1.default.hashSync(password, bcrypt_1.default.genSaltSync(8));
        return hash;
    },
    comparePassword(password, hashPassword) {
        return bcrypt_1.default.compareSync(password, hashPassword);
    },
};
exports.default = Helper;
