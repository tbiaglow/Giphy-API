
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

    var pokemon = input;

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      pokemon + "&api_key=wmjmmD2VxQQQQHscbOOsoXe29b7p2xaN&limit=10";


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(queryURL);

        console.log(response);

        var results = response.data;


        for (var i = 0; i < results.length; i++) {


          var pokemonDiv = $("<div>");


          var p = $("<p>").text("Rating: " + results[i].rating);


          var pokemonImage = $("<img>");

          pokemonImage.attr("src", results[i].images.fixed_height_still.url);
          pokemonImage.attr("data-still", results[i].images.fixed_height_still.url)
          pokemonImage.attr("data-animate", results[i].images.fixed_height.url)

          pokemonImage.attr("data-state", "still")
          pokemonImage.on("click", function() {

            var state = $(this).attr("data-state");

            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });

          pokemonDiv.append(p);
          pokemonDiv.append(pokemonImage);

          $(".inner").prepend(pokemonDiv);
        }
      });

}

