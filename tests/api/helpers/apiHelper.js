const request = require('supertest');
const baseUrl = process.env.API_BASE_URL || 'https://jsonplaceholder.typicode.com';

let parsedBaseUrl;
try {
  parsedBaseUrl = new URL(baseUrl);
} catch {
  throw new Error('API_BASE_URL must be a valid absolute URL.');
}

if (!['http:', 'https:'].includes(parsedBaseUrl.protocol)) {
  throw new Error('API_BASE_URL must use the HTTP or HTTPS protocol.');
}

module.exports = {
  get(endpoint) {
    return request(baseUrl).get(endpoint);
  },

  post(endpoint, data) {
    return request(baseUrl)
      .post(endpoint)
      .send(data);
  },

  put(endpoint, data) {
    return request(baseUrl)
      .put(endpoint)
      .send(data);
  },

  patch(endpoint, data) {
    return request(baseUrl)
      .patch(endpoint)
      .send(data);
  },

  delete(endpoint) {
    return request(baseUrl).delete(endpoint);
  },
};
