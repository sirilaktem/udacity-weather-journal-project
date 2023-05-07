// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
/* Middleware*/
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Spin up the server
const port = 8000;

// Callback to debug
function listening(){
    console.log(`running on localhost:${port}`);
}
app.listen(port, listening);

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', function (req, res) {
    res.send(projectData);
});

// Post Route
app.post('/addJournal', addJournal);

function addJournal(req, res){
    projectData = {
        date: req.body.date,
        temp: req.body.temp,
        feel: req.body.feel,
        location: req.body.location,
        desc: req.body.desc,
        icon: req.body.icon
    }

    res.send(projectData);
    console.log(projectData);
}