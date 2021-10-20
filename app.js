const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const path = require('path');
const app = express();

dotenv.config();


const d = new Date()
app.use(cors());
app.use(express.static('public'));
app.set('view engine', 'ejs')


app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, './views'));


const indexRoute = require('./routes/index.router');
const productRoute = require('./routes/products.route')
const categoryRoute = require('./routes/category.route')
const vendorsRoute = require('./routes/vendors.route')

app.use(indexRoute)
app.use(productRoute)
app.use(categoryRoute)
app.use(vendorsRoute)


app.listen(process.env.PORT, () => {
    console.log(`le server a demaré sur le port ${process.env.PORT} // ${d}`)
})