//common function

function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    // inputField.value = "";
    const typeOfValue = typeof (inputFieldValue);
    return inputFieldValue;
}





//project code a-z


let count = 0
function addToCart(element) {
    const getName = element.parentNode.children[0].innerText;
    const createLi = document.createElement('li');
    createLi.innerText = getName;
    const orderList = document.getElementById('order-list');
    count++;
    if (count > 5) {
        alert('sorry! You can not select more than 5 player..')
    }
    else {
        orderList.appendChild(createLi);
        element.disabled = true;
        element.style.backgroundColor = 'gray';

    }
}



document.getElementById('calculate-btn').addEventListener('click', function () {

    const inputValue = getInputValueById('per-player-input');

    const orderListExtra = document.getElementById('order-list').childNodes.length;
    const orderList = orderListExtra - 1;
    const perPlayerCost = inputValue * orderList;
    const perPlayerText = document.getElementById('expense-amount');
    perPlayerText.innerText = perPlayerCost;
})


document.getElementById('total-btn').addEventListener('click', function () {
    const managerField = getInputValueById('manager-field');
    const coachField = getInputValueById('coach-field');
    const perPlayerCostString = document.getElementById('expense-amount').innerText;
    const perPlayerCost = parseFloat(perPlayerCostString);
    const totalCostForPlayer = perPlayerCost + managerField + coachField;
    const totalCostAmount = document.getElementById('total-cost-amount');
    totalCostAmount.innerText = totalCostForPlayer;
})





