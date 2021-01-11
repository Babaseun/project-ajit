"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_1 = require("../models/product");
class ProductService {
    async addProduct(product) {
        try {
            const newProduct = await product_1.Product.create(product);
            return newProduct;
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllProducts(id) {
        const products = await product_1.Product.findAll({ where: { owner_id: id } });
        return products;
    }
}
exports.ProductService = ProductService;
