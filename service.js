require('seneca')()
  .add(
    { say:"hello"},
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