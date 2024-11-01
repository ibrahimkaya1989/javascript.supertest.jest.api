// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Albums API', () => {

  describe('GET /albums', () => {
    it('should return a list of albums with status 200', async () => {
      const response = await api.get('/albums');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /albums', () => {
    it('should create a new album and return it with status 201', async () => {
      const newData = { userId: 1, title: 'foo' };
      const response = await api.post('/albums', newData);
      expect(response.status).toBe(201);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
    });
  });

  describe('PUT /albums', () => {
    it('should update a album and return it with status 200', async () => {
      const newData = { userId: 1, title: 'foo' };
      const response = await api.put('/albums/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.userId).toEqual(1);
      expect(response.body.title).toContain('foo');
    });
  });

  describe('PATCH /albums', () => {
    it('should patch a album and return it with status 200', async () => {
      const newData = { title: 'foo1' };
      const response = await api.patch('/albums/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.title).toContain('foo1');
    });
  });

  describe('DELETE /albums', () => {
    it('should delete a album and return it with status 200', async () => {
      const response = await api.delete('/albums/1');
      expect(response.status).toBe(200);
    });
  });

});
