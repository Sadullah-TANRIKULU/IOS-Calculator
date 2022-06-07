let screen = document.querySelector(`.screen`);

const container = document.querySelector(`.container`);
const buttons = document.querySelector('.buttons');

let action;

buttons.addEventListener('click', e => {
    if (e.target.matches('.btn')) {
        const button = e.target;
        action = button.dataset.action;
        
    }
    if (!action) {
        console.log('number key!');
    }
    
    if (action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
    ) {
      console.log('operator key');  
    }
    
    if (action === 'decimal') {
        console.log('decimal key!')
      }
      
      if (action === 'all-clear') {
        console.log('clear key!')
      }
      
      if (action === 'calculate') {
        console.log('equal key!')
      }
});


















































