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

