
function styledPara(){
    let para = document.getElementsByTagName('p');
    for(let i=0; i< para.length; i++){
        para[i].classList.add('styled');
    }
}