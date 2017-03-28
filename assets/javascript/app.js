 // Initial array of movies
      var animals = ["fish"];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      // function displayAnimalInfo()
     // function alertAnimalName(){
      $(document).ready(function(){
      var animalName = $(this).data("data-animal");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

      // alert(animalName);

      $.ajax({
        url: queryURL, 
        method: "GET"
      }).done(function(response){
        console.log(response);

        // for(var i =0; i<response.data.length;i++){
        //  var searchDiv = $('<div class="search-item">');

        // var rating = response.data[i].rating;
        // var p = $('<p>').text("Rating: " + rating);
        // }

        // var animalDiv = $('<div class="animal">');

        // var rating = response.rated;

        // animalDiv.append(rating);

        // alert(rating);
      })
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
      $("#add-animal").on("click", function(event) {
        
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var animal = $("#animal-input").val().trim();

        // The movie from the textbox is then added to our array
        animals.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();
      });

      // Adding click event listeners to all elements with a class of "animal"
    $(document).on("click", ".animal");
     console.log('test');
     // $("#GifArea").append(animalName);
      // Calling the renderButtons function to display the intial buttons
     
     		
		
renderButtons();


