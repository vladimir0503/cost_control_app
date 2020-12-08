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

const jsonServer = require('json-server')
const server = jsonServer.create()
const db = {
    "users": [
        {
            "userName": "Владимир",
            "password": 123455434,
            "total": 0,
            "history": [],
            "id": 0
        }
    ]
}
const router = jsonServer.router(db)
const middleWares = jsonServer.defaults({
    static: './build',
});

server.use(middleWares)
server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})