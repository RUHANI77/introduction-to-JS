var student = {
    id: 115,
    name: 'Solaiman Khan',
    class: 9,
    marks: 98
}

var mobile = {
    brand: 'samsung',
    price: 19000,
    Storage: '64gb',
    camera: '7MP'
}

var mycomputer = {
    brand: 'lonovo',
    color: 'silver',
    price: 39000,
    processor: 'i7'
}

console.log(mycomputer);
mycomputer.processor = 'i79';
console.log(mycomputer);
console.log(mycomputer.price);

const person = {
    name: 'Ruhani',
    age: 35
};

let a = 'age';
console.log(person.name);
console.log(person[a]);
console.log(person['name']);

//deleting property

delete person.age;
console.log(person);