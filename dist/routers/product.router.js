"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const product_service_1 = require("../services/product.service");
const express_validator_1 = require("express-validator");
const express_validator_2 = require("express-validator");
const auth_1 = __importDefault(require("../middlewares/auth"));
const product_rules_1 = require("../rules/product.rules");
exports.productRouter = express_1.Router();
const productService = new product_service_1.ProductService();
exports.productRouter.post('/api/products', product_rules_1.productRules['forAddProduct'], auth_1.default.verifyToken, (req, res) => {
    const errors = express_validator_2.validationResult(req.body);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const { id } = res.locals.user;
    const payload = express_validator_1.matchedData(req);
    payload['owner_id'] = id;
    const product = productService.addProduct(payload);
    return product.then((p) => res.status(200).send(p));
});
exports.productRouter.get('/api/products', auth_1.default.verifyToken, (req, res) => {
    const { id } = res.locals.user;
    const products = productService.getAllProducts(id);
    return products.then((p) => res.status(200).send(p));
});
