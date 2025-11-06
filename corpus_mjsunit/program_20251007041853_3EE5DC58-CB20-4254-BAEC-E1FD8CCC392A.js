console.log("Tests that defining a setter on the Array prototype works with ArrayPush.");
var ouches = 0;
function f6() {
    ouches++;
}
Array.prototype.__defineSetter__("3", f6);
function foo() {
    var result = [];
    for (let i15 = 0; i15 < 5; ++i15) {
        result.push(i15);
    }
    return result;
}
for (let i23 = 0; i23 < 200; i23++) {
    foo().join(",");
}
foo().join(",");
