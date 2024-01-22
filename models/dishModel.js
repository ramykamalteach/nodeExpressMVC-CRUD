async function getAllDishes() {

    try {
        const response = await fetch("https://api.jsonbin.io/v3/b/65a584d6266cfc3fde791163");
        const gotData = await response.json();
        /* console.log(gotData); */
        return gotData.record;
    }
    catch(error) {
        throw error;
    }

    /* 
    const response = fetch("https://api.jsonbin.io/v3/b/65a584d6266cfc3fde791163");
    const gotData = response.json();
    return gotData.record;
    */
}

module.exports = {
    getAllDishes
};