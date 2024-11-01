// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Comments API', () => {

  describe('GET /comments', () => {
    it('should return a list of comments with status 200', async () => {
      const response = await api.get('/comments');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /comments', () => {
    it('should create a new comment and return it with status 201', async () => {
      const newData = { postId: 1, name: 'Elise', email: "Eliseo@gardner.biz", body: "foo" };
      const response = await api.post('/comments', newData);
      expect(response.status).toBe(201);
      expect(response.body.postId).toEqual(1);
      expect(response.body.name).toContain('Elise');
      expect(response.body.email).toContain('Eliseo@gardner.biz');
      expect(response.body.body).toContain('foo');
    });
  });

  describe('PUT /comments', () => {
    it('should update a comment and return it with status 200', async () => {
      const newData = { postId: 1, name: 'Elise', email: "Eliseo@gardner.biz", body: "foo" };
      const response = await api.put('/comments/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.postId).toEqual(1);
      expect(response.body.name).toContain('Elise');
      expect(response.body.email).toContain('Eliseo@gardner.biz');
      expect(response.body.body).toContain('foo');
    });
  });

  describe('PATCH /comments', () => {
    it('should patch a comment and return it with status 200', async () => {
      const newData = { body: 'foo1' };
      const response = await api.patch('/comments/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.body).toContain('foo1');
    });
  });

  describe('DELETE /comments', () => {
    it('should delete a comment and return it with status 200', async () => {
      const response = await api.delete('/comments/1');
      expect(response.status).toBe(200);
    });
  });

});
