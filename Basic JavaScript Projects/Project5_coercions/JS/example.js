//this is an example of NaNs//

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;
}

//to check if something is or isn't a number//
function function2()    {
document.getElementById("test2").innerHTML = isNaN('This is a string');
}//this functions displays "true" because it's true that this isn't a number//
//to display 'false', replace the string 'This is a string' for a number
// said number should be between quotations, like this: '435'//


function function3()    {
document.getElementById("test3").innerHTML = isNaN('435');
}


//to display infinity//
document.write(2E310);

//to dosplay negative infinity
document.write(-3E310);