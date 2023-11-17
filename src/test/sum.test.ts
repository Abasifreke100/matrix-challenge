import { expect } from 'chai';
import request from 'supertest';
import { app } from '../index';

describe('Sum Endpoint', () => {
    it('should return the sum of the integers in the matrix', async () => {
        const response = await request(app).post('/sum').attach('file', './src/common/matrix.csv');
        expect(response.status).to.equal(200);
        expect(response.text.trim()).to.equal('45');
    });
});
