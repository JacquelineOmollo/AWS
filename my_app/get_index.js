'use strict'
const AWS = require('aws-sdk');

// first set the config region to the one your using
AWS.config.update({region: "us-east-1"});

exports.handler = function (event, context, callback) {
   const donodb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
   const params = {
       TableName: "Users",
       Key: {
           id: {
               S: "2468"
           }
       }
   }
   donodb.getitem(params, (err, data) => {
       if (err) {
            console.log(err);
         }
         console.log(data)
   })

}