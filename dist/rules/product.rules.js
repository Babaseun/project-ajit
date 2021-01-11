"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRules = void 0;
const express_validator_1 = require("express-validator");
exports.productRules = {
    forAddProduct: [
        express_validator_1.check('description')
            .not()
            .isEmpty()
            .withMessage('description field is required'),
        express_validator_1.check('price').not().isEmpty().withMessage('price field is required'),
        express_validator_1.check('image_id').not().isEmpty().withMessage('imageId field is required'),
    ],
};
