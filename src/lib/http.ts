import ky from 'ky';

const http = ky.create({
  prefixUrl: 'https://pokeapi.co/api/v2/',
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
