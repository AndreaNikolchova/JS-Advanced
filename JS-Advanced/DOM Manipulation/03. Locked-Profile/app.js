function lockedProfile() {
    let profile = document.getElementsByClassName('profile');
    for(let i = 0 ; i<profile.length ; i++){
        let radioLocked = profile[i].getElementsByTagName('input')[0];
        let button = profile[i].getElementsByTagName('button')[0];
        let div = profile[i].getElementsByTagName('div')[0];
        button.addEventListener('click', function(){
            if(radioLocked.checked){
                return;
            }
            else{
                if(button.textContent === 'Show more'){
                    div.style.display = 'inline';
                    button.textContent = 'Hide it';
                }
                else{
                    div.style.display = 'none';
                    button.textContent = 'Show more';
                }
            }
        });
    }
}