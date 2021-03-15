require('seneca')()
  .add(
    { say:"hello"},
      function( message, done )
        {
          done( null, {message:'hello'} )
        })
    .listen()