let data = [];
let totalIncome = 0;
let totalExpense = 0;
let total = 0;

let button = document.querySelector('#button');
let description = document.querySelector('#description');
let number = document.querySelector('#number');
let masmenos = document.querySelector('#masmenos');
let incomeTable = document.querySelector('#income-table');
let expensesTable = document.querySelector('#expenses-table');
let displayTotal = document.querySelector('#h2-total');
let displayIncome = document.querySelector('#h2-income');
let displayExpense = document.querySelector('#h2-expense');


function submit() {
    let object = {
        sign: masmenos.value,
        monto: number.value,
        description: description.value
    }
    
    if (object.sign === '+') {
        totalIncome += Number(object.monto);
    } else {
        totalExpense += Number(object.monto);
    }

    total = Number(totalIncome - totalExpense);

    displayTotal.textContent = "Total: " + total;
    displayIncome.textContent = "Income: " + totalIncome;
    displayExpense.textContent = "Expense: " + totalExpense;

    description.value = "";
    number.value = "";

    setTable(object);
    data.push(object);

    

};

function setTable(obj) {
    
    if (obj.sign === "+") {
        createRow(incomeTable, obj);

    } else {
        createRow(expensesTable, obj)
    }
    
};

function createRow(_table, _obj) {
    let newRow = _table.insertRow();
    let span1 = newRow.appendChild(document.createElement("span"));
    span1.textContent = _obj.description;
    span1.className = "obj-txt";

    let span2 = newRow.appendChild(document.createElement("span"));
    span2.textContent = formatter.format(_obj.monto);
    span2.className = "obj-num";
};

button.addEventListener("click", () => {
    if (description.value && number.value) {
        submit();
    }
});

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });