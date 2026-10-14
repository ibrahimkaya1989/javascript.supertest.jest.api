const api = require('./helpers/apiHelper');

describe('Photos API', () => {
  describe('GET /photos', () => {
    it('returns photos with the expected fields', async () => {
      const response = await api.get('/photos');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            albumId: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String),
            thumbnailUrl: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('POST /photos', () => {
    it('creates a photo and returns it with status 201', async () => {
      const newPhoto = {
        albumId: 1,
        title: 'New photo',
        url: 'https://example.com/photo.jpg',
        thumbnailUrl: 'https://example.com/photo-thumbnail.jpg',
      };
      const response = await api.post('/photos', newPhoto);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newPhoto));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /photos', () => {
    it('replaces a photo and returns it with status 200', async () => {
      const updatedPhoto = {
        albumId: 1,
        title: 'Updated photo',
        url: 'https://example.com/updated-photo.jpg',
        thumbnailUrl: 'https://example.com/updated-photo-thumbnail.jpg',
      };
      const response = await api.put('/photos/1', updatedPhoto);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedPhoto));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /photos', () => {
    it('updates a photo title and returns it with status 200', async () => {
      const update = { title: 'Patched photo' };
      const response = await api.patch('/photos/1', update);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(update.title);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /photos', () => {
    it('deletes a photo and returns status 200', async () => {
      const response = await api.delete('/photos/1');

      expect(response.status).toBe(200);
    });
  });
});
