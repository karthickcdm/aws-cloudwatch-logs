var winston = require('winston')
const CloudWatchTransport = require('winston-aws-cloudwatch');

var NODE_ENV = process.env.NODE_ENV || 'development';

const logger = winston.createLogger({
  transports: [
    new CloudWatchTransport({
      logGroupName: '...', // REQUIRED
      logStreamName: '...', // REQUIRED
      createLogGroup: true,
      createLogStream: true,
      submissionInterval: 2000,
      submissionRetryCount: 1,
      batchSize: 20,
      awsConfig: {
        accessKeyId: process.env.CLOUDWATCH_ACCESS_KEY_ID,
        secretAccessKey: process.env.CLOUDWATCH_SECRET_ACCESS_KEY,
        region: process.env.CLOUDWATCH_REGION
      },
      formatLog: item =>
        `${item.level}: ${item.message} ${JSON.stringify(item.tags)}`
    })
  ]
})

module.exports = logger;