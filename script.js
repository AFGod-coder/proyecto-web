const CONTADOR = document.getElementById('count-articles');
CONTADOR.textContent = 0;

CONTADOR.addEventListener('click', () => {
    CONTADOR.textContent++;
});