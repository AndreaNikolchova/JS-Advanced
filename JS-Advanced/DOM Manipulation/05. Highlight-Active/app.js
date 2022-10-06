function focused() {
    let inputs =document.getElementsByTagName('input');
    
    inputs[0].addEventListener('focus',function(){
        inputs[0].parentElement.classList.add('focused');   
    });
    inputs[0].addEventListener('blur',function(){
        inputs[0].parentElement.classList.remove('focused');   
    });

    inputs[1].addEventListener('focus',function(){
        inputs[1].parentElement.classList.add('focused');   
    });

    inputs[1].addEventListener('blur',function(){
        inputs[1].parentElement.classList.remove('focused');
          
    });inputs[2].addEventListener('focus',function(){
        inputs[2].parentElement.classList.add('focused');   
    });
    inputs[2].addEventListener('blur',function(){
        inputs[2].parentElement.classList.remove('focused');   
    });inputs[3].addEventListener('focus',function(){
        inputs[3].parentElement.classList.add('focused');   
    });
    inputs[3].addEventListener('blur',function(){
        inputs[3].parentElement.classList.remove('focused');   
    });
}