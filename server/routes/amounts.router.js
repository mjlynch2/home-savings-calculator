const express = require('express');
const router = express.Router();
const { calculate } = require('../modules/calculate');

/**
 * GET route template
 */

 let timeNeeded = 0;
router.get('/', (req, res) => {
    res.send({months: timeNeeded});
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log(req.body);
    timeNeeded = calculate(req.body.homeCost, req.body.downPercent, req.body.monthlySavings, req.body.startingAmount);
    res.sendStatus(200);
});

module.exports = router;