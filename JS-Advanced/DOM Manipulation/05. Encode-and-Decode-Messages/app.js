function encodeAndDecodeMessages() {
    let buttons = document.getElementsByTagName('button');
    let textArea = document.getElementsByTagName('textarea');
    buttons[0].addEventListener('click',function(){
        
        let str = textArea[0].value;
        textArea[1].value = '';
        for(let i = 0; i< str.length;i++){
            let code =str.charCodeAt(i) + 1;
            textArea[1].value += String.fromCharCode(code);
        }
        textArea[0].value = '';
    });
    buttons[1].addEventListener('click',function(){
        let str = textArea[1].value;
        textArea[1].value = '';
        for(let i = 0; i< str.length;i++){
            let code =str.charCodeAt(i) - 1;
            textArea[1].value += String.fromCharCode(code);
        }
    });
}