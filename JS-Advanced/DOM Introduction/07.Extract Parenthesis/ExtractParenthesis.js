function extract(content) {
   let text = document.getElementById(content).textContent;
   let matches = text.match(/[(][A-z\s]*[)]/g);
   return matches.join('; ')
   
}