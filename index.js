// Import express
const express = require('express');
const app = express();
// Use 3000 for port
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// List of controllers
const userController = require('./controllers/userController');
const commonController = require('./controllers/commonController');
const restoController = require('./controllers/restoController');
const reviewController = require('./controllers/reviewController');

// Routing
/**
 * GET METHODS
 */
app.get('/', userController.getHomePage);

// Login
app.get('/login', commonController.getLoginPage);
app.get('/logout', commonController.logoutUser);
app.get('/loginUser', commonController.loginUser);

// Register
app.get('/register', commonController.getRegisterPage);
app.get('/registerUser', commonController.registerUser);

// Restaurant
app.get('/resto/:id', restoController.viewResto);
app.get('/search/:id', restoController.viewResto);

// Profile
app.get('/profile/:id', userController.viewProfile);
app.get('/profile/edit/:id', userController.editProfile);

// Reviews
app.get('/createReview', reviewController.createReview);
app.get('/edit', reviewController.editReview);
app.get('/delete', reviewController.deleteReview);
app.get('/getReviews', reviewController.getReviews);
app.get('/reviewHelpful', reviewController.reviewHelpful);


/**
 * POST METHODS
 */

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
