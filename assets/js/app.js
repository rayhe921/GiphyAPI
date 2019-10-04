
var games = ["Super Mario", "Pokemon", "Street Fighter", "Final Fantasy"];

// Function for displaying movie data
function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < games.length; i++) {

    var a = $("<button>");
    a.addClass("game");
    a.attr("data-name", games[i]);
    a.text(games[i]);
    $("#buttons-view").append(a);
  }
};

// This function handles events where one button is clicked
$("#add-game").on("click", function (event) {
  event.preventDefault();
  var game = $("#game-input").val().trim();
  games.push(game);
  renderButtons();
});

renderButtons();

function giphySearch() {
  var game = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rusCH39FBwAZCCAbjio1hsKdu3nXRq6d&q="
    + game + "&limit=10&rating=G&lang=en";
  console.log(game);
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log("URL", queryURL);
    console.log("response", response);

    for (i = 0; i < 10; i++) {
      var results = response.data;
      if(results.rating !== "r" && results.rating !== "pg-13"){
        var gifDiv = $("<div>");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var image = $("<img>");
        image.attr("src", results[i].images.original_still.url);
        image.attr("data-state", "still");
        image.attr("data-still", results[i].images.original_still.url);
        image.attr("data-animate", results[i].images.original.url);
        image.addClass("imageButton");
        gifDiv.append(p);
        gifDiv.append(image);

        $("#images").prepend(gifDiv);
      }
      
      
    }

    $("#images").prepend(image);

  })
};

$(document).on("click", ".game", giphySearch);

function gifStart(){
var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else{
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  };

$(document).on("click", ".imageButton", gifStart);