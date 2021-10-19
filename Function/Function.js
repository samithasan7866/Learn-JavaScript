//1. Function Basic
//No arguments
//Function Deleration
function aboutMe(){
    const message=`I am Amit and I am 21 years old.`;
    console.log(message);    
}
//Function call
aboutMe();
//With arguments
//Function Deleration
function aboutMe1(name,age){
    const message=`I am ${name} and I am ${age} years old.`;
    console.log(message);    
}
//Function call
aboutMe1('John', 21);
aboutMe1('Arin', 20);

//Calculate the addition
function calcSum(num1, num2){
    let sum=num1 + num2;
    return sum;
}
let result= calcSum(10,20);
console.log(result);


//2. Default Parameters
function addThreeNumbers(num1=2, num2=6, num3=5){
    const sum1=num1+num2+num3;
    return sum1;
}
console.log(addThreeNumbers());


//3. Hoisting, Function as an Expression
//JavaScript Hoisting refers to the process whereby the interpreter allocates memory for variable and function declarations prior to execution of the code. Declarations that are made using var are initialized with a default value of undefined . ... This allows variables to appear in code before they are defined
const val=10;
const calcSumExp = function(num1, num2){
    const sum=num1 + num2;
    return sum;
};
console.log(calcSumExp(10,20));//we can use this as function by writing it before the function 


//4. Arrow Function
//It is the shortest way to create funstion
const calcSumArr=(num1, num2) => num1+num2;
console.log(calcSumArr(15,25));

const mulByTwo = (num1)=> num1*2;
console.log(mulByTwo(6));


//5. Rest Parameters
//When we have lots of arguments
function multiply(...args){
    console.log(args);
    let mulp = 1;
    for(let num of args){
        mulp = mulp * num;
    }
    return mulp;
}
console.log(multiply(2,3,4,5,6,7,8,9,10,11,12,13))// we have lots of arguments thats the reason we would use rest parameters


//6. Exercise- Area of  Circle
//Area= PI *r*r
//PI= 3.1416
//way-1 function Decleration
function areaofCircle(radius){
    return 3.1416 * radius *radius;
};
console.log(areaofCircle(2));

//Way 2- Function Expression
const areaOfCircle1 = function(radius){
    return 3.1416 * radius *radius;
};
console.log(areaOfCircle1(2));

//Way -3 Arrow Function [Most Recomkmended Way]
const areaOfCircle2=(radius) =>3.1416 * radius *radius;
console.log(areaOfCircle2(2));


//7. Max Arguments
function maxOfArguments(...args){ // const maxOfArguments=(...args) => { //by using arrow
    console.log(args);
    let maxVAlue=-1;// as alll are positive so lets se itially we take a negative
    for(let i=0; i<args.length; i++){
        if(maxVAlue<args[i]){
            maxVAlue=args[i];
        }
    }
    return maxVAlue;
}
let result1=maxOfArguments(15,16,28,65,92,63,56,100,122,123);
console.log(result1);