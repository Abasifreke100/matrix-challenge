import { Request, Response } from 'express';
import {Matrix} from "../../utils/matrix";


class MatrixController {
    /**Return the matrix as a string in matrix format. */
    echo = async (req: Request, res: Response) => {
        try {

            await this.checkFileType(req.file, res);
            const matrix = new Matrix(req.file.buffer);
            res.send(matrix.toString());
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    /**Return the matrix as a string in matrix format where the columns and rows are inverted */
    invert = async (req: Request, res: Response) => {
        try {
            await this.checkFileType(req.file, res);
            const matrix = new Matrix(req.file.buffer);
            res.send(matrix.invert().toString());
        } catch (error) {
            res.status(400).send(error.message);
        }
    };


    /** Return the matrix as a 1 line string, with values separated by commas.*/
    flatten = async (req: Request, res: Response) => {
        try {
            await this.checkFileType(req.file, res);
            const matrix = new Matrix(req.file.buffer);
            res.send(matrix.flatten());
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    /** Return the sum of the integers in the matrix*/
    sum = async (req: Request, res: Response) => {
        try {
            await this.checkFileType(req.file, res);
            const matrix = new Matrix(req.file.buffer);
            res.send(matrix.sum().toString());
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    /** Return the product of the integers in the matrix*/
    multiply = async (req: Request, res: Response) => {
        try {
            await this.checkFileType(req.file, res);
            const matrix = new Matrix(req.file.buffer);
            res.send(matrix.multiply().toString());
        } catch (error) {
            res.status(400).send(error.message);
        }
    };

    /** Validate the file type uploaded*/
    checkFileType(file: Express.Multer.File, res: Response) {
        if (!file) {
            throw new Error('No file uploaded');
        }

        const allowedFileTypes = ['.csv'];

        const fileType = file.originalname.slice(file.originalname.lastIndexOf('.')).toLowerCase();

        if (!allowedFileTypes.includes(fileType)) {
            throw new Error('Invalid file type. Please upload a CSV file.');
        }
    }
}

export default new MatrixController()