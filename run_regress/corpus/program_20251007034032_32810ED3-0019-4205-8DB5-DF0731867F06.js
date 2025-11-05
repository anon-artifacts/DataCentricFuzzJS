var a = 3;
function test() {
    for (let i4 = 0; i4 < a; i4++) {
        print(i4);
    }
    throw 1;
}
function f12() {
    try {
        test();
    } catch(e14) {
        print(e14 === 1);
    }
}
f12();
