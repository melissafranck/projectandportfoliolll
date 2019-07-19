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

//changing image via previous button
function previousImage(event) {
	
	// find current image
	let thumbnails = document.querySelectorAll('.pagination li');
	let activeIndex; 
	let activeListItem; 
    
    //for loop changing image
	for (let i=0; i < thumbnails.length; i++) {
		if (thumbnails[i].className == 'active') {
			activeIndex = i;
			activeListItem = i + 1;
		}
    }
    
    //determine previous image
    if (activeIndex <= 1) {
		let previousIndex = 5;
		let previousListItem = 6;
	} else {
		let previousIndex = activeIndex - 1;
		let previousListItem = activeListItem - 1;		
	}
    
    //changing large image
    let image = document.querySelector('.pagination li:nth-of-type(' + previousListItem + ') img').src;
	let largeImage = document.querySelector('#gallery img');
	largeImage.src = image;
    
    //changing active indicator
    document.querySelector("#gallery .active").classList.remove("active");
	let parent = document.querySelector('.pagination li:nth-of-type(' + previousListItem + ')');
	parent.className = 'active';
}

//adding event listeners too all the thumbnails
let thumbnails = document.querySelectorAll('.pagination img');

//looping to add event listeners
for (var i=0; i < thumbnails.length; i++) {
	thumbnails[i].addEventListener("click", changeImage);
}

//adding the event to the next and previous buttons
let next = document.querySelector('.pagination li:last-of-type button');
next.addEventListener("click", nextImage);

let previous = document.querySelector('.pagination li:first-of-type button');
previous.addEventListener("click", previousImage);