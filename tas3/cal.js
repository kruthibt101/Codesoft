const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (value === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        previousInput = currentInput;
        currentInput = '';
        operator = value;
      }
    } else if (value === '=') {
      if (previousInput && currentInput && operator) {
        currentInput = eval(`${previousInput} ${operator} ${currentInput}`);
        display.textContent = currentInput;
        previousInput = '';
        operator = '';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
