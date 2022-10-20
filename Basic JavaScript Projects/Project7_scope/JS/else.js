function age_function() {
    age = document.getElementById("age").value;
    if (age >= 18)  {
        vote = "you are old enough to vote"
    }
    else{
        vote = "you are not old enough to vote, come back later";
    }
    document.getElementById("how_old").innerHTML = vote;
}

//--------------donation else/if ----------//

function bid_func() {
    amount = document.getElementById("amount").value;
    if ( amount <= 4.99)    {
        bid = "minimum $5 required"
    }
    else {
        bid = "thank you for contributing!";
    }
    document.getElementById("bid").innerHTML = bid;
}