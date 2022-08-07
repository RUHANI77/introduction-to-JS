const result = Math.pow(3, 8);
//console.log(result);


//Math absolute values
const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);

if (gap < 5) {
    console.log('can be friends');
}
else {
    console.log('can not be friends');
}
//...................
//Math rounded Number
//....................
const number = 2.5;
const fullName = Math.round(number);
console.log(fullName);

const result2 = Math.ceil(2.0001);
const result3 = Math.floor(456.259);
console.log(result2);
console.log(result3);

//Random............

console.log(Math.random());
const random = Math.round(Math.random() * 100);
console.log(random);