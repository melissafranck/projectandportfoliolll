//changing the image
function changeImage(event){
    
    //setting variables
    let image = event.target.src;
    let parent = event.target.parentElement;
    let largeImage = document.querySelector('#gallery img');
    
    //change image
    largeImage.src = image;
    
    //changing active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    parent.className = 'active';
}

//event listeners for thumbnails
let thumbnails = document.querySelectorAll('.pagination img');

//for loop adding listeners
for (let i = 0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', changeImage)
}

//changing image via next button
function nextImage(event){
    
    //find current image
    let thumbnails = document.querySelectorAll('.pagination li');
    
    //js variable
    let activeIndex;
    
    //css variable
    let activeListItem;
    
    //for loop changing image
    for(let i = 0; i < thumbnails.length; i++){
        
        //conditional
        if(thumbnails[i].className == 'active'){
            activeIndex = i;
            activeListItem = i + 1;
        }
    }
    
    //conditional to determine next image
    if(activeIndex >= 5){
        let nextIndex = 1;
        let nextListItem = 2;
    } else{
        let nextIndex = activeIndex + 1;
        let nextListItem = activeListItem + 1;
    }
    
    //change the main image
    let image = document.querySelector('.pagination li:nth-of-type(' +nextListItem+ ') img').src;
    let largeImage = document.querySelector('#gallery img');
    largeImage.src = image;
    
    //changed the active indicator
    document.querySelector("#gallery .active").classList.remove("active");
    let parent = document.querySelector('.pagination li:nth-of-type(' + nextListItem + ')');
    parent.className = 'active';

}