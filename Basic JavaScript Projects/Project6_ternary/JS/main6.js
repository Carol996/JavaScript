function vote_function()    {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "you are too young" : "you are old enough";
    document.getElementById("vote").innerHTML = can_vote + " to vote.";
}

//line 1 defines the name of the function itself
//this function is called by this name on the HTML doc//

//line 2 defines the two variables we'll be working with//

//line 3 tells me what the age variable equals to//

//line 4 includes the ternary component --this will define
//whether the person is old enough or not, and what to display on each case//

//line 5 tells the HTML componet what to display after the
//function has been exed.//

