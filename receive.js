var amqp = require('amqplib/callback_api')

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

    channel.assertQueue(queue, {
      durable: false
    })

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue)

    channel.consume(queue, function(msg) {
      console.log("Received", msg.content.toString())
    }, {
      noAck: true
    })
  })
})