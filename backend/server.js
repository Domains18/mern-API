const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config({ path: path.resolve(__dirname + '/.env') });
const colors = require('colors');
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./Config/db')
const port = process.env.PORT || 5000;
const cors = require('cors');
//connect database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// console.log(process.env.DATABASE_URI)
app.use(cors())
app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

//serve frontend
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '../frontend/build'))); //deployment

    app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res)=>{
        res.send('Enviroment Not In production')
    })
}

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
