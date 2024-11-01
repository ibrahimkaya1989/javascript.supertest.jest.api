// tests/api/users.test.js
const api = require('./helpers/apiHelper');

describe('Photos API', () => {

  describe('GET /photos', () => {
    it('should return a list of photos with status 200', async () => {
      const response = await api.get('/photos');
      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });
  });

  describe('POST /photos', () => {
    it('should create a new photo and return it with status 201', async () => {
      const newData = { name: 'new photo', email: 'john@email.com', body: "new photo" };
      const response = await api.post('/photos', newData);
      expect(response.status).toBe(201);
      expect(response.body.name).toContain('new photo');
      expect(response.body.email).toContain('john@email.com');
      expect(response.body.body).toContain('new photo');
    });
  });

  describe('PUT /photos', () => {
    it('should update a photo and return it with status 200', async () => {
      const newData = { name: 'new photo', email: 'john@email.com', body: "new photo" };
      const response = await api.put('/photos/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.name).toContain('new photo');
      expect(response.body.email).toContain('john@email.com');
      expect(response.body.body).toContain('new photo');
    });
  });

  describe('PATCH /photos', () => {
    it('should patch a photo and return it with status 200', async () => {
      const newData = { email: 'mark@email.com' };
      const response = await api.patch('/photos/1', newData);
      expect(response.status).toBe(200);
      expect(response.body.email).toContain('mark@email.com');
    });
  });

  describe('DELETE /photos', () => {
    it('should delete a photo and return it with status 200', async () => {
      const response = await api.delete('/photos/1');
      expect(response.status).toBe(200);
    });
  });

});
