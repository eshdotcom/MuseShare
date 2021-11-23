// **********************************
//              SETUP
// **********************************

// express setup
const express = require('express');                 // npm i express
const app = express();
const path = require('path');
// ejs setup
app.set('view engine', 'ejs');                      // npm i ejs
app.set('views', path.join(__dirname, '/views'));

// other setup
const methodOverride = require('method-override')   // npm i method-override
// serve static files
app.use(express.static(path.join(__dirname, 'public')));

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))
// To parse incoming JSON in POST request body:
app.use(express.json())
// To 'fake' put/patch/delete requests:
app.use(methodOverride('_method'))

// to generate unique random ID's for posts
const { v4: uuid } = require('uuid');

// **********************************
//              SERVER
// **********************************

// when server is open, show a message
app.listen(8080, function() {
    console.log("Listening [Port 8080]")
})

// **********************************
//              DATA
// **********************************

const dataFile = require('./data');
const projectData = dataFile.projectData;

// **********************************
//             ROUTING
// **********************************

// home page - DONE
app.get('/', function(req, res) {
    res.render('home');
})

// collaborator page - DONE
app.get('/collaborator-page', function(req, res) {
    res.render('collaborator-page', { projectData })
})

// collaborator page --> particular project
app.get('/collaborator-page/:project', function(req, res) {
    
    // store element of desired need category
    const projectCategory = getprojectCategoryFromDB(req);

    // render the particular project's page
    // add error handling here (if/else with 'not found' page)
    res.render(`project-actions/project`, { projectData, projectCategory })
})

// creator zone page
app.get('/creator-page', function(req, res) {
    res.render('creator-page')
})

// **********************************
//         HELPER FUNCTIONS
// **********************************

// store user inputted need_category from request body
// get the element of the desired topic from the array
function getprojectCategoryFromDB(req) {
    const { project } = req.params;
    
    // get the element of the desired category from the array
    for(let category of projectData) {
        if(category.need_category_name === project) {
            return category;
        }
    }
}