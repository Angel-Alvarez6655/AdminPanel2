let list = document.querySelectorAll('.navigation li');
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let tablename = document.getElementById('name');
let fila = document.getElementById('fila');
let html = '';

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

// -[ Fetch Data on page Load ]-
let data = fetch('/api/users')
.then(response =>{
    // -[ Response Handler ]-
    response = response.json()
    .then(res=>{
        arrayPacientes = res.listaPacientes;
        arrayPacientes.forEach(element => {
            console.log(element.name);
            // -[ Table Construction ]-
            let htmlSegment = `
            <tr>
                <td id="name">${element.name}</td>
                <td>$1,200</td>
                <td>Pagado</td>
                <td><span class="status delivered">Activo</span></td>
            </tr>
            `;
            html += htmlSegment;
        });
        fila.innerHTML=html;
    })
})
.catch(error =>{
    // -[ Error Handler ]-
    console.log(error);
})