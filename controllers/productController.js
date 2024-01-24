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

const createForm = (req, res) => {
    res.render("pages/products/createForm");
}

const store = (req, res) => {
   // validation
   //////////////////
   productModel.store(req.body)
        .then(error => {
            //
        });
    res.redirect("/products");
}

const updateForm = (req, res) => {
    const id = req.params['id'];
    productModel.updateForm(id)
        .then(oneProduct => {
            res.render("pages/products/updateForm", { oneProduct });
        });
}

const update = (req, res) => {
    // validation
    //////////////////
    productModel.update(req.body)
         .then(error => {
             //
         });
    res.redirect("/products");
}

const destroy = (req, res) => {
    const id = req.params['id'];
    productModel.destroy(id)
        .then(error => {
            //
        });
    res.redirect("/products");
}

module.exports = {
    index,
    show,
    createForm,
    store,
    updateForm,
    update,
    destroy
}