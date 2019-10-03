
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

function giphySearch(){
var movie = $(this).attr("data-name");
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=rusCH39FBwAZCCAbjio1hsKdu3nXRq6d&q="
+ movie + "&limit=10&rating=G&lang=en";
console.log(movie);
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response){
  console.log("URL", queryURL);
  console.log("response", response);
})
};

$(document).on("click", ".movie", giphySearch);
