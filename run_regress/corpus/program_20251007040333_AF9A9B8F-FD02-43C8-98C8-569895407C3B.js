const v2 = new Int8Array(1);
var typedArray = v2;
var saved;
var called;
class C8 extends Int8Array {
    constructor(a10) {
        super(a10);
        called = true;
        saved = a10;
    }
}
typedArray.constructor = C8;
function f12() {
}
typedArray.map(f12);
