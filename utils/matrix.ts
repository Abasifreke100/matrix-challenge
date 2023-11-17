export class Matrix {

    private matrix: number[][];

    constructor(buffer: Buffer) {
        this.matrix = [];

        buffer.toString().split('\n').forEach((row) => {
            if (row.trim() !== '') {
                this.matrix.push(row.split(',').map(Number));
            }
        });
    }

    toString(): string {
        return this.matrix.map((row) => row.join(',')).join('\n');
    }

    invert(): Matrix {
        const invertedMatrix = new Matrix(Buffer.from(''));

        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                if (!invertedMatrix.matrix[j]) {
                    invertedMatrix.matrix[j] = [];
                }
                invertedMatrix.matrix[j][i] = this.matrix[i][j];
            }
        }

        return invertedMatrix;
    }

    flatten(): string {
        return this.matrix.flat().join(',');
    }

    sum(): number {
        return this.matrix.flat().reduce((acc, val) => acc + val, 0);
    }

    multiply(): number {
        return this.matrix.flat().reduce((acc, val) => acc * val, 1);
    }
}
