console.log("Tests that having a dead, and redundant, use of array.length doesn't cause compiler crashes.");
function foo(a4) {
    var x = a4.length;
    return a4.length;
}
for (let i9 = 0; i9 < 200; i9++) {
    foo([1,2,3]);
}
foo([1,2,3]);
