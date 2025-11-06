function bar() {
    throw {};
}
function foo() {
    bar();
}
for (let i5 = 0; i5 < 5; ++i5) {
    try {
        foo();
    } catch(e12) {
    }
}
try {
    foo();
} catch(e14) {
}
