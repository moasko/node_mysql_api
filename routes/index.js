const express = require('express');
const app = express();

const indexRoute = require('./index.router');
const productRoute = require('./products.route')
const categoryRoute = require('./category.route')
const vendorsRoute = require('./vendors.route')


app.use(indexRoute)
app.use(productRoute)
app.use(categoryRoute)
app.use(vendorsRoute)