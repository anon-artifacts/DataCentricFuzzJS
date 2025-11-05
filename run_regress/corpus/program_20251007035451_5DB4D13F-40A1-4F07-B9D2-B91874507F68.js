function f(a1) {
    a1.x = 0;
    a1[0] = 0.1;
    a1.x = {};
}
const v7 = new Array(1);
f(v7);
const v10 = new Array(1);
f(v10);
const v12 = new Array();
f(v12);
const v15 = new Array(1);
f(v15);
