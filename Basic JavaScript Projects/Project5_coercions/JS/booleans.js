//these are booleans, will show true or false depending on the
//data//
document.write(10>2);
document.write(10<3);

//this shows up under console, thru DevTools//
console.log(2 + 2);
console.log(25>2);

//the == sign means a comparison is to be made
//will yield a true or false//
document.write(10 == 10);


//the === sign is used to show whether the data on the left
//is equal to the data on the right, yields a true or false//
X = 10;
Y = 11;
document.write(X === Y);

A = 10;
B = "anything";
document.write(A === B);

C = "Joe";
D = "Joe";
document.write(C === D);

E = "Mark";
F = "Marc";
document.write(E === F);

//different types of booleans//
document.write(5>2 && 10>4);
//this will yield "true" as long as both are true//

document.write(5>10 && 10>4);


document.write(5>10 || 10>4);
//the "or" operator will return "true" here because
//while five is not greater than ten, ten is greater than 4
//if either of the statements is true, it'll yield "true"

document.write(10>5 || 10>4);
//this one would return "false"