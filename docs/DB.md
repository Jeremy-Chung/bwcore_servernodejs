# DB

## API Doc
> [caminte](http://www.camintejs.com/en/guide) Cross-db ORM. The following adapters are supported so far:

1. mongodb 
1. redis
1. mysql

## Example
```
const { db } = require('minions');

// Establish db connection
const schema = db({
    driver: 'mongodb', // mongodb/redis/mysql
    host: 'localhost',
    port: 27017,
    database: 'ChatRoom',
    username: 'root',	// If necessary
    password: 'abc123',	// If necessary
});

// Define model
const Message = schema.define('message', {
    userId:    { type: schema.String,  limit: 255 },
    content:   { type: schema.Text },
    timestamp: { type: schema.Number, default: Date.now() },
});

// Create New Data
const result = Message.create({
    userId: messagePayload.userId,
    content: message,
}, function (err) {
    if (err) {
        console.error(err);
    }

	// Query Data
	const Query = Message.findOne();
	Query.run({}, function(err, post){
		// your code here
		console.log(post);
	});
});
```