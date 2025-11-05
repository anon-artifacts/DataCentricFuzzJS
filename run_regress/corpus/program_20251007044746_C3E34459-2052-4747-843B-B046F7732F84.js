console.log("Bound Function Names");
function assert(a4, a5) {
    if (a4) {
        console.log(a5);
    } else {
        console.log(`Bad result: ${a5}`);
    }
}
function f9() {
}
f9.bind().name === "bound ";
function foo() {
}
foo.bind().name === "bound foo";
function bar() {
}
bar.bind().name === "bound bar";
bar.bind().bind().name === "bound bound bar";
console.log("Test InternalFunction names.");
Error.bind().name === "bound Error";
Function.bind().name === "bound Function";
