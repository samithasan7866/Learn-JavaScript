//12 regular expression pattern findings
const reqExp = /hello/i; //here i is a modifier which work for case insensetive 
console.log(reqExp.test('Hello World'));//beacuse of modifier i it will show true as hello is on reqExp
//if there is no modifier i it will show false



//3. RegExp modifiers and object methods
const regExp =/there/ig;//g here work as global so it will work for every word from an string
console.log(regExp);
console.log(regExp.source);//print the source only which is 'there'
console.log(regExp.exec('Hi, hello There'));
//exec work for finding the the source from a string if the source is in the string it will print all the source info and also the position and rest of the string if it is not in the string it will print 'nul'
//1st it will print the match 

const str = 'Hi, Hello There There There';
//console.log(str.match(regExp));// work same as exec()
console.log(str.search(regExp));
console.log(str.replace(regExp, 'world'))