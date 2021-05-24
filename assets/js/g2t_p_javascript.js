// This is a comment
/* This is also a comment */

var myVarabile = "Hello World";
console.log(myVarabile);

var myNumber = 7;
console.log(myNumber);

var bob = myVarabile + myNumber;
console.log(bob);

var myBool = false;
console.log(myBool);

/*
1 = is assign
2 = is unstict compare (7 = "7")
3 = is strict compare (7 = "7")
*

console.log(7 == "7");

/*
"7" + 8 = 78
parseInt("7") + 8 = 15
*

console.log(parseInt("7") + 8);

/*
    / Divide
    * Multiply
    - Substract
    + Add
    % Remainder
*/

console.log(7/8);
console.log(7%8);
console.log(7&7);

console.log("Addition 7 + 8 = " + (7 + 8));
console.log("Subtraction 7 - 8 = " + (7 - 8));
console.log("Divide 7 / 8 = " + (7 / 8));
console.log("Multiply 7 * 8 = " + (7 * 8));
console.log("7 % 8 = " + (7 % 8));

var i = 1;
i = i + 1;
i++;
i*=2;
console.log(i)

for(i = 1; i < 10; i*=2)
{
    console.log(i);
}

var myVar = 0.6;

console.log(typeof myVar);

// Loops //

var dog_pooped_on_carpet = true;
var dog_became_president = false;

if(dog_pooped_on_carpet)
{
    console.log("Burn all the dog treets");
    console.log("Sell the dog");
}
else if(dog_became_president)
{
    console.log("Launch the missiles.");
    console.log("Death to all humans.");
}

var myAge = 42;

if(myAge < 19)
{
    console.log("You're not allowed in the bar.");
}
else if(myAge < 21)
{
    console.log("Let's go to vagas.");
}
else if(myAge > 40 && myAge < 65)
{
    console.log("Time for a mid life crisis.");
}
else
{
    console.log("It's time to die.");
}

//Change Var Test

var netWorth = 100;

if(netWorth <= 10)
{
    console.log("You poor dumb man.");
}
else if(netWorth >=11 && netWorth <=99)
{
    console.log("Your a poor sad person having a midlife crisis.")
}
else if(netWorth >= 100 && netWorth <= 200)
{
    console.log("Congratulations you are a semi sucessful person in humanity.");
}
else
{
    console.log("Great your and idiot who can't input a reasonable net worth value.")
}

//While loop

/*var t = 0;

while(t <= 1000)
{
    console.log(t);
    t++;
}

var will_is_cool = false;

while(will_is_cool)
{
    console.log("Awsome");
}

var timers = 0;

while(timers <= 60)
{
    console.log(timers + " Seconds")
    timers+=1;
}

var o = 0;

for(o = 500; o >= 1; o / 2)
{
    console.log(o);
}*/

var pp = 0;

for(pp = 10; pp >1; pp - 1)
{
    console.log(pp + " Inches Long")
}