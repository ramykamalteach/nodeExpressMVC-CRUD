const { getAllDishes } = require('../models/dishModel');

const dishController = async (req, res) => {
    try {
        const allDishes = await getAllDishes();
        res.render('pages/dishes', {
            allDishes
        });
    }
    catch(error) {
        throw error;
    }

}

module.exports = {
    dishController
};