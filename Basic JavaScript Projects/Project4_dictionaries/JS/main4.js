
//this is how I would create the object//
const pizza = {
    topping: "cheese", //topping is the key and cheese is the value//
    sauce: "marinara",
    size: "small",
    order: function()   {
        return this.size + " " + this.topping + " pizza";
    }
};

//this is to display the data from the object above//
function food()  {
document.getElementById("Dictionary").innerHTML = "I would like a " + pizza.order();
}

// function food () defines the function itself//
//at the end of inner.HTML, I put pizza.order() because
//pizza is the object that I want to mention, and order is the
//property of that object that I want to select. 




//this is another small KVP set I made to demonstrate what happens
// when I delete a property using the command 'delete'
const salad = {
    type: "caesar",
    topping: "croutons",
    size: "small",
    protein: "chicken",
    order: function()   {
        return this.size + " " + this.type + " salad";
    }
};



//here I deleted the property 'protein' from the kvps
//as a result, the function side() will yield 'undefined' when trying to
//call for 'salad.protein'
delete salad.protein;

function side() {
document.getElementById("Dictionary2").innerHTML = "and a " + salad.order() + " with " + salad.protein;
}