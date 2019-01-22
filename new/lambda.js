let AWS = require('aws-sdk');
const cognito_idp = new AWS.CognitoIdentityServiceProvider();
let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = function (event, context, callback) {
    cognito_idp.listUsers({
        UserPoolId: "us-east-1_uVXTQInep",
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
            console.log(error);
        }
        // your logic goes within this block
    });

    cognito_idp.listUsers({
        UserPoolId: "us-east-1_uVXTQInep",
        Limit: "10"
    }, function (error, data) {
        if (error) {
            // implement error handling logic here
            throw error;
            console.log(error);
        }
        // your logic goes within this block
    });


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