//global variable//
var X = 20;
function number_1()    {
    document.write(20 + X + "<br>");    
}
function number_2()    {
    document.write(X + 100 + "<br>");
}
number_1();
number_2();



//local variable//
function add_3()    {
    var Y = 11;
    document.write(20 + Y + "<br>");
}
function add_4()    {
    var Y = 2;
    document.write(Y + 100);
    }

add_3();
add_4();



//to debug, use console.log() method, like this//
//variables haven't been defined here so it will not retunr//
function add_last()    {
    console.log(15 + Z);
}
function add_last2()    {
    console.log(Z + 100);
}

add_last();
add_last2();

document.write("<br><br>")




//-----------------If statement --------//
function if_st() {
    if (new Date().getHours() < 18) {
        document.getElementById("ifst").innerHTML =
        "Good Evening"
    }
}
