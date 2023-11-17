import { expect } from 'chai';
import request from 'supertest';
import { app } from '../index';

describe('Echo Endpoint', () => {
    it('should return the matrix as a string in matrix format', async () => {
        const response = await request(app).post('/echo').attach('file', './src/common/matrix.csv');
        expect(response.status).to.equal(200);
        expect(response.text.trim()).to.equal('1,2,3\n4,5,6\n7,8,9');
    });
});
