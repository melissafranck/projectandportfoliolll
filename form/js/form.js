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