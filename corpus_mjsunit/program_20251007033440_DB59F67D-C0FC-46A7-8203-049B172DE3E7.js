class C1 extends Uint32Array {
    #d;
    set e(a3) {
    }
}
const v4 = new C1();
let v6 = undefined;
let v7 = undefined;
function f8(a9) {
    function f10() {
    }
    v6 = f10;
    v7 = arguments;
    delete v4[2];
}
function f13() {
    for (i = 0; i < 1000; ++i) {
        const v21 = {};
        Array.prototype.every.call(v7, v6);
    }
}
f8(Uint32Array);
f13();
