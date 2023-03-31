$(document).keyup(function(event) {
    if (event.which === 13) {
        value("doit");
    }
    else if (event.which === 8) {
        value("del");
    }
    else if (event.which === 27) {
        value("C");
    }
    else if (event.which === 48 || event.which == 96) {
        value("0");
    }
    else if (event.which === 49 || event.which == 97) {
        value("1");
    }
    else if (event.which === 50 || event.which == 98) {
        value("2");
    }
    else if (event.which === 51 || event.which == 99) {
        value("3");
    }
    else if (event.which === 52 || event.which == 100) {
        value("4");
    }
    else if (event.which === 53 || event.which == 101) {
        value("5");
    }
    else if (event.which === 54 || event.which == 102) {
        value("6");
    }
    else if (event.which === 55 || event.which == 103) {
        value("7");
    }
    else if (event.which === 56 || event.which == 104) {
        value("8");
    }
    else if (event.which === 57 || event.which == 105) {
        value("9");
    }
    else if (event.which === 106) {
        value("*");
    }
    else if (event.which === 107) {
        value("+");
    }
    else if (event.which === 109) {
        value("-");
    }
    else if (event.which === 110) {
        value(".");
    }
    else if (event.which === 111) {
        value("/");
    }
});


function calculation(fn) {
return new Function('return ' + fn)();
}

function value(x)
{
// console.log(x);
var screen=document.getElementById("s-calc");
var history=document.getElementById("s-history");
if(x=="doit")
{
    var prev=screen.value;
    history.value=prev;
    screen.value=calculation(prev);

}
else if(x=="del")
{
        // text.slice(0, -1)
        screen.value=screen.value.slice(0,-1);
}
else if(x=="C")
{
    history.value="";
    screen.value="";
}
else
{
    var prev=screen.value;
    screen.value=prev+x;
}
}