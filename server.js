// require deps
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const morgan = require('morgan');
const cors = require('cors')
// initialize app
const app = express();

// configure settings
require('dotenv').config();

const { DATABASE_URL, PORT } = process.env;

// connect to and configure mongoDB with mongoose

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;

// set up mongodb event listeners
db.on('connected', () => console.log('Connected to MongoDB'));
db.on('error', (err) => console.log('MongoDB Error: ' + err.message));


// mount middleware
app.use(express.urlencoded({ extended: false })); // creates req.body
app.use(express.json()); // creates req.body with incoming JSON
app.use(cors());
app.use(morgan('dev'));

app.use(methodOverride('_method'));


// mount routes
app.use('/api/skills', require('./controllers/skillsController'));

// tell the app to listen
// heroku or any cloud service will set this value for us

app.listen(PORT, () => {
    console.log('Express is listening on port: ' + PORT);
});

