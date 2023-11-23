//https://www.tutorialstonight.com/js/javascript-tutorial

//Types to write hello world in JS

/*

1.console.log();
2.alert();
3.document.write();

*/

//The symbol => is used in arrow functions. It is used to assign the return value of the function to the variable.

console.log("hello world");

// alert("hello world!!");

// document.write("hello world");

function sum(a, b) {
  //perform actions
  return a + b;
}

console.log(sum(10, 23));

var person = {
  // to store values
  name: "sneha",
  age: 24,
};

var books = {
  type: "numbers",
  pages: 123,
};


/*

We are going to use following methods for this purpose:

element.innerHTML
document.write()
alert()
console.log()

*/

/* console in js 

console.log()
console.assert()
console.clear()
console.count()
console.dir()
console.warn()
console.error()
console.table()
console.time()
console.trace()
console.group()
console.info()

*/


let age = 20;

let result = (age>18)? 'Yes':'No';
console.log(result);

let today = new Date().getDay();
switch(today){
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day!!")
}


var car={
    color:"black",
    model:"s900",
    brand:"BMW"
}

for (var prop in car){
    console.log(`${prop} = ${car[prop]}`);
}

var fruits=['orange','grapes','mango','berries']

for(var myfavfruit of fruits){
    console.log(myfavfruit);
}


var i=5;
while(i>0){
    console.log(i);
    i--;
}