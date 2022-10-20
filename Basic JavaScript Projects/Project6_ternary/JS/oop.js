function vehicle(make, model, year, color) {
        this.vehicle_make = make;
        this.vehicle_model = model;
        this.vehicle_year = year;
        this.vehicle_color = color;
}

var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction()   {
    document.getElementById("keywords_and_constructors").innerHTML =
    "Erik drives a " + Erik.vehicle_color + "-colored" + Erik.vehicle_model + 
    " manufactured in " + Erik.vehicle_year;
}

//the function "Vehicle()" is an object constructor//

//the "this" keyword gets the values of the newly created car object
//with the use of the "new" keyword.//


function pizza(base, topping1, topping2)   {
    this.pizza_base = base;
    this.pizza_topping1 = topping1;
    this.pizza_topping2 = topping2;
}

var Hawaiian = new pizza("marinara", "ham", "pinneaple");
var Blanche = new pizza("white", "ricotta", "mozzarella");
var Delete = new pizza("marinara", "ham", "sausage"); //purposely named variable after reserved keyword//
function pizza_fun()    {
    document.getElementById("new_and_this").innerHTML =
    "Using " + Hawaiian.pizza_base + ", " + Hawaiian.pizza_topping1 + " and " 
    + Hawaiian.pizza_topping2 + " we can make a Hawaiian pizza."
}