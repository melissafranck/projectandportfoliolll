//document.querySelector("#blog h2").innerHTML = "New Text";

//ajax to load json file
let xhr = new XMLHttpRequest();
xhr.onload = function(){
//save json data
let data = JSON.parse(xhr.responseText);
   
//insert the html articles
let articleSection = document.querySelector('#blog');   
    
}
//call ajax
xhr.open('GET', 'https://melissafranck.github.io/mindfuldata.json', true)
xhr.send(null);