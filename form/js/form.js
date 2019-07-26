/*
//stop submission button
function validateForm(event){
    event.preventDefault();
    
    let form = document.querySelector('#recommendation');
    let fields = form.querySelectorAll('.required');
    let valid = true;
    for(let i  = 0; i < fields.length; i++){
        // if no value
        if(!fields[i].value){
            valid = false;
        }
        
    }
    if(valid == true){
        let submit = form.querySelector('[type = submit]');
        submit.removeAttribute('class');
    }
}
*/

//header
document.querySelector("form h2").innerHTML = "<strong>reach</strong> out";

//paragraph
document.querySelector("p").innerHTML = "If you have any questions about this site, please feel free to contact us using the form below. We are always looking for ways to better serve the wellness community.";

//background image
document.body.style.backgroundImage = "url('images/drop.jpg')";

//validation fuction
function validateForm(event){
      let target = event.target;
      let outter = target.parentElement;
      let error = '<lable class="error">Required!';
    
    //conditional for validation
    if(!target.value.length){
        if(!outter.querySelector('.error')){
            parent.insertAdjacentHTML('beforeend', error);
        }
    }else{
        outter.removeChild(outter.querySelector('.error'));
    }
}

//adding event listeniners to each field
let requiredFields = validateForm.querySelectorAll('.required');
for(let i = 0; i < requiredFields.length; i++){
    requiredFields[i].addEventListener('input', validateForm);
    requiredFields[i].addEventListener('blur', validateForm);
}

//if checks clear, work
function send(event){
    event.preventDefault();
    
    let form = document.querySelector('#donate');
    let msg = '<h2>Thank You for Reaching Out!</h2><p>You will hear from us soon!</p>';
    
    let target = event.target;
    let disable = target.classList.contains('disabled');
    if(disabled === false){
        form.innerHTML = msg;
    }
}

//actually submit the form
let submit = validateForm.querySelector('[type=submit]');
submit.addEventListener('click', send);