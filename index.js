const express = require('express');
require('dotenv').config();
require('express-async-errors');
const port = process.env.PORT || 8000;
const errorHandlerMiddleware = require('./middleware/error_handler');

const app = express();

 

 app.use(express.json());
 app.use(express.urlencoded({extended:false}));


app.use('/', require('./routes/auth'));

app.use(errorHandlerMiddleware);

app.listen(port, () => {
    console.log(`Server is running on port:${port}`);
})