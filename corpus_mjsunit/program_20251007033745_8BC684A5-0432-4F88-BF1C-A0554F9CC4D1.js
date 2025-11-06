console.log("Tests stability of the DFG compiler when you have a double use of a variable that is not revealed to be a double until after CFG simplification.");
function foo(a4) {
    var p = true;
    var x;
    if (p) {
        x = 42;
    } else {
        x = "yo";
    }
    return x + a4;
}
for (let i13 = 0; i13 < 200; i13++) {
    foo(0.5);
}
foo(0.5);
