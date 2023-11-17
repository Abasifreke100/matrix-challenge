import { expect } from 'chai';
import request from 'supertest';
import {app} from '../index';

describe('Multiply Endpoint', () => {
    it('should return the product of the integers in the matrix', async () => {
        const response = await request(app).post('/multiply').attach('file', './src/common/matrix.csv');
        expect(response.status).to.equal(200);
        expect(response.text.trim()).to.equal('362880');
    });
});
