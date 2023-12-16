const db = require('../storage/db');

async function getCustomers() {
       const result = await db.query(`SELECT * FROM customers`);
       console.log(result);
       return result;
}

module.exports = {
    getCustomers
};
