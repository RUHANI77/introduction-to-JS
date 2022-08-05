/*
myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}

console.log(myObj.cars.car2);
*/

const myObj = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}
for (let i in myObj.cars) {
    console.log(myObj.cars[i].name);
    console.log(myObj.cars[i].models);
}

//converting string in uppercase
let a = "Bangladesh";
console.log(a.toUpperCase());