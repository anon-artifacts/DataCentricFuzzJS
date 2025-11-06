const v1 = String.prototype;
Object.defineProperty(v1, "0", { __v_1: 1 });
const v7 = String.prototype;
Object.defineProperty(v7, "3", { __v_1: 1 });
function f12() {
    const v13 = new String();
    var s = v13;
    function set(a16, a17, a18) {
        a16[a17] = a18;
    }
    set(s, 10, "value");
    set(s, 1073741823, "value");
}
f12();
function __f_11() {
    const v27 = new String();
    Object.preventExtensions(v27);
}
__f_11();
__f_11();
function f31() {
    var i = 10;
    const v35 = new String("foo");
    var a = v35;
    for (let i38 = 0; i38 < i; i38++) {
        a[i38] = {};
    }
}
f31();
