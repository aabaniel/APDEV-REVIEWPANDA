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
 * Create Review
 */
exports.createReview = (req, res) => {
    /**
     * Use req parameter to create and store review to database,
     * you can change the parameters. This is only a sample
     */
    const id = parseInt(req.params.id); // User ID
    const review = req.params.review; // Review content
    const stars = req.params.stars; // Stars for review
    const image = req.params.image; // Image attached

    // Use this, if you will return to restaurant page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/resto-view-page_1.html'));

    // Use this, if you will return to profile page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/profile-view-page_1.html'));
};

/**
 * Edit Review
 */
exports.editReview = (req, res) => {
    /**
     * Use req parameter to edit and store review to database,
     * you can change the parameters. This is only a sample
     */
    const id = parseInt(req.params.id); // User ID
    const review = req.params.review; // Review content
    const stars = req.params.stars; // Stars for review

    // Use this, if you will return to restaurant page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/resto-view-page_1.html'));

    // Use this, if you will return to profile page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/profile-view-page_1.html'));
};

/**
 * Delete Review
 */
exports.deleteReview = (req, res) => {
    /**
     * Use req parameter to delete review to database,
     * you can change the parameters. This is only a sample
     */
    const review_id = parseInt(req.params.review_id); // Review ID

    // Use this, if you will return to restaurant page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/resto-view-page_1.html'));

    // Use this, if you will return to profile page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/profile-view-page_1.html'));
};

/**
 * Get Reviews
 */
exports.getReviews = (req, res) => {
    /**
     * Use req parameter to fetch the review informations and fetch from the database,
     * you can change the parameters. This is only a sample
     */
    
    const id = parseInt(req.params.id); // User ID
    const resto_id = parseInt(req.params.resto_id); // Resto ID

    // Use this, if you will return to restaurant page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/resto-view-page_1.html'));

    // Use this, if you will return to profile page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/profile-view-page_1.html'));
};

/**
 * Helpful Review
 */
exports.reviewHelpful = (req, res) => {
    // Use req parameter to fetch the review informations and store to database
    const id = parseInt(req.params.id); // User ID
    const review_id = parseInt(req.params.review_id); // Resto ID

    // Use this, if you will return to restaurant page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/resto-view-page_1.html'));

    // Use this, if you will return to profile page, will depend on logic
    // res.sendFile(path.join(__dirname, '../views/profile-view-page_1.html'));
};