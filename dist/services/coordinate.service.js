"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateService = void 0;
const coords_1 = require("../models/coords");
class CoordinateService {
    async addCoordinates(coords) {
        try {
            const newCoords = await coords_1.Coordinates.create(coords);
            return newCoords;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllCoordinates() {
        const coords = await coords_1.Coordinates.findAll();
        return coords;
    }
}
exports.CoordinateService = CoordinateService;
