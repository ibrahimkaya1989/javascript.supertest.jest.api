// tests/api/helpers/apiHelper.js
const request = require('supertest');
const baseUrl = process.env.API_BASE_URL;

module.exports = {
  async get(endpoint) {
    return request(baseUrl).get(endpoint);
  },

  async post(endpoint, data) {
    return request(baseUrl)
      .post(endpoint)
      .send(data)
      .set('Content-Type', 'application/json');
  },

  async put(endpoint, data) {
    return request(baseUrl)
      .put(endpoint)
      .send(data)
      .set('Content-Type', 'application/json');
  },

  async delete(endpoint) {
    return request(baseUrl).delete(endpoint);
  },
};
