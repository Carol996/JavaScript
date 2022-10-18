function addition_Function()    {
    var addition = 2 + 3;
    document.getElementById("math").innerHTML = addition;
}

function substraction_Function()  {
    var substraction = 3 - 2;
    document.getElementById("moremath").innerHTML = substraction;
}

function easy_math()  {
    var easy = 30 * 2;
    document.getElementById("multi").innerHTML = "30 x 2 = " + easy;
}

function hard_math()  {
    var hard = 50 / 2;
    document.getElementById("divs").innerHTML = "50 / 2 = " + hard;
}

function operation()  {
    var compilation = (30 * 2) + 1;
    document.getElementById("comp").innerHTML = compilation;
}

function mod_Ops()    {
    var simple_math = 25 % 6;
    document.getElementById("mod").innerHTML = "when you divide 25 by 6 you have a remainder of: " + simple_math;
}

function negation_operator()  {
    var X = 10;
    document.getElementById("math_1").innerHTML = -X;
}