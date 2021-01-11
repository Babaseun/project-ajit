"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryRouter = void 0;
const express_1 = require("express");
const cloudinary_service_1 = require("../services/cloudinary.service");
const auth_1 = __importDefault(require("../middlewares/auth"));
exports.cloudinaryRouter = express_1.Router();
const cloudinaryService = new cloudinary_service_1.CloudinaryService();
exports.cloudinaryRouter.post('/api/upload', auth_1.default.verifyToken, async (req, res) => {
    // const { id } = res.locals.user;
    const response = await cloudinaryService.upload(req.body.file, req.body.image_id);
    return res.send(response);
});
exports.cloudinaryRouter.get('/api/images', async (req, res) => {
    const response = await cloudinaryService.getImages();
    return res.send(response);
});
