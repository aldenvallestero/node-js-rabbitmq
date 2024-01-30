const amqp = require('amqplib/callback_api')

function isError(e) {
  if (e) throw e
}

amqp.connect('amqp://localhost', function(error0, connection) {
  console.log('connecting...')
  isError(error0)
  console.log('connected!')
  connection.createChannel(function(error1, channel) {
    console.log('creating channel...')
    isError(error1)
    console.log('channel created!')
    var queue = 'hello'
    var message = 'Hello world'

    channel.assertQueue(queue, {
      durable: false
    });

    channel.sendToQueue(queue, Buffer.from(message))
    console.log("Sent:", message)
  
    setTimeout(function() {
      connection.close();
      process.exit(0)
    }, 500);
  });
});
