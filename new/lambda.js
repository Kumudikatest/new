let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'Test1'
    }, function (error, connection) {
        if (error) {
            throw error;
        }
        connection.end();
    });



    callback(null, { "message": "Successfully executed" });
}