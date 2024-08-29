let text = document.getElementById("text");

text.style.fontSize =  '20px';
text.style.color = 'black';
text.style.border = '1px solid black';

function changeColor() {

    if(text.style.color === 'black'){
        text.style.color = 'red';
    }
    else{
        text.style.color= 'black';
    }
}
function changeBorder() {

    if(text.style.border === '1px solid black'){
        text.style.border = '2px dotted blue';
    }
    else{
        text.style.border= ' 1px solid black';
    }
}
function changeFont() {

    if(text.style.fontSize === '20px'){
        text.style.fontSize = '40px';
    }
    else{
        text.style.fontSize= '20px';
    }
}