function foo(a1) {
    a1.x = 0;
    if (a1.x === 0) {
        a1[1] = 0.1;
    }
    a1.x = {};
}
const v10 = new Array(1);
foo(v10);
const v13 = new Array(1);
foo(v13);
const v16 = new Array(1);
foo(v16);
