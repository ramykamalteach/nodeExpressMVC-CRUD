const productModel = require("../models/productModel");

const index = (req, res) => {
    productModel.index()
        .then(products => {
            res.render("pages/products/index", { products });
        });
}

const show = (req, res) => {
    const id = req.params['id'];
    productModel.show(id)
        .then(oneProduct => {
            res.render("pages/products/show", { oneProduct });
        });
}


module.exports = {
    index,
    show
}