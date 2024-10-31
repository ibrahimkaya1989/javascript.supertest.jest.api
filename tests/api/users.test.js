// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Users API', () => {

  beforeEach(() => { 
    // do something..
  });

  afterEach(() => { 
    // do something..
  });

  describe('GET /users', () => {
    it('should return a list of users with status 200', async () => {
      const response = await api.get('/users');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /users', () => {
    it('should create a new user and return it with status 201', async () => {
      const newData = { name: 'John Doe', email: 'john@example.com' };
      const response = await api.post('/users', newData);
      expect(response.status).toBe(201);
      expect(response.body).toContain(newData);
    });
  });
});
