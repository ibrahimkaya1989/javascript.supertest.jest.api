// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Posts API', () => {
  describe('GET /posts', () => {
    it('should return a list of posts with status 200', async () => {
      const response = await api.get('/posts');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /posts', () => {
    it('should create a new post and return it with status 201', async () => {
      const newData = { title: 'foo', body: 'bar', userId: 1 };
      const response = await api.post('/posts', newData);
      expect(response.status).toBe(201);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
      expect(response.body.body).toContain('bar');
    });
  });

  describe('PUT /posts', () => {
    it('should update a post and return it with status 200', async () => {
      const newData = { title: 'foo', body: 'bar', userId: 1 };
      const response = await api.put('/posts/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
      expect(response.body.body).toContain('bar');
    });
  });

  describe('PATCH /posts', () => {
    it('should patch a post and return it with status 200', async () => {
      const newData = { title: 'foo1' };
      const response = await api.patch('/posts/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.title).toContain('foo1');
    });
  });

  describe('DELETE /posts', () => {
    it('should delete a post and return it with status 200', async () => {
      const response = await api.delete('/posts/1');
      expect(response.status).toBe(200);
    });
  });

});
