let list = document.querySelectorAll('.navigation li');
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');

// -[ Sidebar Animation ]-
function activeLink(){
    list.forEach((item)=>
        item.classList.remove('hovered'));
        this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink));

// -[ Toggle Menu ]-
toggle.onclick = function (){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// -[ Cards Data Processing ]-
let customersDOM = document.getElementById('customers');
let income = document.getElementById('income');
let customers_count = 26;
let income_count = (customers_count*1200).toLocaleString('en-US');

// -[ Insert Processed Data into DOM Elements ]-
customersDOM.innerHTML = customers_count;
income.innerHTML = income_count;