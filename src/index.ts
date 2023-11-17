import express from 'express';
import multer from 'multer';
import MatrixController from './controllers/matrixController';

export const app = express();
const port = 8088;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/echo', upload.single('file'), MatrixController.echo);
app.post('/invert', upload.single('file'), MatrixController.invert);
app.post('/flatten', upload.single('file'), MatrixController.flatten);
app.post('/sum', upload.single('file'), MatrixController.sum);
app.post('/multiply', upload.single('file'), MatrixController.multiply);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
