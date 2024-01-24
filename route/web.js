const express = require('express');
const webRouter = express.Router();

/* ------------- controllers ------------------- */
const staffController = require('../controllers/staffController');
const {dishController} = require('../controllers/dishController');

const productController = require('../controllers/productController');

/* -------------- route roles ------------------------ */
webRouter.get('/', (req, res) => {
    res.render('pages/home');
});
webRouter.get('/about', (req, res) => {
    res.render('pages/about');
});
webRouter.get('/contacts', (req, res) => {
    res.render('pages/contacts');
});

webRouter.get('/staff', (req, res) => {
    webRouter.get('/staff', staffController(req, res));
});


webRouter.get('/dishes', async (req, res) => {
    try {
        await dishController(req, res);
    }
    catch (error) {
        throw error;
    }
});
/* ------------------------------------------ */
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