const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({
    region: 'ap-northeast-1'
});

exports.handler = (event, context) => {
    const params = {
        TableName: 'userTable'
    };

    console.log("event:", event);
    dynamo.scan(params, function(err, data) {
        console.log("dynamo_data:", data);
        console.log("dynamo_err:", err);
        context.done(null, data);
    });
};
