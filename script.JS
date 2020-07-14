$(document).ready(function () {

  var $body = $('body');

  var index = streams.home.length - 1;

  // $body.html('');

  // var person



  function displayUserTweets () {

    var index = streams.home.length - 1;

    let name =  $(this).text().trim()

    let currentIndex = streams.users[name].length-1;

    console.log(streams.users[name][0].message)
    console.log(streams.users[name].length, streams.users[name],streams.users[name][currentIndex].message )

    let middleDiv = $('#mid');
    middleDiv.empty();
    console.log(streams, '---------------------------')

    while (index >= 0) {
      var tweet = streams.home[index];
      console.log(index , )

      let user = tweet.user;

      index -= 1;
    }
  }


  // var index = streams.home.length - 1;
  while (index >= 0) {
    var tweet = streams.home[index];

    let user = $(`<div class="user"> <b> ${tweet.user} </b> </div>`);

    let message = $(`<div class='message'> ${tweet.message} </div> `);

    let whenCreated = $(`<div class = 'created_at'> ${tweet.created_at} </div> `);

    var $tweet = $('<div class="tweet"> </div>');

    // $tweet.text('@' + tweet.user + ': ' + tweet.message);

    $($tweet).append(user, message);
    $($tweet).appendTo('#mid');

    user.on("click",displayUserTweets  )

    index -= 1;
  }


});

