const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

// const Hapi = require('@hapi/hapi');
// const routes = require('./routes'); // Sesuaikan dengan path yang benar

// const init = async () => {
//     const server = Hapi.server({
//         port: 9000, // Sesuaikan dengan port yang diinginkan
//         host: 'localhost',
//         routes: {
//             cors: {
//                 origin: ['*'],
//             },
//         },
//     });

//     server.route(routes);

//     await server.start();
//     console.log(`Server berjalan pada ${server.info.uri}`);
// };

// init();
