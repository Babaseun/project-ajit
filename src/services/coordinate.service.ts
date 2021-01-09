import { Coordinates, CoordinatesAttributes } from '../models/coords';
export class CoordinateService {
  async addCoordinates(coords: CoordinatesAttributes) {
    try {
      const newCoords = await Coordinates.create(coords);
      return newCoords;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllCoordinates() {
    const coords = await Coordinates.findAll();
    return coords;
  }
}
