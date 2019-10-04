
var movies = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

// Function for displaying movie data
function renderButtons() {

  $("#buttons-view").empty();

  for (var i = 0; i < movies.length; i++) {

    var a = $("<button>");
    a.addClass("movie");
    a.attr("data-name", movies[i]);
    a.text(movies[i]);
    $("#buttons-view").append(a);
  }
};

// This function handles events where one button is clicked
$("#add-movie").on("click", function (event) {
  event.preventDefault();
  var movie = $("#movie-input").val().trim();
  movies.push(movie);
  renderButtons();
});

renderButtons();

function giphySearch() {
  var movie = $(this).attr("data-name");
  var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rusCH39FBwAZCCAbjio1hsKdu3nXRq6d&q="
    + movie + "&limit=10&rating=G&lang=en";
  console.log(movie);
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

$(document).on("click", ".movie", giphySearch);

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