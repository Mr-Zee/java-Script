// var, let, const

let x = 30;
x = 50;
console.log(x);

const y = 5;
console.log(y);

// string, Number, Boolean, nill, undefined

const name = 'zee';
const age = '21';
const rating = 5.3;
const iscool = true;

// concatenation
console.log('my name is ' + name + ' and i am ' + age);

// template string
const hello = 'my name is  ${name} and i am  ${age}';
console.log(hello);


// length,split,toupper

const s = 'hello world';
console.log(s.length);
console.log(s.split(','));

// arrays

const fruit = ['apple', 'orange', 'grape'];
console.log(fruit[2]);
fruit.push('mango'); //adding to last
fruit.unshift('strawberry') //adding to front
console.log(fruit.indexOf('mango'));
console.log(fruit);


// objects

const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 45,
    hobbies: ['games', 'movies'],
    address: {
        street: '12 street',
        city: 'Boston',
        state: 'LA'
    }

}

console.log(person);

// for
for (let i = 0; i <= 10; i++) {
    console.log('Numbers:' + i);
}

// while

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// if else

const j = 20;

if (j === 10) {
    console.log('j is 10');
} else {
    console.log('j is not 10');
}

// then ? else :

const o = 5;

const color = o > 4 ? 'green' : 'red';
console.log(color);

// function

function addNums(num1, num2) {
    return num1 + num2;
}
console.log(addNums(5, 6));


// constructor Function
function Person(fName, lName, dob) {
    this.fName = fName;
    this.lName = lName;
    this.dob = dob;
}


// class
class People {
    constructor(fName, lName, dob) {
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
    }
    getBirthYear() {
        return this.dob;
    }
}
// instantiate Object

const per1 = new Person('john', 'doe', '1-05-1987');
const per2 = new Person('mary', 'john', '16-11-1995');
const per3 = new People('jane', 'smith', '20-12-1895');


console.log(per2.dob);
console.log(per3.getBirthYear());

// DOM
