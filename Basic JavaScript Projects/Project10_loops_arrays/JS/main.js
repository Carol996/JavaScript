//-------while loops in this section-------//
function Call_Loop()    {
    var Digit = "";
    var X = 1;
    while (X < 11)  {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}



function Call_Loop2()   {
    var text = ""; 
    var i = 0; //establishes the value of the variable
    while (i < 10)  { //while i is less than 10...
        text += "<br>The number is " + i; //...add string plus whatever i is
        i++;//increments to whatever i is a tthe time
    }
    document.getElementById("Loop2").innerHTML = text;
}



//------------- string lenght prop.-----------------//
function string_size()  {
    var SS = "this string's length";
    document.getElementById("stringy").innerHTML = SS.length;
}





//-------------- for loops in this section -----------// 
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++)    {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//line 39, 40 and 41 define variables//

//line 42 creates the loop//

//line 43 tells me that Y equals zero, and that as long as...
//...Y is less than the total lenght of "instruments" variable... 
//...it should increment the value of Y//


var Foods = ["Tacos", "Muffins", "Pizzas", "Sausages"];
var dishes = "";
var F;
function my_loop() {
    for (F = 0; F < Foods.length; F++)    {
        dishes += Foods[F] + "<br>";
    }
    document.getElementById("My_id").innerHTML = dishes;
}







//---------------------arrays below--------------------//
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}



//---------------------constants below--------------------//
function constant_function()    {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue"
    Musical_Instrument.price = "$900"
    document.getElementById("Constant").innerHTML =
    "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}




//---------------below functions with let -----------------//


let B = 10;
{
    let B = 2;
    document.getElementById("let_Btwice").innerHTML = B;
}
document.getElementById("let_B").innerHTML = B;

//even though the variavle is the same "B"...
//...the let keyword allows me to declare a different value
//...to the same variable within a block//





//----------return statements---------------------//
document.getElementById("return").innerHTML = theFunction("Caro");

function theFunction(name)  {
    return "Hola " + name; 
}







//------object using the ley keyword --------->
let animal = {
    type: "dog ",
    size: "small ",
    age: "2 ",
    color: "black ",
    order: function()   {
        return "This persom wants to adopt a " + this.size + this.color + this.type;
    }
};
document.getElementById("pets").innerHTML = animal.order() ;




//------object using the ley keyword --------->
let myText = "";
for (let g = 0; g<10; g++)  {
    if (g === 4) {break;}
    myText += "number " + g + "<br>";
document.getElementById("breaky").innerHTML = myText;
} 


let moreText = "";
for (let h = 0; h<10; h++)  {
    if (h === 4) {continue;}
    moreText += "number " + h + "<br>";
document.getElementById("conty").innerHTML = moreText;
} 
