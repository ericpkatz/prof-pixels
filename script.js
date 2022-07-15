// Your code here

const table = document.querySelector('table');
const button = document.querySelector('#add-row');
const colorPicker = document.querySelector('select')

console.log(colorPicker)

const addRow = () => {
    const tr = document.createElement('tr');
    for (let i = 0; i<10; i++){
        const td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

table.addEventListener('click', (ev)=> {
    const currentColor = colorPicker.value
    const cell = ev.target
    console.log(cell.tagName)
    if(cell.className === currentColor){
        cell.className = ''
    } else {
        cell.classList.add(colorPicker.value)
    }
})
button.addEventListener('click', addRow);

addRow();
addRow();
