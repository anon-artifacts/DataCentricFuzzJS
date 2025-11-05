var x = { f: 20 };
function foo() {
    for (let i5 = 0; i5 < 10; i5++) {
        x?.f;
    }
}
foo();
gc();
x = undefined;
foo();
