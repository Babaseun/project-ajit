import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/user.router';
import morgan from 'morgan';
import { productRouter } from './routers/product.router';
import { cloudinaryRouter } from './routers/cloudinary.router';
import { coordinateRouter } from './routers/coordinate.router';
import path from "path";
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.static(path.join(__dirname, '../client/build/')));
app.use('/', userRouter);
app.use('/', productRouter);
app.use('/', cloudinaryRouter);
app.use('/', coordinateRouter);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}........`)
);
