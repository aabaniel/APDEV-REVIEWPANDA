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

// Controller methods

/**
 * Returns login page
 */
exports.getLoginPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/login.html'));
};

/**
 * Returns register page
 */
exports.getRegisterPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../views/register.html'));
};

/**
 * Login user
 */
exports.loginUser = (req, res) => {
  // Fetched the login form values
  const username = req.query.username;
  const password = req.query.password;

  // Insert model connection below

  /**
   * Assuming model returns true that the user credentials is correct go to correct route.
   * Go to index.js to see routes
   */
  return res.redirect('/');
};

/**
 * Reigster user
 */
exports.registerUser = (req, res) => {
  // Fetched the register form values
  const username = req.query.username;
  const password = req.query.password;

  // Insert model connection below

  /**
   * Assuming model returns true meaning sucessfully regsitered, go to correct route.
   * Go to index.js to see routes
   */
  return res.redirect('/login');
};

/**
 * Logout user
 */
exports.logoutUser = (req, res) => {
  // Insert logout logic and model if needed

  /**
   * If model processed successfully
   * Go to index.js to see routes
   */
  return res.redirect('/login');
};
