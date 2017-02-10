var _ = require('lodash');
var async = require('async');

var mockTimePieces = [
    {date: new Date(), type: "issue", subject: "Worked on xyz", body: "1. Did a burn mode click to dial to a Next Record. it failed cause it’s a n..." },
    {date: new Date(), type: "email", subject: "#7610 grafana - improve the usability of...", body: "Wrote a bunch out and closed the tab before i saved it...Discovered that fl..."}
];

/**
 *
 * @param {User} user the user object to fetch for
 * @param {Object} opts
 * @param {Date} opts.startTime if not specified, defaults to 24 hours from now.
 * @param {Date} [opts.endTime] if not specified, defaults to present time.
 * @param {Function} callback(err, [TimePieces])
 */
exports.fetch = function( user, opts, callback ) {
    return callback(null, mockTimePieces);
};

