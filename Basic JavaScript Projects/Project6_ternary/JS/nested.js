function count_function()   {
    document.getElementById("counting").innerHTML = count();
    function count ()   {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}

//line  5 has the nested function//

function nest_fun()   {
    document.getElementById("nested_function").innerHTML = the_nest();
    function the_nest ()   {
        var starting_point = 25;
        function times_two() {starting_point * 2;}
        times_two();
        return starting_point;
    }
}
