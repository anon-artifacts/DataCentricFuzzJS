console.log("Tests that DFG getter caching does not break the world if the getter throws an exception.");
function foo(a4) {
    return a4.f;
}
function bar(a7) {
    try {
        return "Returned result: " + foo(a7);
    } catch(e11) {
        return "Threw exception: " + e11;
    }
}
for (let i15 = 0; i15 < 200; ++i15) {
    const v22 = new Object();
    var o = v22;
    function f25() {
        if (i15 < 100) {
            return i15;
        } else {
            throw "Oh hi, I'm an exception!";
        }
    }
    o.__defineGetter__("f", f25);
    bar(o);
}
