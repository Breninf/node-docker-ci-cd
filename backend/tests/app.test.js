const request = require('supertest');
const app = require('../src/server');

describe('API Tests', () => {
  it('should return 200 on /health', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
  });
});