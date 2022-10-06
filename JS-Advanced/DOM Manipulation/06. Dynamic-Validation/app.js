function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change',function(){
        if(!input.value.match(/[a-z]+[@][a-z]+[.][a-z]+/g)){
            input.className = 'error';
        }
        else{
            input.className = '';
        }
    });
}
