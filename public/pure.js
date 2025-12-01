// pure fx
// gives the same results with the same inputs

function add(x,y){
    return x+y
}// both x&y were declared in the fx

// this will produce the same results

add(1,2);
add(1,2);
add(1,2)

// impure fx

function add2(x,y){
    console.log(x+y);// external and produces observable side effects
    return x+y
}// console is external, not passed as a variabloe for the fx

add2(1+2);