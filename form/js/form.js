//header
document.querySelector("form h2").innerHTML = "<strong>reach</strong> out";

//paragraph
document.querySelector("p").innerHTML = "If you have any questions about this site, please feel free to contact us using the form below. We are always looking for ways to better serve the wellness community.";

//background image
document.body.style.backgroundImage = "url('images/drop.jpg')";

//stop submission button
function validateForm(event) {
    event.preventDefault();
    
   let fields = form.getElementsByClassName('.required');
    let valid = true;
    for(let i = 0; i < fields.length; i++){
        //if no value
        if(!fields[i].value){
            valid = false;
        }
    }
    //if it has value
    if(valid == true){
        let submit = document.querySelector('[type = submit]');
        submit.removeAttribute('class');
    }
    
}

//validation fuction
function validateForm(event){
      let target = event.target;
      let parent = target.parentElement;
      let error = '<label class="error"> Required!</label>';
      let p = document.createElement("label");
      p.classList.add("error");
    p.innerHTML = "REQUIRED!"
    
p.style.position = "inherit";    

    //conditional for validation
    if(!target.value.length){
        if(!parent.querySelector('.error')){
            console.log(this)
            
            parent.insertAdjacentHTML('beforebegin', error);
        }
    }else{
        outter.removeChild(outter.querySelector('.error'));
    }
}

//adding event listeners to each field
let requiredFields = document.querySelectorAll('.required');
for(let i = 0; i < requiredFields.length; i++){
    console.log(requiredFields[i]);
    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateForm);
}

//if checks clear, work
function send(event){
    event.preventDefault();
    
    let form = document.querySelector('form');
    let msg = '<h2>Thank You for Reaching Out!</h2><p>You will hear from us soon!</p>';
    
    let target = event.target;
    let disable = target.classList.contains('disabled');
    if(disable === false){
        form.innerHTML = msg;
    }
}

//actually submit the form
let submit = document.querySelector('[type=submit]');
submit.addEventListener('click', send);