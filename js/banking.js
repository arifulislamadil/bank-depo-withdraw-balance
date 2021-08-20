function getInputValue(inputId) {
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //Clear input field
    depositInput.value = '';
    return depositAmount;
}


function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById("balance-total");
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
}


document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);


    /// get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;


    //update balance

    // const balanceTotal = document.getElementById("balance-total");
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    //Clear input field
    // depositInput.value = '';
});


//handlewithdraw

document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    // console.log(withdrawAmountText);


    //update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');

    // const previouswithdrawTotalText = withdrawTotal.innerText;
    // const previouswithdrawTotal = parseFloat(previouswithdrawTotalText);

    // withdrawTotal.innerText = previouswithdrawTotal + withdrawAmount;
    //update balance after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
    const withdrawAmount = getInputValue('withdraw-input');
    const cureentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < cureentBalance) {
        updateTotalField("withdraw-total", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > getCurrentBalance) {
        console.log('You can\t withdraw more then your current amount')
    }
    //clear withdraw input filed
    // withdrawInput.value = '';
})