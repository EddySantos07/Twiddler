$(document).ready(function () {

  var $body = $('body');

  var index = streams.home.length - 1;

  // $body.html('');

  // var person



  function displayUserTweets(user) {

    // let name = $(this).text().trim();
    let name = $(user).text().trim();
    // console.log($(user).text().trim())
    let currentIndex = streams.users[name].length - 1;

    console.log(streams.users[name][0].message)
    console.log(streams.users[name].length, streams.users[name], streams.users[name][currentIndex].message)

    let middleDiv = $('#mid');

    middleDiv.empty();

    console.log(streams, '---------------------------')
    console.log(streams.users[name].length)


    getTweetsInArr(streams.users[name]);

    $('#userButtonRefresh').on('click', function () {
      displayUserTweets(user);
    });

  }

  function getTweetsInArr(arr) {

    $('#mid').append(` <div class='row'> <h1> ${arr[0].user} Tweets   </h1>   </div> `);

    // $('.row').append()

    let buttonRefresh = $(`<button id='userButtonRefresh'> refresh </button>`);

    $('.row').append(buttonRefresh)

    for (let i = arr.length - 1; i >= 0; i--) {

      let user = $(`<div class="user"> <b> ${arr[i].user} </b> </div>`);

      let message = $(`<div class='message'> ${arr[i].message} </div> `);

      let whenCreated = $(`<div class = 'created_at'> ${arr[i].created_at} </div> `);

      let tweet = $('<div class="tweet"> </div>');

      $(tweet).append(user, message, whenCreated);

      $(tweet).appendTo('#mid');

    }



    $('.row').append(' <button class="homeButton" id="homeButtonRefresh"> see new posts </button>');

    $('.homeButton').on('click', function () {
      index = streams.home.length - 1;

      $('#mid').empty()


      $('#mid').append('<div class="homeFeed" id="feed" > Your Feed! </div> ')

      $('#feed').append(' <button class="homeButton" id="homeButtonRefresh"> see new posts </button>');

      displayAllTweets()
    });

  }




  function displayAllTweets() {

    // $('#mid').append(`<div id='feed'> Your Feed! </div>  `);

    // let buttonRefresh = $(`<button class='homeButton'id='homeButtonRefresh'> refresh home! </button>`);

    // $('#feed').append(buttonRefresh);

    function refreshHome() {
      // $('#feed').append(buttonRefresh);



      while (index >= 0) {
        console.log('called',streams.home.length)

        var tweet = streams.home[index];

        let user = $(`<div class="user"> <b> ${tweet.user} </b> </div>`);

        let message = $(`<div class='message'> ${tweet.message} </div> `);

        let whenCreated = $(`<div class = 'created_at'> ${tweet.created_at} </div> `);

        var $tweet = $('<div class="tweet"> </div>');

        $($tweet).append(user, message, whenCreated);

        $($tweet).appendTo('#mid');

        user.on("click", function () {
          displayUserTweets(user)
        })

        index -= 1;
      }

      $('.homeButton').on('click', function () {
        index = streams.home.length - 1;
        // console.log(streams.home.length)
        $('#mid').empty()

        $('#mid').append('<div class="homeFeed" id="feed" > Your Feed! </div> ')

        $('#feed').append(' <button class="homeButton" id="homeButtonRefresh"> see new posts </button>');

        refreshHome();
      });

    }

    refreshHome();

    // $('.homeButton').on('click', function () {
    //   index = streams.home.length - 1;

    //   $('#mid').empty()

    //   $('#mid').append('<div class="homeFeed" id="feed" > Your Feed! </div> ')

    //   $('#feed').append(' <button class="homeButton" id="homeButtonRefresh"> refresh home! </button>');

    //   refreshHome();
    // });
  }


  displayAllTweets()
});

