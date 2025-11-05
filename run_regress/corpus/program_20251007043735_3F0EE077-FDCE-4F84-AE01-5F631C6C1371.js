global = -1073741824;
global = 2;
function foo() {
    global = "a";
    global = global;
    var o = global;
    while (o < 2) {
    }
}
foo();
