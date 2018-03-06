//Require modules and models

var express = require("express");
var models = require("./models/index");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

//Set view engine

app.set("view engine", "ejs");

//Middleware

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(methodOverride("_method"));

app.get("/", function(req, res) {
    res.redirect(301, "/chirps");
});

//Get all chirps
app.get("/chirps", (req, res) => {
  // Retrieve all chirps from database
  // Send back HTML with all of the chrips in it
  // http://localhost:3000 to view your site
  models.Chirp.findAll().then((chirps) => {
    res.render("index", {
      chirps
    });
  });
});
//Create new chirp
app.post("/chirps", (req, res) =>{

  // Step 1: Capture chirp from for submission
  // Weeds step: Validate that input meets 140 character criteria
var formData = req.body;
  // Step 2: Insert new chirp into DB as a new row
models.Chirp.create(formData).then(() => {

  // Redirect to show all chirps page (seperate of locigal concerns - we've already created show all chirps functinality above)
  res.redirect("/chirps");

});

});
//Get specific chirp
app.get("/chirps/:id/edit", (req, res) => {
  // Step 1: Retrieve chirp based on it's ID

  models.Chirp.findById(req.params.id).then((chirp) => {
  // Step 2: Send back the edit.html page with the specific chirp in it
    res.render("edit", {
      chirp
    });
  });
});

//Edit a chirp
app.put("/chirps/:id", (req, res) => {

  // Step 1: Retrieve updated chirp text from the form I(optionally validate against constraints)
  var formData = req.body;

  // Step 2: Find specific chirp via it's id
  models.Chirp.findById(req.params.id).then((chirp) =>{

  // Steps 3: Update specific chirp with new text from the formData
    chirp.updateAttributes(formData).then(() => {

      // Step 4: Redirect to show all chirps page
      res.redirect("/chirps");

      });
    });
});

//Delete a chirp

app.delete("/chirps/:id", (req, res) => {

  models.Chirp.findById(req.params.id).then((chirp) => {

    chirp.destroy().then(() => {

      res.redirect("/chirps");

    });
  });
});

app.listen(process.env.PORT || 3000);
