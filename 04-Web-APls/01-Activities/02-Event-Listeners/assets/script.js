var counter = 0;
var incrementEl = document.getElementById('increment');
var decrementEl = document.getElementById('decrement');
var countEl = document.getElementById('count');

function setCounterText() {
    countEl.textContent = counter;
}

incrementEl.addEventListener('click', () => {
    counter++;
    setCounterText();
});

decrementEl.addEventListener('click', () => {
    counter--;
    setCounterText();
});

setCounterText();