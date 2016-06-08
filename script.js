var input=document.getElementById('search');
var collector=document.getElementById('center_column')
var results;
$('#submit').click(function(){
    console.log(input.value);
    var searchUrl="http:www.omdbapi.com/?s="+input.value
    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function(){
      if (httpRequest.readyState === 4) {
        if(httpRequest.status < 400) {
          results=JSON.parse(httpRequest.responseText);
          displayPosters();
      }
    }
  };
  httpRequest.open('GET', searchUrl);
  httpRequest.send();
})

function displayPosters(){
  console.log(results);
  collector.innerHTML="";
  for(var i=0; i< results.Search.length; i++){
    var image=document.createElement('img');
    image.setAttribute('class', 'movie_poster');
    image.setAttribute('src', results.Search[i].Poster);
    $(".movie_poster").error(function(){
            $(this).attr('src', './mockups/images/no_image.png');
    });
    collector.appendChild(image);
  }
}
