import express from 'express';
import cors from 'cors';
import { userRouter } from './routers/user.router';
import morgan from 'morgan';
import path from 'path';
import { productRouter } from './routers/product.router';
import { uploadRouter } from './routers/upload.router';
import { coordinateRouter } from './routers/coordinate.router';

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

app.use('/', userRouter);
app.use('/', productRouter);
app.use('/', uploadRouter);
app.use('/', coordinateRouter);
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
const PORT = 4001 || process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is listening on port ${PORT}........`)
);
