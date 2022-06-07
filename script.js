let screen = document.querySelector(`.screen`);

const btnPlus = document.querySelector(`.btn-plus`);

const btnNumber = document.querySelector('.btn-number');
console.log(btnNumber.innerText);
 
btnNumber.addEventListener('click', updateScreen);

screenValue = 0;
screen.value = screenValue;

function updateScreen() {
    screen.innerText = btnNumber.textContent;
}












































