var q = 'tasks';

var url = process.env.CLOUDAMQP_URL || "amqp://localhost";
var open = require('amqplib').connect(url);

require('seneca')()
        .add(
            { say:"hello"},
              function( message, done )
                {
                    open.then(function(conn) {
                      var ok = conn.createChannel();
                      ok = ok.then(function(ch) {
                        ch.assertQueue(q);
                        ch.sendToQueue(q, new Buffer('something to do'));
                      });
                      return ok;
                    }).then(null, console.warn);
                    done( null, {message:'hello'} )
                })
        .add(
            { say:"triggerqueue"},
              function( message, done )
                {
                  done( null, {message:'hello'} )
                })
        .add(
            { say:"goodbye"},
                function( message, done )
                {
                    done( null, {message:'goodbye'} )
                })
    .listen(process.env.PORT || 10101)