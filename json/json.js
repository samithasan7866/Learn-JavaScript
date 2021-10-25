//1. Dot and Bracket Notation
const user = {
    nam: 'John',
    age: 47,
    hobby: 'reading',
    isMarried: true,
};
console.log(user)
//We can acces this property in 2 ways
//DOT notation
console.log(user.age);
console.log(user.nam);
//Bracket
console.log(user['hobby']);
console.log(user['age']);


//2. Adding, modifying in object
//Add
user.email = 'john@gmail.com';
user['phone'] = '0172612589';
//Update
user.isMarried = false;
user.age = user.age + 3;
//Delete
delete user.age;
console.log(user);


//3. Object Method and this key
const user1 = {
    nam1: 'John',
    age1: 50,
    Ismarried: true,
    friends: ['Mary', 'Smith'],
    selectedColor: null,
    calculateAge: function () {
        console.log(this);
        console.log(`I am ${this.age1} years old.`);
    },
};
user1.calculateAge();


//4. Traversing Object Entries
const user2 = {
    nam2: 'John',
    age2: 50,
    gender:'male',
    email:'male',
    email:'john@gmail.com',
    phone:'015546988225',
};
//Way 1
for(let key in user2){
    console.log(key, user2[key]);
}
//way 2
console.log(Object.keys(user2));
console.log(Object.values(user2));
for(let val of Object.values(user2)){
    console.log(val);
}


//5. Exercise - Total Salary
const salaries ={
    david:4000,
    andrew:4200,
    Norman:4300,
    Shawn:5000,
    Magic:5500,
    Arnold:5700,
    Arbik:6000,
};
let sum=0;
/*
for(let key in salaries){
    console.log(key, salaries[key]);
    sum=sum + salaries[key];
    //sum += salaries[key];
}
console.log(sum); */
//Other way
console.log(Object.values(salaries));
for(let val of Object.values(salaries)){
    sum += val;
}
console.log(sum);



//5. Object Destructuring
const user5 = {
    name5: 'John',
    age3:47,
    favBook:{
        name5:'Normal People',
        author:'Sally Rooney',
    },
};

const{name5, age3, favBook}=user5;//for this we can declear every object elements as variable
const{name5:title, author}=favBook;/*Here as name is rwice so if we name 'name' as variable it will vilate the variable decleration rules of JS so this is the way to declear variable which is under other variable*/
console.log(name5);
console.log(age3);
console.log(title);
console.log(author);


//6. Doctor Object
//3 propetise: name, designation, clinic
//1 method: Operation
const decObject = {
    nama:'John',
    designation:'Kidney Specialist',
    clinic:{
        nama: 'Happy Care Center',
        address:{
            long:23.66,
            lat:90.44,
        },
    },
    operation: function(){
        console.log(`${this.nama} Started doing Operation`);
    },
};
decObject.operation();
console.log(decObject);
console.log(decObject.nama);
console.log(decObject.designation);
console.log(decObject.clinic.nama);
console.log(decObject.clinic.address.long);
console.log(decObject.clinic.address.lat);
//Shorten
const {nama, designation,clinic}=decObject;
const{nama:clinicName, address}=clinic;
const{long, lat}=address;
console.log(nama);
console.log(designation);
console.log(clinicName);
console.log(long);
console.log(lat);


//7. Cloning an Object
const user6={
    nama:'John',
    age:21,
};
//Normal way
const copiedUser={};
//copiedUser.nama=user.nama;
//copiedUser.age=usr.age;

//Best way
for(let key in user){
    console.log(key, user[key]);
    copiedUser[key]=user[key];
}
const copiedUser1 = Object.assign({}, user);


//9. Math Object
console.log(Math.PI);
console.log(Math.random);
console.log(Math.round(1.2));
console.log(Math.ceil(1.9));
console.log(Math.floor(1.9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));
console.log(Math.min(1,2,3,4,5,6,7,8,9));



//JSON
const user7={
    nama:'John',
    age:47,
};
//Object to json
const jsonData=JSON.stringify(user7);
console.log(jsonData);
//json to object
console.log(JSON. parse(jsonData));