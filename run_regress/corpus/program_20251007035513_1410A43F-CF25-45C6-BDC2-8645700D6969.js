console.log("Tests that DFG NewArray works when having a bad time.");
function f4() {
    console.log("Ouch!");
}
Array.prototype.__defineSetter__("100", f4);
function foo() {
    return ["foo",42,{ f: 23 }];
}
for (let i17 = 0; i17 < 200; i17++) {
    foo()[0];
    foo()[1];
    foo()[2];
}
foo()[0];
foo()[1];
foo()[2];
