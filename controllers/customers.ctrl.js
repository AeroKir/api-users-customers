const customersData = require('../dal/customers.data');

async function getCustomers(req, res) {
    try {
        res.json(await customersData.getCustomers());
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getCustomers
};
