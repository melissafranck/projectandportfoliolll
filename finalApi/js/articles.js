//header
document.querySelector("#blog h2").innerHTML = "House of <strong>Stars</strong>";

//ajax to load json file
let xhr = new XMLHttpRequest();
xhr.onload = function(){
//save json data
let data = JSON.parse(xhr.responseText);
    
    //insert the html articles
let articleSection = document.querySelector('#blog');
    let articles = '';

//link json file parameters
if(articleSection){
    
    
       articles += '<article>';
       
        //adds title
        articles += '<h3>' + data.date_range + '</h3>';
            console.log(data.date_range);

        //adds description
        articles += '<p>' + data.description + '</p>';
        
   /*     //adds key values
        articles += '<dl>'; 
        
        articles += '<dt>Author:</dt>';      
        articles += '<dd>' + data.articles[i].author + '</dd>';
        
        articles += '<dt>Comments:</dt>';
        articles += '<dd>' + data.articles[i].comments + '</dd>';
        
        articles += '<dt>Time:</dt>';
        articles += '<dd>' + data.articles[i].time + 'min</dd>';
        
        //read more buttons
        articles += '<button><a href="https://google.com">Read More</a></button>';
        
        articles += '</dl>';
        
        articles += '</article>';*/
    }
    
    articleSection.querySelector('h3').insertAdjacentHTML('afterend', articles);
 }


//call ajax
xhr.open('POST', 'https://aztro.sameerkumar.website/?sign=aries&day=today', true);
xhr.send(null);
