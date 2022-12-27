const express = require ('express');
const path = require('path');
const dotenv = require ('dotenv').config({ path: path.resolve(__dirname+'/.env')});
const colors = require('colors');
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./Config/db')
const port = process.env.PORT || 8000;


//connect database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// console.log(process.env.DATABASE_URI)

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler);

app.listen(port, ()=> console.log(`server started on port ${port}`));