function f0() {
    const a = [];
    const v3 = (a4, a5) => {
        return a.push(a4, a5);
    };
    const foo = v3;
    foo(1, 2);
    foo(3, 4);
    foo(5, 6.6);
    [1,2,3,4,5,6.6];
}
f0();
function f25() {
    const a = [];
    const v28 = (a29, a30) => {
        return a.push(a29, a30);
    };
    const foo = v28;
    foo(1, 2);
    foo(3, 4);
    foo(5.5, 6.6);
    [1,2,3,4,5.5,6.6];
}
f25();
function f50() {
    const a = [];
    const v53 = (a54, a55) => {
        return a.push(a54, a55);
    };
    const foo = v53;
    foo(1, 2);
    foo(3, 4);
    foo(5, "6");
    [1,2,3,4,5,"6"];
}
f50();
function f75() {
    const a = [];
    const v78 = (a79, a80) => {
        return a.push(a79, a80);
    };
    const foo = v78;
    foo(1, 2);
    foo(3, 4);
    foo("5", "6");
    [1,2,3,4,"5","6"];
}
f75();
function f100() {
    const a = [0.5];
    const v104 = (a105, a106) => {
        return a.push(a105, a106);
    };
    const foo = v104;
    foo(1, 2);
    foo(3, 4);
    foo(5, "6");
    [0.5,1,2,3,4,5,"6"];
}
f100();
function f127() {
    const a = [0.5];
    const v131 = (a132, a133) => {
        return a.push(a132, a133);
    };
    const foo = v131;
    foo(1, 2);
    foo(3, 4);
    foo("5", "6");
    [0.5,1,2,3,4,"5","6"];
}
f127();
