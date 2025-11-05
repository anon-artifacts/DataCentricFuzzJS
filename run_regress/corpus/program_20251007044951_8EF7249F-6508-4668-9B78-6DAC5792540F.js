function f0() {
    const a = [];
    const v3 = (a4) => {
        a.push(a4);
        return a4;
    };
    const bar = v3;
    const v7 = (a8) => {
        return a.push(bar(a8), bar(a8));
    };
    const foo = v7;
    foo(1);
    foo(2);
    foo(3);
    [1,1,1,1,2,2,2,2,3,3,3,3];
}
f0();
function f33() {
    let y = 1;
    const a = [];
    const v38 = (a39) => {
        a.push(y);
        return a39;
    };
    const bar = v38;
    const v42 = (a43) => {
        return a.push(bar(a43), bar(a43));
    };
    const foo = v42;
    foo(1);
    y = 2;
    foo(2);
    y = 3;
    foo(3);
    y = 4.4;
    foo(4);
    [1,1,1,1,2,2,2,2,3,3,3,3,4.4,4.4,4,4];
}
f33();
function f77() {
    let y = 1;
    const a = [0.5];
    const v83 = (a84) => {
        a.push(y);
        return a84;
    };
    const bar = v83;
    const v87 = (a88) => {
        return a.push(bar(a88), bar(a88));
    };
    const foo = v87;
    foo(1);
    y = 2;
    foo(2);
    y = 3;
    foo(3);
    y = "4";
    foo(4);
    [0.5,1,1,1,1,2,2,2,2,3,3,3,3,"4","4",4,4];
}
f77();
