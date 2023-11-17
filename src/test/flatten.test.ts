import { expect } from 'chai';
import request from 'supertest';
import { app } from '../index';

describe('Flatten Endpoint', () => {
    it('should return the matrix as a 1 line string with values separated by commas', async () => {
        const response = await request(app).post('/flatten').attach('file', './src/common/matrix.csv');
        expect(response.status).to.equal(200);
        expect(response.text.trim()).to.equal('1,2,3,4,5,6,7,8,9');
    });
});
