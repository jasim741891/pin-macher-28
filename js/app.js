function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin
    }
    else {
        // console.log('3 digite got', pin)

        return getPin()

    }
}



function generatePin() {

    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-paid').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const priviousCals = calcInput.value;
        const newCals = priviousCals + number;
        calcInput.value = newCals;
    }

})
function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {

        successMessage.style.display = 'block'
        failError.style.display = 'none'
    }
    else {

        failError.style.display = 'block'
        successMessage.style.display = 'none'
    }
}