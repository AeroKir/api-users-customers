const express = require('express');
const router = express.Router();
const customersCtrl = require('../controllers/customers.ctrl');

router.get('/', customersCtrl.getCustomers);

module.exports = router;
