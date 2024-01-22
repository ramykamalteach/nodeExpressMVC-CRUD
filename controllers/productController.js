const productModel = require("../models/productModel");

const index = (req, res) => {
    productModel.index()
        .then(products => {
            res.render("pages/products/index", { products });
        });
}



module.exports = {
    index
}