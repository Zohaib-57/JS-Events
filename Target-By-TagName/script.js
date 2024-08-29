
function styledPara(){
    let para = document.getElementsByTagName('p');
    for(let i=0; i< para.length; i++){
        para[i].classList.add('styled');
    }
}

function someStyledTag() {
    let e = document.getElementById('container-1');
    //  here we write contianer-2 then it will target the p tags of contianer-2
    let para = e.getElementsByTagName('p');
    for (let i=0; i < para.length; i++){
        para[i].style.color = 'purple';
        para[i].style.backgroundColor ='gray'
    }
}