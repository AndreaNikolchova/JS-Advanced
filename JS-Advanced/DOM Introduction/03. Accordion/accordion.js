function toggle() {
    let button  = document.getElementsByClassName('button')[0];
    let more = document.getElementById('extra');
    if(button.textContent === 'More')
    {
        button.textContent = 'Less';
        more.style.display = 'block';
        
    }
    else{
        button.textContent = 'More';
        more.style.display = 'none';
    }
}