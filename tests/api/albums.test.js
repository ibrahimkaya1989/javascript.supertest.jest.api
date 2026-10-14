const api = require('./helpers/apiHelper');

describe('Albums API', () => {
  describe('GET /albums', () => {
    it('returns albums with the expected fields', async () => {
      const response = await api.get('/albums');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            userId: expect.any(Number),
            title: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('POST /albums', () => {
    it('creates an album and returns it with status 201', async () => {
      const newAlbum = { userId: 1, title: 'New album' };
      const response = await api.post('/albums', newAlbum);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newAlbum));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /albums', () => {
    it('replaces an album and returns it with status 200', async () => {
      const updatedAlbum = { userId: 1, title: 'Updated album' };
      const response = await api.put('/albums/1', updatedAlbum);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedAlbum));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /albums', () => {
    it('updates an album title and returns it with status 200', async () => {
      const update = { title: 'Patched album' };
      const response = await api.patch('/albums/1', update);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(update.title);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /albums', () => {
    it('deletes an album and returns status 200', async () => {
      const response = await api.delete('/albums/1');

      expect(response.status).toBe(200);
    });
  });
});
