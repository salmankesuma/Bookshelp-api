
const {  addBookHandler, getAllBooksHandler, getBooksByIdHandler, editBooksByidHandler,  deleteBooksByidHandler} = require('./handler'); // Sesuaikan dengan path yang benar

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler,
    },
    {
        method: 'GET',
        path: '/books/{id}',
        handler: getBooksByIdHandler,
    },
    {
        method: 'PUT',
        path: '/books/{id}',
        handler: editBooksByidHandler,
    },
    {
        method: 'DELETE',
        path: '/books/{id}',
        handler:  deleteBooksByidHandler,
    },
];

module.exports = routes;
