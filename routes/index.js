// OK
const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");
const loginController = require("../controllers/loginController");

// API Routes
const developersController = require("../controllers/developersController");
const projectsController = require("../controllers/projectsController");
const notesController = require("../controllers/notesController");

//API Routes

// 0-0-0-0-0-0-0-0-0-0-0-0-0--0-0-0-0-0-0-0-0--0--0-0-0-0-0-0-0-0-
// 00-- PROJECT ROUTES --00

//Create a new project
router
.route("/api/projects")
.post(projectsController.create)
.get(projectsController.findAll);

router
.route("/api/projects/:id")
.put(projectsController.update)
.get(projectsController.findProject);

// router
// .route("/api/project/:id")
// .get(projectsController.findProject);

// 0-0-0-0-0-0-0-0-0-0-0-0-0--0-0-0-0-0-0-0-0--0--0-0-0-0-0-0-0-0-
// 00-- DEV ROUTES --00

//Create a new developer
router
.route("/api/developers")
.post(developersController.create)
.get(developersController.findAll);
// .get(developersController.findAll);

router.route("/api/developers")
.get(devController.findAll);

// 0-0-0-0-0-0-0-0-0-0-0-0-0--0-0-0-0-0-0-0-0--0--0-0-0-0-0-0-0-0-
// 00-- LOGIN ROUTES --00

//User Routes

// Matches with "/api/login/signup" for full tree
// Matches with "/signup" without index.js nesting 
router
.route("/signup")
.post(loginController.signUp)
.get(loginController.findAll);


// Matches with "/api/login/signin" for full tree
// Matches with "/signin" without index.js nesting
router
.route("/api/signin")
.post(loginController.signIn);


// Matches with "/api/login/verify" for full tree
// Matches with "/verify" without index.js nesting
router
.route("/api/verify")
  .post(loginController.verify);


// Matches with "/api/login/logout" for full tree
// Matches with "/logout" without index.js nesting
router
.route("/logout")
.post(loginController.logout);


// 0-0-0-0-0-0-0-0-0-0-0-0-0--0-0-0-0-0-0-0-0--0--0-0-0-0-0-0-0-0-
// 00-- NOTES --00
router
.route("api/users/notes/")
.put(notesController.saveNote)
.get(notesController.getNote);




//If no API routes are hit, send the React app
router.use(function(req, res) {
  console.log(`this just happened, in routes, index.js`)
  res.sendFile(path.join(__dirname, "../client/build/index.html"));

});


module.exports = router;

