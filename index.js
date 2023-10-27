const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');


if (localStorage.getItem('counterValue')) {
    counterElement.textContent = localStorage.getItem('counterValue');
}


incrementButton.addEventListener('click', () => {
    let counterValue = parseInt(counterElement.textContent);
    counterValue++;
    counterElement.textContent = counterValue;
    localStorage.setItem('counterValue', counterValue);
});


decrementButton.addEventListener('click', () => {
    let counterValue = parseInt(counterElement.textContent);
    counterValue--;
    counterElement.textContent = counterValue;
    localStorage.setItem('counterValue', counterValue);
});