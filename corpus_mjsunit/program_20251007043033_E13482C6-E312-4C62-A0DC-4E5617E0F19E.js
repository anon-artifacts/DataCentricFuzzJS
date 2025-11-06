function Module(a1, a2, a3) {
    'use asm';
    const t2 = a1.Int32Array;
    const v5 = new t2(a3);
    var a = v5;
    const t5 = a1.Float32Array;
    const v8 = new t5(a3);
    var b = v8;
    var fround = a1.Math.fround;
    var value = a2.value | 0;
    function foo() {
        var x = fround(0);
        a[0] = value | 0;
        return fround(x = fround(b[0]));
    }
    return { foo: foo };
}
const v29 = new ArrayBuffer(32);
var buffer = v29;
Module(this, { value: 0 }, buffer).foo();
-0;
Module(this, { value: 2147483648 }, buffer).foo();
Module(this, { value: 1084227584 }, buffer).foo();
-5;
Module(this, { value: 3231711232 }, buffer).foo();
Module(this, { value: 1124163584 }, buffer).foo();
-129.375;
Module(this, { value: 3271647232 }, buffer).foo();
Module(this, { value: 2139095040 }, buffer).foo();
-Infinity;
Module(this, { value: 4286578688 }, buffer).foo();
Module(this, { value: 2147483647 }, buffer).foo();
