const express = require ('express');

const mongoose = require ('mongoose');

const methodOverride = require ('method-override')

const morgan = require ('morgan')

const cors = require('cors');

const app = express();

require('dotenv').config();

//database connection

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//db error/success

const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));


//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors());
//routes

const skillsController = require('./controllers/skills');
app.use('/api/skills', skillsController)



const PORT = process.env.PORT;
app.listen(3001, () => console.log(`Server is listening at 3001`))