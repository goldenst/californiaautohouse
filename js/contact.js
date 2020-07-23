console.log('contact js loaded')

$( document ).ready(function() {
  console.log( "ready!  jq working " );

  $('#submit').click(function (e) {
    // e.preventDefault()
    console.log('clicked')


    var name = $('#name').val()
    var email = $('#email').val()
    var phone = $('#phone').val()
    var message = $('#message').val()

    console.log(name, email, phone, message)
  })

 

});
