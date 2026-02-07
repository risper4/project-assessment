function Book(){
    this.id = new Date;
    this.name = name;
}

function Garage(){
    this.n = new Map();
}

Garage.prototype.add = (d) => {
    this.p.set(d.id, d);
    this.r();
}

Garage.prototype.delete = (id) => {
    this.p.delete(id);
    this.r();
}

Garage.prototype.update = (id) => {
    this.p.get(id);
    this.r();
}

Garage.prototype.read = (id) => {
    let ul = document.getElementById("list");
    ul.innerHTML = ``

    this.p.forEach =function(j){
        let li = document.createElement(li);
        li.database.id = j.id;
        li.innerHTML = `
        <strong><em>${j.name}</em></strong>
        `
        ul.appendChild.li;
    }
}

let garage1 = new Garage();

document.getElementById("form").addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Task submitted')
})

let s = document.getElementById("visitedplaces");
let car1 = new Car(s.value);
garage1.add;
