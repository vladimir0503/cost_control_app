// const jsonServer = require('json-server');
// const server = jsonServer.create();
// const router = jsonServer.router('./public/db.json');
// const middleWares = jsonServer.defaults({
//     static: './build',
// });

// const PORT = process.env.PORT || 3001;

// server.use(middleWares);
// server.use(router);

// server.listen(PORT, () => {
//     console.log('Server is running');
// });

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleWares = jsonServer.defaults({
    static: './build',
});

const PORT = Number(process.env.PORT || 3000);

server.use(middleWares);
server.use(router);
server.listen(PORT, () => {
    console.log('JSON Server is running')
});