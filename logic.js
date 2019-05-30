
// $(document).ready(function(){

topics = ["Pikachu", "Eevee", "Meowth", "Bulbasaur", "Charmander", "Squirtle", "Snorlax", "Psyduck", "Dugtrio", "Togepi"];

topics.forEach(createHTML)

$(".pokebutton").on("click", function(){getData($(this).attr("id"))});


function createHTML(pokemon) {
    $('.pokebuttons').append("<button class='pokebutton' id = " + pokemon + ">" + pokemon + "</button>");
}

function getData(input) {
    console.log(input)

    // var input = $('#searchtext').val()

    var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=wmjmmD2VxQQQQHscbOOsoXe29b7p2xaN&limit=10");


    xhr.done(function(response) { 

        console.log("success got data", response); 

        var gifs = response.data

        for (i = 0; i < gifs.length; i++) {
            $('.inner').prepend("<img src='"+gifs[i].images.original.url+"'/>")
        }

    });

}


// });
