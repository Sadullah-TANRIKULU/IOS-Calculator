const container = document.querySelector(`.container`);
const buttons = document.querySelector('.buttons');
const up = document.querySelector('.up');
const resultDown = document.querySelector('.down');

const calculate = (n1, operator, n2) => {
    let result = '';
    
    if (operator === 'add') {
      result = parseFloat(n1) + parseFloat(n2);
    } else if (operator === 'subtract') {
      result = parseFloat(n1) - parseFloat(n2);
    } else if (operator === 'multiply') {
      result = parseFloat(n1) * parseFloat(n2);
    } else if (operator === 'divide') {
      result = parseFloat(n1) / parseFloat(n2);
    }
    resultDown.textContent = result;
    return result;
  }

buttons.addEventListener('click', (e) => {
    
    if (e.target.matches('.btn')) {
        const button = e.target;
        const action = button.dataset.action;
        const keyContent = button.textContent;
        const inScreenNum = up.textContent;
        const previousKeyType = container.dataset.previousKeyType;

        if (!action) {
            if (inScreenNum === '0' || previousKeyType === 'operator') {
                up.textContent = keyContent;
            } else {
                up.textContent = inScreenNum + keyContent;
            }
        }
        
        if (action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
          
          container.dataset.previousKeyType = 'operator';
          container.dataset.firstValue = inScreenNum;
          container.dataset.operator = action;
          console.log(container.dataset.operator);
          
        }
        
        if (action === 'decimal') {
            up.textContent = inScreenNum + '.';
          }
          if (action === 'all-clear') {
            up.textContent = '0';
          }
          
        if (action === 'calculate') {
            const firstValue = container.dataset.firstValue;
            console.log(firstValue);
            const operator = container.dataset.operator;
            const secondValue = inScreenNum;
            console.log(secondValue);
            
            up.textContent = calculate(firstValue, operator, secondValue);

        }


        
    }
});


















































