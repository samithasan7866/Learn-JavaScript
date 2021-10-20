//1. Factory Functions
function user(name, age){
    const userObj = {
        name,
        age,
        walk: function(){
            console.log('John Started Walking');
        },
    };
    return userObj;
}
const user1 = user('John', 47);
const user2 = user('Marry', 24);
console.log(user1, user2);



//2.  Constructor Functions
function User(name, age){
    console.log(this)//here this will print an empty obj 
        this.name = name;
        this.age = age;
        this.walk = function(){
            console.log('John Started Walking');
        };
        console.log(this);//Here it will prtint all the eelemets
}
const user3 = new User('John', 47);
console.log(user3);


//3. Exercise
function homeAddress(street, city,zipCode){
    return {
        street,
        city,
        zipCode,
    };
}

function HomeAddress(street, city,zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const homeAddress1 = homeAddress('A','A','A','C'); 
const homeAddress2 = homeAddress('X','Y','Z');

const homeAddress3 = new HomeAddress('M','N','O');
console.log(homeAddress3);


//Builtin Constructors
let name1 = 'John';
let name2 = new String('John');
console.log(name1);
console.log(name2);
console.log(typeof name1);
console.log(typeof name2);
console.log(name1 === name2);

let age1 = 27;
let age2 = new Number(27);
console.log(age1);
console.log(age2);

let isValid1 = true;
let isValid2 = new Boolean(true);

let colors1 = ['red', 'green', 'yellow'];
let colors2 = new Array('red', 'green', 'yellow');
console.log(colors1);

function sum1(num1, num2){
    return num1 + num2;
}

console.log(sum1(2,3));

const sum2 = new Function('num1','num2','return num1 + num2;');//Function not function
console.log(sum2(10,20));
