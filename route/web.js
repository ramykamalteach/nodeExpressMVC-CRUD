const express = require('express');
const webRouter = express.Router();

/* ------------- controllers ------------------- */

const productController = require('../controllers/productController');

/* -------------- route roles ------------------------ */

/* -------------------products route roles----------------------- */
webRouter.get('/products', (req, res) => {
    productController.index(req, res);
});
webRouter.get('/products/show/:id', (req, res) => {
    productController.show(req, res);
});
webRouter.get('/products/createForm', (req, res) => {
    productController.createForm(req, res);
});
webRouter.post('/products/store', (req, res) => {
    productController.store(req, res);
});
webRouter.get('/products/updateForm/:id', (req, res) => {
    productController.updateForm(req, res);
});
webRouter.post('/products/update', (req, res) => {
    productController.update(req, res);
});
webRouter.get('/products/destroy/:id', (req, res) => {
    productController.destroy(req, res);
});
// add more route roles


module.exports = webRouter;