"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coordinateRouter = void 0;
const express_1 = require("express");
const coordinate_service_1 = require("../services/coordinate.service");
const auth_1 = __importDefault(require("../middlewares/auth"));
exports.coordinateRouter = express_1.Router();
const coordinateService = new coordinate_service_1.CoordinateService();
exports.coordinateRouter.post('/api/coords', auth_1.default.verifyToken, async (req, res) => {
    const { id } = res.locals.user;
    req.body['owner_id'] = id;
    const response = await coordinateService.addCoordinates(req.body);
    return res.send(response);
});
exports.coordinateRouter.get('/api/coords', async (req, res) => {
    const response = await coordinateService.getAllCoordinates();
    return res.send(response);
});
