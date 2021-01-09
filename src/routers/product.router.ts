import { Router, Response, Request } from 'express';
import { ProductService } from '../services/product.service';
import { matchedData } from 'express-validator';
import { validationResult } from 'express-validator';
import Auth from '../middlewares/auth';
import { productRules } from '../rules/product.rules';
import { ProductAttributes } from '../models/product';

export const productRouter = Router();
const productService = new ProductService();

productRouter.post(
  '/api/products',
  productRules['forAddProduct'],
  Auth.verifyToken,
  (req: Request, res: Response) => {
    const errors = validationResult(req.body);

    if (!errors.isEmpty()) return res.status(422).json(errors.array());
    const { id } = res.locals.user;
    const payload = matchedData(req) as ProductAttributes;
    payload['owner_id'] = id;
    const product = productService.addProduct(payload);

    return product.then((p) => res.status(200).send(p));
  }
);

productRouter.get(
  '/api/products',
  Auth.verifyToken,
  (req: Request, res: Response) => {
    const { id } = res.locals.user;

    const products = productService.getAllProducts(id);
    return products.then((p) => res.status(200).send(p));
  }
);
