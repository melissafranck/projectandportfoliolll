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
            console.log(data);

        //adds description
        articles += '<p>' + data.description + '</p>';
        
      //adds key values
        articles += '<dl>'; 
        
        articles += '<dt>Compatibility:</dt>';      
        articles += '<dd>' + data.compatibility + '</dd>';
        
        articles += '<dt>Moods:</dt>';
        articles += '<dd>' + data.mood + '</dd>';
        
        articles += '<dt>Lucky Time:</dt>';
        articles += '<dd>' + data.lucky_time + '</dd>';
        
        //read more buttons
        articles += '<button><a href="http://astrology.kudosmedia.net/m/aries?day=today">Read More</a></button>';
        
        articles += '</dl>';
        
        articles += '</article>';
    }
    
    articleSection.querySelector('h3').insertAdjacentHTML('afterend', articles);
 }


//call ajax
xhr.open('POST', 'https://aztro.sameerkumar.website/?sign=aries&day=today', true);
xhr.send(null);
