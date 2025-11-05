console.log("Tests that DFG NewArrayBuffer works when having a bad time.");
function f4() {
    console.log("Ouch!");
}
Array.prototype.__defineSetter__("100", f4);
function foo() {
    return ["foo",42,23.5];
}
for (let i16 = 0; i16 < 200; i16++) {
    foo()[0];
}
foo()[0] === "foo";
for (let i29 = 0; i29 < 200; i29++) {
    foo()[1];
}
foo()[1] === 42;
for (let i42 = 0; i42 < 200; i42++) {
    foo()[2];
}
foo()[2] === 23.5;
