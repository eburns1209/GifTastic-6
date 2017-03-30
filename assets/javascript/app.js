 $(document).ready(function(){
 // Initial array of movies
      var animals = [];

      // displayMovieInfo function re-renders the HTML to display the appropriate content
      function displayAnimalInfo(){
     // function alertAnimalName(){
     
        var animalName = $(this).data("animal");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=dc6zaTOxFJmzC&limit=10";

        // alert(animalName);

        $.ajax({
          url: queryURL, 
          method: "GET"
        }).done(function(response){
          console.log(response);
          
          $("#GifArea").html("");

          for(var i =0; i<response.data.length;i++){
            var searchDiv = $('<div class="search-item">');

            var rating = response.data[i].rating;
            var p = $('<p>').text("Rating: " + rating);

           
            var still = response.data[i].images.fixed_height_still.url     // for still
            var animated = response.data[i].images.fixed_height.url  // for animated=
            // e
            // var img = response.data[i].images.url;
            // // img.addClass('searchImage');
            var img = $("<img>");
            img.attr("src", still);
            img.attr("data-still", still);
            img.attr("src", animated);
            img.attr("data-state", 'still');
            img.addClass("searchImage");
            searchDiv.append(p);
            searchDiv.append(img);
            $("#GifArea").append(searchDiv);
          }
        })
      }
      
      $(document).on("click", "animal", function(){
        var state = $(this).data("searchImage");
          
          if(state == 'animated'){
            console.log(state);
            $(this).attr('data-state', $(this).attr('still'));
          //   $(this).attr('data-state', 'still');
          // }else{
          //   $(this).attr('src', $(this).data('data-animated'));
          //   $(this).attr('data-animated', 'animated');
          }
      })//closed on click for pause
      
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
    $(document).on("click", ".animal", displayAnimalInfo);
     console.log('test');
     // $("#GifArea").append(animalName);
      // Calling the renderButtons function to display the intial buttons
     
     		
		
renderButtons();
 })

