'use strict'
const AWS = require('aws-sdk');

// first set the config region to the one your using
AWS.config.update({region: "us-east-1"});

exports.handler = function (event, context, callback) {
   const donodb = new AWS.DynamoDB({apiVersion: "2012-10-08"});
   const documentClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"});
   
   const params = {
       TableName: "Users",
       Key: {
           id: "2468"
           
       }
   }
   try {
        const data = documentClient.get(params).promise();
        console.log(data);

   }catch (err) {
    console.log(err)
   }
  
}