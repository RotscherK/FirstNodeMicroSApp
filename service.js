require('seneca')()
  .add(
    { say:"hello"},
      function( message, done )
        {
          done( null, {message:'hello'} )
        })
    .listen(process.env.PORT || 10101)