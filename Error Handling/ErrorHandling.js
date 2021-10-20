//2.  Custom error message
function div(a,b){
    if (b === 0){
        throw new Error("Second Parameter can't be zero");// As we know anything divided by zero is is and error
    }
    return a/b;
}
console.log(div(4,2));
//console.log(div(4,0));// it will print the error message we wrote on line 4



//3. Handle Errors with try, catch, and finally block

try{
    console.log(div(4,0));
}
catch (e){
    console.log(e);
    console.log(e.name);
    console.log(e.message);
}
finally{
    console.log('Finally it works perfectly');
}
console.log('Hello world');
// benefit of try catch is after catching the error the program still working after that
// in finally everything will worked

// Resources
//1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
//2. https://rollbar.com/blog/top-10-javascript-errors-from-1000-projects-and-how-to-avoid-them/
//3. https://www.w3schools.com/js/js_errors.asp
//4. https://www.freecodecamp.org/news/error-handling-and-try-catch-throw/
//5. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
