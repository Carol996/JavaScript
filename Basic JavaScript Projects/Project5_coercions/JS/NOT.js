function not_function() {
    document.getElementById("not").innerHTML = !(20>10);
}

//below we have a ternary operator --the ternary operator is "?"//
//this code means that if it's true that 5 is bigger than 1, display the string
//"left number is bigger"//
document.write(Bigger = (5>1) ? "Left number is bigger":"Right number is bigger");
//the document.write method is NOT part of the syntax of the ternary
//operator

function ride_function()    {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "you are yoo short" : "you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}