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
app.listen(3000, function() {
    console.log("Listening [Port 3000]")
})

// **********************************
//              DATA
// **********************************

const dataFile = require('./data');
const projectData = dataFile.projectData;

// **********************************
//              REQUESTS
// **********************************

// home page - DONE
app.get('/', function(req, res) {
    res.render('home');
    
})

// collaborator page - DONE
app.get('/collaborator-page', function(req, res) {
    res.render('collaborator-page', { projectData })
})

// creator zone page
app.get('/creator-zone', function(req, res) {
    res.render('creator-zone')
    

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










// collaborator page --> particular project
app.get('/collaborator-page/:project', function(req, res) {

    // store element of desired need category
    const projectCategory = getprojectCategoryFromDB(req);

    // render the particular project's page
    // add error handling here (if/else with 'not found' page)
    res.render(`project-actions/project`, { projectData, projectCategory })
})


// bridge blog --> particular topic --> SHOW particular post
// render page showing one particular post
app.get('/bridge-blog/:topic/:id', function(req, res) {
    const { id } = req.params;
    const topicElement = getTopicElementFromDB(req);

    // iterate through each topic object (each element in the topicData array)
    for(let i = 0; i < topicData.length; i++) {
        // iterate through each topic object's 'posts' array
        for (let j = 0; j < topicData[i].posts.length; j++) {
            
            // IF the id of the post === the id of the post we want to SHOW
            if(topicData[i].posts[j].id === id) {
                var foundPost = topicData[i].posts[j];
            }
        }
    }
    console.log(`XX foundPost = ${foundPost}`) // TEST
    res.render(`blog/show`, { topicData, topicElement, foundPost })
})

// IN PROGRESS
// bridge blog --> particular topic --> NEW
// render page where user creates new post
app.get('/bridge-blog/:topic/new', function(req, res) {
    
    // store element of desired topic
    const topicElement = getTopicElementFromDB();

    res.render(`blog/new`, { topicElement })
})

// **********************************
//         HELPER FUNCTIONS
// **********************************

// store user inputted topic from request body
// get the element of the desired topic from the array
function getProjectElementFromDB(req) {
    const { project } = req.params;
    
    // get the element of the desired topic from the array
    for(let topicElement of topicData) {
        if(topicElement.name === topic) {
            return topicElement;
        }
    }
}



