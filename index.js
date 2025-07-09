/*Create a faulty calculator using JS.

The faulty calculator does the following:
1) Takes 2 nos as input from the user.
2) It performs wrong operations as follows:
        + ------> -
        * ------> +
        - ------> /
        / ------> **(exponentiation)

3) It performs wrong operations 10% of the time.
*/
let rand = Math.random();
console.log("Random number : "+rand);

let a = parseInt(prompt("Enter first no."));
console.log("First number : "+a);

let b = parseInt(prompt("Enter second no."));
console.log("Second number : "+b);

let op = prompt("Enter operator(+ ,- ,* , or /)");
console.log("Operator : "+op);

let res;
if (rand>0.1)
{
    //Correct Calculation
    if(op == '+')
        res=a+b;
    else if(op == '-')
        res=a-b;
    else if(op == '*')
        res=a*b;
    else if(op == '/')
        res=a/b;

    console.log("The result of calculation : "+res);
    alert("The result of calculation : "+res);
}

else
{
    //Wrong Calculation
    if(op == '+')
        res=a-b;
    else if(op == '-')
        res=a/b;
    else if(op == '*')
        res=a+b;
    else if(op == '/')
        res=a**b;


    console.log("The result of calculation : "+res);
    alert("The result of calculation : "+res);
}