import ky from 'ky';

const http = ky.create({
  prefixUrl: 'https://api.example.com',
  timeout: 10000,
  hooks: {
    beforeRequest: [
      async (request) => {
        request.headers.set('Authorization', `Bearer TOKEN}`);
      },
    ],
  },
});

export default http;
