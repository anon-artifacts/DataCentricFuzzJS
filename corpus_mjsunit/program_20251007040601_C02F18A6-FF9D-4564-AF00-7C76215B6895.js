function foo(a1) {
    return (a1[0] >>> 0) > 0;
}
const v10 = new Uint32Array([4]);
var a = v10;
const v14 = new Uint32Array([2147483648]);
var b = v14;
foo(a);
foo(a);
foo(b);
