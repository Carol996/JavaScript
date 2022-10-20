function ride_function()    {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "you are too short" : "you are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}