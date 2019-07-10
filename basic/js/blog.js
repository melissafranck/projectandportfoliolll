//document.querySelector("#blog h2").innerHTML = "New Text";

//ajax to load json file
let xhr = new XMLHttpRequest();
xhr.onload = function(){
//save json data
let data = JSON.parse(xhr.responseText);
   
//insert the html articles
let articleSection = document.querySelector('#blog');
    
//link json file parameters
if(articleSection){
    let articles = '';
    
    //loops through json data
    for(let i=0; i < data.articles.length; i++){
       articles += '<article>';
        
        //adds images
        articles += '<p class="thumnail"><img src="' + data.articles[i].image + '"alt="' + data.articles[i].title + '"></p>';
        
        //adds title
        articles += '<h3>' + data.articles[i].title + '</h3>';
        
        //adds description
        articles += '<p>' + data.articles[i].description + '</p>';
        
        //adds key values
        articles += '<dl>'; 
        
        articles += '<dt>Author:</dt>';      
        articles += '<dd>' + data.articles[i].author + '</dd>';
        
        articles += '<dt>Comments:</dt>';
        articles += '<dd>' + data.articles[i].comments + '</dd>';
        
        articles += '<dt>Time:</dt>';
        articles += '<dd>' + data.articles[i].time + '</dd>';
        
        articles += '</dl>';
        
        articles += '</article>';
    }
    
    articleSection.querySelector('h2').insertAdjacentHTML('afterend', articles);
}   
}
//call ajax
xhr.open('GET', 'https://melissafranck.github.io/mindfuldata.json', true)
xhr.send(null);