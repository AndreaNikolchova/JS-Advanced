function notify(message) {
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = 'inline';
  div.addEventListener('click',()=>{
    div.style.display = 'none';
  });
}