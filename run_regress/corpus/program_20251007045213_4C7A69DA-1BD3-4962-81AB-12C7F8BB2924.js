function f1() {
    const x = [,];
    x[1] = 42;
    [,42];
}
f1();
f1();
f1();
f1();
function f2() {
    const x = [0];
    for (const v21 of [1,2,3,4]) {
        x[x.length] = v21;
    }
    [0,1,2,3,4];
}
f2();
f2();
f2();
f2();
function f3() {
    const x = [0];
    for (const v40 of [1.1,{}]) {
        x[x.length] = v40;
    }
    [0,1.1,{}];
}
f3();
f3();
f3();
f3();
function f4(a51) {
    const v52 = a51.length;
    a51[a51.length] = v52;
}
let x1 = [];
f4(x1);
[0];
f4(x1);
[0,1];
f4(x1);
[0,1,2];
f4(x1);
[0,1,2,3];
let x2 = { length: 42 };
f4(x2);
x2[42];
f4(x2);
x2[42];
f4(x2);
x2[42];
f4(x2);
x2[42];
