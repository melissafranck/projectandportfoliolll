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