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
      expect(response.body.name).toEqual('John Doe');
      expect(response.body.email).toEqual('john@example.com');
    });
  });

  describe('PUT /users', () => {
    it('should update a user and return it with status 200', async () => {
      const newData = { userId: 1, id: 1, name: 'John Doe', email: 'john@example.com' };
      const response = await api.put('/users/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.name).toEqual('John Doe');
      expect(response.body.email).toEqual('john@example.com');
    });
  });

  describe('PATCH /users', () => {
    it('should patch a user and return it with status 200', async () => {
      const newData = { name: 'John Doe' };
      const response = await api.patch('/users/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.name).toEqual('John Doe');
    });
  });

  describe('DELETE /users', () => {
    it('should delete a user and return it with status 200', async () => {
      const response = await api.delete('/users/1');
      expect(response.status).toBe(200);
    });
  });

});
