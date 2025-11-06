function f() {
    const v2 = new Object();
    var x = v2;
    x.y = 1;
    delete x.y;
    if (x.y === undefined) {
        print("Pass");
    }
    return x;
}
function g(a13) {
    delete a13.y;
}
g(f());
