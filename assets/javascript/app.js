 // Initial array of movies
      var animals = ["fish"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      // function displayAnimalInfo()
      $(document).on("click", function(){

        var type = $(this).data('type');
        var queryURL = "http://api.giphy.com/v1/stickers/random?q=" + type + "cat&api_key=dc6zaTOxFJmzC&limit=10";

        // Creates AJAX call for the specific movie button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          console.log(response);
          
        });

      })

      // Function for displaying movie data
      function renderButtons() {

        // Deletes the movies prior to adding new movies
        // (this is necessary otherwise you will have repeat buttons)
        $("#animal-buttons").empty();
        // Loops through the array of movies
        for (var i = 0; i < animals.length; i++) {

          // Then dynamicaly generates buttons for each movie in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("animal");
          // Added a data-attribute
          a.attr("data-animal",animals[i]);
          // Provided the initial button text
          a.text(animals[i]);
          // Added the button to the buttons-view div
          $("#animal-buttons").append(a);
        }
      }

      // This function handles events where the add movie button is clicked
      $("#add-animal").on("click", function() {
        
        // This line of code will grab the input from the textbox
        var animal = $("#animal-input").val().trim();

        // The movie from the textbox is then added to our array
        animals.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "animal"
    function pictures(){
      $(".animal").on("click", function(){
      	var user = $(this);
      	var user_pick = user.data("animal");

      	$("#GifArea").append(user_pick);
      });
  	}
      console.log('test');
      // Calling the renderButtons function to display the intial buttons
     
      pictures();
	  

		var animal = $("#animal-input").val().trim();

		
renderButtons();



