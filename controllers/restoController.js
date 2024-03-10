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
 * Return restaurant page
 */
exports.viewResto = (req, res) => {
    // Get restaurant number
    const id = parseInt(req.params.id);
    // Return restaurant based on the number
    res.sendFile(path.join(__dirname, '../views/resto-view-page_' + id + '.html'));
};

/**
 * Search Restaurant
 */
exports.searchResto = (req, res) => {
    // Get restaurant search value
    const searchValue = req.params.value;

    // Add logic below and model connection

    // Return restaurant based on the number
    res.sendFile(path.join(__dirname, '../views/resto-view-page_' + id + '.html'));

    /**
     * You can also use this if you want to return a page with additional value
     */

    //res.render(resto-view-page_1.html', <value_here_your_choice>);
};
