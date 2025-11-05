const v2 = new Int32Array(100);
var a = v2;
a.__proto__ = null;
function get(a6) {
    return a6.length;
}
get(a);
get(a);
get(a);
get(a);
function f16(a17) {
    return a17.byteLength;
}
get = f16;
get(a);
get(a);
get(a);
get(a);
function f27(a28) {
    return a28.byteOffset;
}
get = f27;
get(a);
get(a);
get(a);
get(a);
function f38() {
    'use strict';
    class C39 extends Int32Array {
        get length() {
            return "length";
        }
    }
    const v42 = new C39();
    a = v42;
    function f43(a44) {
        return a44.length;
    }
    get = f43;
    get(a);
    get(a);
    get(a);
    get(a);
    a.__proto__ = null;
    function f55(a56) {
        return a56.length;
    }
    get = f55;
    get(a);
    get(a);
    get(a);
    get(a);
}
f38();
function f67() {
    'use strict';
    class C68 extends Int32Array {
        constructor(a70) {
            super(a70);
        }
    }
    const v72 = new C68(1024);
    a = v72;
    function f73(a74) {
        return a74.length;
    }
    get = f73;
    get(a);
    get(a);
    get(a);
    get(a);
}
f67();
function f85() {
    'use strict';
    const v88 = new Uint8Array(4);
    var a = v88;
    function f91() {
        return "blah";
    }
    Object.defineProperty(a, "length", { get: f91 });
    function f96(a97) {
        return a97.length;
    }
    get = f96;
    get(a);
    get(a);
    get(a);
    get(a);
}
f85();
Int32Array.prototype.__proto__.hasOwnProperty("length");
Int32Array.prototype.__proto__.hasOwnProperty("byteOffset");
Int32Array.prototype.__proto__.hasOwnProperty("byteLength");
const t90 = Int32Array.prototype.__proto__;
delete t90.length;
const t95 = Int32Array.prototype.__proto__;
delete t95.byteOffset;
const t97 = Int32Array.prototype.__proto__;
delete t97.byteLength;
const v130 = new Int32Array(100);
a = v130;
function f131(a132) {
    return a132.length;
}
get = f131;
get(a);
get(a);
get(a);
get(a);
function f142(a143) {
    return a143.byteLength;
}
get = f142;
get(a);
get(a);
get(a);
get(a);
function f153(a154) {
    return a154.byteOffset;
}
get = f153;
get(a);
get(a);
get(a);
get(a);
