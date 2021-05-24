// this is a comment

/*
tsjigh;isg
fdhdthd
sgrdg
*/

// varaibles

var myVariable = 10;
myVariable = "Foobar";

myVariable = 10.00 / 4.2;
myVariable = 10 + 12;
myVariable = 12 - 10;
myVariable = 12 % 10;

myVariable = myVariable + 1;
myVariable += 1;
myVariable++;

myVariable /= 2;

myVariable *= 2;

myVariable = false;

console.log(myVariable);

var will_is_cool = true;
var todd_is_cool = false;

if(will_is_cool)
{
  console.log("Cool")
}
else if(todd_is_cool)
{
  console.log("Poggers")
}
else
{
  console.log("nOt Kool or RaD")
}

//Create my own if else statement

var age = 100;
if(age < 0)
{
  console.log("Sorry But How The Hell Do You Exist?")
}
else if(age >= 0 && age < 10)
{
  console.log("Your cost to enter is $5");
}
else if(age >= 10 && age <= 20)
{
  console.log("Your cost to enter is $180");
}
else if(age >= 31 && age <= 39)
{
  console.log("Your cost to enter is $0.23");
}
else if(age >= 61 && age <= 99)
{
  console.log("Your cost to enter is $100000");
}
else
{
  console.log("Security Get This Person Out Of Here!")
}

//loops!
/*
var maxNumbers = 11;
var myint1 = true;

while(maxNumbers > 0)
{
  maxNumbers--;
  console.log(maxNumbers);
}

//for loops

for(var i = 0; i < 11; i++)
{
  console.log(i);
}

var int1 = 0;

while(int1 < 1000)
{
  int1+=2;
  console.log(int1);
}

for(var myint2 = 0; myint2 < 1001; myint2++)
{
  console.log(myint2)
}
*/

// arrays
var myEmptyArray = [];
var myFullArray = ["will", "gabe"];

// 0, 1, 2, 3, 4, .... infinty
myEmptyArray.push("will");
myEmptyArray.push("gabe");

console.log(myEmptyArray[0]);
console.log(myFullArray[0]);
console.log(myFullArray[1]);
console.log(myFullArray[2]);

myFullArray[1] = "Better Gabe";

console.log(myFullArray[1]);

var myStack = [];
myStack.push("Pancake 1");
myStack.push("Panckae 2");
console.log(myStack);
console.log(myStack.pop());
console.log(myStack);

var myQueue = [];
myQueue.push("Person 1");
myQueue.push("Person 2");
myQueue.push("Person 3");
console.log(myQueue);
console.log(myQueue.shift());
console.log(myQueue);
console.log(myQueue.shift());
console.log(myQueue);

//Create a senario where 5 people in the class go to the doctor.

var doctorQueue = [];
doctorQueue.push("Gabe");
doctorQueue.push("Cole");
doctorQueue.push("Justice");
doctorQueue.push("Zack");
doctorQueue.push("Todd");
console.log(doctorQueue);
console.log(doctorQueue.shift() + " is seeing The Doctor");
console.log(doctorQueue + " are still in the queue");
console.log(doctorQueue.shift() + " is seeing The Doctor");
console.log(doctorQueue + " are still in the queue");
console.log(doctorQueue.shift() + " is seeing The Doctor");
console.log(doctorQueue + " are still in the queue");
console.log(doctorQueue.shift() + " is seeing The Doctor");
console.log(doctorQueue + " are still in the queue");
console.log(doctorQueue.shift() + " is seeing The Doctor");

// Function
function func()
{
  console.log("Hello");
  var o = 10;
  o++;
  console.log(o);
}

func();

function cube(x)
{
  console.log(x*x*x);
  return x*x*x;
}

cube(10);
cube(100);

var dd = 22;
var cc = dd;

function div(var1, var2)
{
  return var1/var2;
}

var newValue = div(cc, dd);
console.log(newValue);

console.log(div(cube(7), 8));

function addition(x, y, z)
{
  console.log(x + y + z);
  return x+y+z;
}

function multiply(w, v)
{
  console.log(w, v);
  return w*v;
}

console.log(multiply(addition(10, 38, 91), 99));