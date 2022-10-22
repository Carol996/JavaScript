function full_sentence()    {
 var part_1 = "i have ";
 var part_2 = "made this ";
 var part_3 = "a sentence through concatening."
 var whole_sentence = part_1.concat(part_2, part_3);
 document.getElementById("concatenate").innerHTML = whole_sentence;
}

//----------below is the slice() method -------//
function slice_Method() {
    var Sentence = "all work and no play makes john a dull boy";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}


//==== this is the uppercase method -------//
function upC()  {
    var str = "this should display as uppercase"
    var string = str.toUpperCase();
    document.write(string);
}
upC();

document.write("</br>");


//-------this is the search method------
//this method is used to search for a match between
//a given string and a regular expression.//

var S = "JS is a scripting language"
document.write(S.search("scripting"));

//this displays the number 8 because that's where 
//the word 'scripting' is located//






//the function below have number methods//
function string_Method()    {
    var X = 12;
    document.getElementById("Numbers_to_string").innerHTML = X.toString (); 
}




//this is a precision method in a function//
//precision method formats a number to a specific lenght//
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}



//this is the toFixed Method and shows in console//
var test=213.73145;
    console.log(test.toFixed(1));



//the function below reps the valueOf() method//
var num=NaN;
    console.log("Output : " + num.valueOf());