function getData() {

    var input = $('#searchtext').val()

    var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=wmjmmD2VxQQQQHscbOOsoXe29b7p2xaN&limit=10");


    xhr.done(function(response) { 

        console.log("success got data", response); 

        var gifs = response.data

        for (i = 0; i < gifs.length; i++) {
            $('.inner').append("<img src='"+gifs[i].images.original.url+"'/>")
        }

    });

}