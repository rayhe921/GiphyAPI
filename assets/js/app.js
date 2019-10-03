
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
      $("#add-movie").on("click", function(event) {
        event.preventDefault();

      
        var movie = $("#movie-input").val().trim();
        movies.push(movie);
        renderButtons();
      });

      renderButtons();