
// $(document).ready(function(){

topics = ["Pikachu", "Eevee", "Meowth", "Bulbasaur", "Charmander", "Squirtle", "Snorlax", "Psyduck", "Dugtrio", "Togepi"];

topics.forEach(createHTML)

$("#addpokemon").on("click", function(){
    var input = $('#searchtext').val();
    topics.push(input);
    $('.pokebuttons').empty()
    topics.forEach(createHTML)
})
$(".pokebutton").on("click", function(){getData($(this).attr("id"))});

function createHTML(pokemon) {
    $('.pokebuttons').append("<button class='pokebutton' id = " + pokemon + ">" + pokemon + "</button>");
    $(".pokebutton").on("click", function(){getData($(this).attr("id"))});
}

function getData(input) {
    // console.log(input)

    // // var input = $('#searchtext').val()

    // var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=wmjmmD2VxQQQQHscbOOsoXe29b7p2xaN&limit=10");


    // xhr.done(function(response) { 

    //     console.log("success got data", response); 

    //     var gifs = response.data
    //     for (i = 0; i < gifs.length; i++) {
    //         $('.inner').prepend("<img class='pokegif' src='"+gifs[i].images.fixed_height_still.url+"' data-state='still'/>")
    //         var URL_still = "gifs[i].images.fixed_height_still.url";
    //         var URL_animate = "gifs[i].images.original.url"
    //         $(".pokegif").on("click", function() {

    //             var state = $(this).attr("data-state");
    
    //             if (state === "still") {
    //             //   $(this).attr("src", $(this).attr("data-animate"));
    //               $(this).attr("src", URL_still)
    //               $(this).attr("data-state", "animate");
    //             } else {
    //             //   $(this).attr("src", $(this).attr("data-still"));
    //               $(this).attr("src=", URL_animate)
    //               $(this).attr("data-state", "still");
    //             }
    //           });
    //     }

    //     return gifs[1]


      

    // });



    var pokemon = input;


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      pokemon + "&api_key=wmjmmD2VxQQQQHscbOOsoXe29b7p2xaN&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    })

      .then(function(response) {
        console.log(queryURL);

        console.log(response);

        var results = response.data;


        for (var i = 0; i < results.length; i++) {


          var pokemonDiv = $("<div>");


          var p = $("<p>").text("Rating: " + results[i].rating);


          var pokemonImage = $("<img>");

          pokemonImage.attr("src", results[i].images.fixed_height_still.url);
          pokemonImage.attr("data-state", "still")
          pokemonImage.on("click", function() {

            var state = $(this).attr("data-state");

            if (state === "still") {
            //   $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("src", results[i].images.fixed_height.url)
              $(this).attr("data-state", "animate");
            } else {
            //   $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("src", results[i].images.fixed_height_still.url)
              $(this).attr("data-state", "still");
            }
          });

          pokemonDiv.append(p);
          pokemonDiv.append(pokemonImage);

          $(".inner").prepend(pokemonDiv);
        }
      });

}


// });
