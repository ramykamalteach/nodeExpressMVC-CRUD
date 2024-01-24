const mysql = require("mysql2");

const connection = mysql.createPool({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME
});

async function index() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products ORDER BY id DESC", [], (error, result) => {
            if(!error) {
                resolve(result);
            }
        })
    });
}

async function show(id) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products WHERE id=?", [id], (error, result) => {
            if(!error) {
                resolve(result);
            }
        })
    });
}

async function store(createFormData) {
    const productName = createFormData.productName;
    const weight = createFormData.weight;
    const description = createFormData.description;

    return new Promise((resolve, reject) => {
        connection.query("INSERT INTO products (productName, weight, description) VALUES (?,?,?)", [productName, weight, description], (error, result) => {
            if(error) {
                return res.json({ err: error});
            }
        })
    });
}


async function updateForm(id) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM products WHERE id=?", [id], (error, result) => {
            if(!error) {
                resolve(result);
            }
        })
    });
}

async function update(updateFormData) {
    const id = updateFormData.id;
    const productName = updateFormData.productName;
    const weight = updateFormData.weight;
    const description = updateFormData.description;

    return new Promise((resolve, reject) => {
        connection.query("UPDATE products SET productName=?, weight=?, description=? WHERE id=? ", [productName, weight, description, id], (error, result) => {
            if(error) {
                return res.json({ err: error});
            }
        })
    });
}

async function destroy(id) {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM products WHERE id=?", [id], (error, result) => {
            if(error) {
                return res.json({ err: error});
            }
        })
    });
}

module.exports = {
    index,
    show,
    store,
    updateForm,
    update,
    destroy
}