var stdlib = {};
var foreign = {};
const v8 = new ArrayBuffer(64 * 1024);
var heap = v8;
function Module(a11, a12, a13) {
    'use asm';
    function rol() {
        y = "a" > false;
        return y + (1 - y);
    }
    return { rol: rol };
}
var rol = Module(stdlib, foreign, heap).rol;
rol();
