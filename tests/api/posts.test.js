const api = require('./helpers/apiHelper');

describe('Posts API', () => {
  describe('GET /posts', () => {
    it('returns posts with the expected fields', async () => {
      const response = await api.get('/posts');

      expect(response.status).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            userId: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String),
          }),
        ]),
      );
    });
  });

  describe('POST /posts', () => {
    it('creates a post and returns it with status 201', async () => {
      const newPost = { title: 'New post', body: 'Post body', userId: 1 };
      const response = await api.post('/posts', newPost);

      expect(response.status).toBe(201);
      expect(response.body).toEqual(expect.objectContaining(newPost));
      expect(response.body.id).toEqual(expect.any(Number));
    });
  });

  describe('PUT /posts', () => {
    it('replaces a post and returns it with status 200', async () => {
      const updatedPost = { title: 'Updated post', body: 'Updated body', userId: 1 };
      const response = await api.put('/posts/1', updatedPost);

      expect(response.status).toBe(200);
      expect(response.body).toEqual(expect.objectContaining(updatedPost));
      expect(response.body.id).toBe(1);
    });
  });

  describe('PATCH /posts', () => {
    it('updates a post title and returns it with status 200', async () => {
      const update = { title: 'Patched post' };
      const response = await api.patch('/posts/1', update);

      expect(response.status).toBe(200);
      expect(response.body.title).toBe(update.title);
      expect(response.body.id).toBe(1);
    });
  });

  describe('DELETE /posts', () => {
    it('deletes a post and returns status 200', async () => {
      const response = await api.delete('/posts/1');

      expect(response.status).toBe(200);
    });
  });
});
