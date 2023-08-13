const express = require('express');
require('dotenv').config();
require('express-async-errors');
const port = process.env.PORT || 8000;

const app = express();
 
app.use(express.json());

app.use('/', require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})