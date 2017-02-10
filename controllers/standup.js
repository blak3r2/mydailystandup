'use strict';

/**
 * Module Dependencies
 */

var User          = require('../models/User');
var passportConf  = require('../config/passport');
var timePieces = require('../lib/time-pieces');

/**
 * Admin Pages Controller
 */

module.exports.controller = function (app) {

    /**
     * GET /standup
     * Render Dashboard Page
     */
    app.get('/standup', passportConf.isAuthenticated, function (req, res) {
        timePieces.fetch( req.user, req.params, function(err, timePieces) {
            console.log(timePieces);
            if (err) {
                return (err, null);
            }
            res.render('standup/dayview', {
                url: '/standup',  // to set navbar active state
                timePieces: timePieces
            });
        });
    });
};