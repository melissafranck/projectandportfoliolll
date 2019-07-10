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
        
        articles += '</article>';
    }
    
    articleSection.querySelector('h2').insertAdjacentHTML('afterend', articles);
}   
}
//call ajax
xhr.open('GET', 'https://melissafranck.github.io/mindfuldata.json', true)
xhr.send(null);