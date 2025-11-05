console.log("This tests that inlining correctly handles constant buffers.");
function foo() {
    return [1,2,3,4];
}
function bar() {
    return foo();
}
for (let i12 = 0; i12 < 1000; ++i12) {
    bar();
}
for (let i20 = 0; i20 < 10; ++i20) {
    bar()[0];
    bar()[1];
    bar()[2];
    bar()[3];
}
var successfullyParsed = true;
