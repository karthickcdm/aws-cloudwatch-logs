# aws-cloudwatch-logs
Simple NodeJS service for AWS Cloudwatch logs
## 

To Start application 

node aws-cloudwatchlogs.js


## Sample function to call write the logs
app.use((req, res, next) => {
        logger.log('info', `Sample Logs`, {tags: 'tag', message: {info: 'Additional Info' }}, level: 1);
        next()      
})
