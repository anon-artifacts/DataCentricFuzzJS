PAGE_SIZE = 65536;
PAGES = 10;
const v5 = WebAssembly.Memory;
const v8 = new v5({ initial: PAGES });
memory = v8;
buffer = memory.buffer;
const v14 = { Int32Array: Int32Array };
const v15 = {};
function f17(a18, a19, a20) {
    'use asm';
    const t10 = a18.Int32Array;
    const v22 = new t10(a20);
    var array = v22;
    function f24() {
        array[0] = 1094861636;
        array[1] = 1162233672;
    }
    return f24;
}
var func = f17(v14, v15, buffer);
for (let i30 = 0; i30 < 1000; ++i30) {
    func();
}
memory.grow(1);
func();
for (let i41 = 0; i41 < 2; ++i41) {
    new ArrayBuffer(PAGE_SIZE * PAGES);
}
