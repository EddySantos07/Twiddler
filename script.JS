$(document).ready(function () {

  var $body = $('body');

  var index = streams.home.length - 1;

  // $body.html('');

  // var person



  function displayUserTweets() {

    let name = $(this).text().trim()

    let currentIndex = streams.users[name].length - 1;

    console.log(streams.users[name][0].message)
    console.log(streams.users[name].length, streams.users[name], streams.users[name][currentIndex].message)

    let middleDiv = $('#mid');

    middleDiv.empty();

    console.log(streams, '---------------------------')
    console.log(streams.users[name].length)


    getTweetsInArr(streams.users[name]);

  }

  function getTweetsInArr(arr) {

    for (let i = arr.length -1; i >= 0; i-- ) {

      // console.log(arr[i].user)

      let user = $(`<div class="user"> <b> ${arr[i].user} </b> </div>`);

      let message = $(`<div class='message'> ${arr[i].message} </div> `);

      let whenCreated = $(`<div class = 'created_at'> ${arr[i].created_at} </div> `);

      let tweet = $('<div class="tweet"> </div>');

      $(tweet).append(user,message);

      $(tweet).appendTo('#mid');

    }

  }

  function refreshPage () {

  }


  // var index = streams.home.length - 1;
  function displayAllTweets() {
    while (index >= 0) {
      var tweet = streams.home[index];

      let user = $(`<div class="user"> <b> ${tweet.user} </b> </div>`);

      let message = $(`<div class='message'> ${tweet.message} </div> `);

      let whenCreated = $(`<div class = 'created_at'> ${tweet.created_at} </div> `);

      var $tweet = $('<div class="tweet"> </div>');

      // $tweet.text('@' + tweet.user + ': ' + tweet.message);

      $($tweet).append(user, message);
      $($tweet).appendTo('#mid');

      user.on("click", displayUserTweets)

      index -= 1;
    }

  }

  displayAllTweets()
});

