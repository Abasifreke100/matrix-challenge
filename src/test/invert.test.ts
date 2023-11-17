import { expect } from 'chai';
import request from 'supertest';
import { app } from '../index';

describe('Invert Endpoint', () => {
    it('should return the inverted matrix as a string in matrix format', async () => {
        const response = await request(app).post('/invert').attach('file', './src/common/matrix.csv');
        expect(response.status).to.equal(200);
        expect(response.text.trim()).to.equal('1,4,7\n2,5,8\n3,6,9');
    });
});
