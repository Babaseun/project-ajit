import { check } from 'express-validator';

export const productRules = {
  forAddProduct: [
    check('description')
      .not()
      .isEmpty()
      .withMessage('description field is required'),
    check('price').not().isEmpty().withMessage('price field is required'),
    check('image_id').not().isEmpty().withMessage('imageId field is required'),
  ],
};
