const calc = document.querySelector('.calc');
const output = document.querySelector('.output');

let inner = '';

showFunc();

calc.addEventListener('click', function(event){
    if(!event.target.classList.contains('btn')) return;
    let value = event.target.innerText;

    switch(value){
        case 'c':
            inner = '';
            break;
        case '=':
            inner = eval(output.innerText).toFixed(2);
            break;
        default:
            inner += value;
            break;
    }
    localStorage.setItem('inner', inner);
    showFunc();
})

function showFunc(){
    inner = localStorage.getItem('inner')
    output.innerText = inner;
}