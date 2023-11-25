let input = document.getElementById('input');
let temp = '';

function numOptr(element) {
    input.textContent += element.textContent; 
    if(element.textContent == 'x') temp += '*';
    else temp += element.textContent;
}

let clr = document.getElementById('clear');
clr.addEventListener('click',clear);

function clear() {
    input.textContent = '';
    temp = '';
}

let res = document.getElementById('res');
res.addEventListener('click',ans);


function ans() {
    let a = eval(temp);
    input.textContent = a;
    temp = a;
}