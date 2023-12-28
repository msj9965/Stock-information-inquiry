const express = require('express')
const router = express.Router();
const ctroler = require("./ctrl");

router.get('/', ctroler.page.home)

router.get('/search', ctroler.page.search)

router.get('/ROA-ROE', ctroler.page.ROA_ROE)

router.get('/modified-stock-price', ctroler.page.modified_stock_price)

router.get('/rank', ctroler.page.rank)

router.get('/total', ctroler.page.total)


module.exports = router;