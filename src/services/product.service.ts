import { Product, ProductAttributes } from '../models/product';
export class ProductService {
  async addProduct(product: ProductAttributes) {
    try {
      const newProduct = await Product.create(product);
      return newProduct;
    } catch (error) {
      console.log(error);
    }
  }
  async getAllProducts(id: string) {
    const products = await Product.findAll();
    return products;
  }
}
