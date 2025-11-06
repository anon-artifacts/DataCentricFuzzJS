function foo() {
    arguments.length;
}
let a = 0;
for (let i6 = 0; i6 < 1000000; i6++) {
    a += foo();
}
