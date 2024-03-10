// Import the 'path' module to resolve file paths
const path = require('path');

/**
 * Parse incoming request bodies in a middleware before your handlers, 
 * available under the req.body property.
 */
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Returns home page
 */
exports.getHomePage = (req, res) => {
  // Add logic here if you are going to fetch the list of restaurants for the homepage

  // Return home page
  res.sendFile(path.join(__dirname, '../views/home.html'));

  /**
   * You can also use this if you want to return a page with additional value
   */

  //res.render('home.html', <value_here_your_choice>);
};

/**
 * Returns profile page
 */
exports.viewProfile = (req, res) => {
  // Get profile number
  const id = parseInt(req.params.id);

  // Return profile based on the number
  res.sendFile(path.join(__dirname, '../views/profile-view-page_' + id + '.html'));

  /**
   * You can also use this if you want to return a page with additional value
   */

  //res.render('profile-view-page_1.html', <value_here_your_choice>);
};

/**
 * Edit Profile
 */
exports.editProfile = (req, res) => {
  // Get Profile Parameters for editing profile, you can change this part with the correct data needed.
  const id = parseInt(req.params.id); // User ID
  const profile_picture = req.params.profile_picture; // Profile picture
  const description = req.params.description; // Profile description

  // Return profile as long as model successfully edited the profile, add logic depending on model
  res.sendFile(path.join(__dirname, '../views/profile-view-page_' + id + '.html'));

  /**
   * You can also use this if you want to return a page with additional value
   */
  
  //res.render('profile-view-page_1.html', <value_here_your_choice>);
};
