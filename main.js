import data from './dados.json' assert {type: 'json'};
console.log(data);
const table = document.querySelector('#table');
function create () {
    data.map (item => {
        const tr= document.createElement('tr');
        const th1= document.createElement('th');
        th1.textContent = item.dia;
        tr.appendChild(th1);
        const th2= document.createElement('th');
        th2.textContent = item.valor;
        tr.appendChild(th2);
        table.appendChild(tr);
    })
}
create();