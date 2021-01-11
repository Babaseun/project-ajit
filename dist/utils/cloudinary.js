"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinary = void 0;
const config_1 = __importDefault(require("../config/config"));
exports.cloudinary = require('cloudinary').v2;
exports.cloudinary.config({
    cloud_name: config_1.default.CLOUDINARY_NAME,
    api_key: config_1.default.api_key,
    api_secret: config_1.default.api_secret,
});
