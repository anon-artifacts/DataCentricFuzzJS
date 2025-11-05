console.log("Tests that constant folding an access to an uncaptured variable that is captured later in the same basic block doesn't lead to assertion failures.");
var thingy = 456;
function bar() {
    return thingy;
}
function baz(a7) {
    if (a7) {
        return arguments;
    }
}
function foo(a10, a11) {
    const v13 = a11 + 1;
    const t11 = a10 ? bar : bar;
    var x = v13 + t11();
    return baz(x);
}
for (let i20 = 0; i20 < 200; i20++) {
    foo(true, 5)[0];
}
foo(true, 5)[0];
