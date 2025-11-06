const v0 = [4294967297,-1514516017,-9,2147483647,1857994140,65536,-9223372036854775807,-2147483649];
const v1 = [-819260684,9223372036854775807,-18758,-743372894];
const v2 = [4294967296,9007199254740991,65537,2147483647,-9,955595766,268435456];
class C6 {
    constructor(a8, a9, a10, a11) {
        %VerifyType(C6);
        try { C6(C6); } catch (e) {}
    }
    #h;
    [v2];
    valueOf(a14, a15, a16) {
        function f17(a18, a19, a20) {
            return { [-1]: 481135.3413286838, c: this, h: a20 };
        }
        f17(a15, a14, v1);
        f17(a15, 2.0, a15);
        f17(this, v1, v0);
        return v2;
    }
}
const v25 = new C6();
function f26(a27, a28, a29) {
    const v35 = {
        65536: a27,
        m(a31, a32, a33, a34) {
        },
    };
}
f26(v25, 481135.3413286838, C6);
const v38 = new Array();
var inner = v38;
inner.a = { x: 1 };
const v43 = {};
function foo(a45) {
    a45.field;
}
var outer = {};
[1073741823,-14,-15,-31767,2];
new Float64Array(7);
new Uint8ClampedArray(10);
new BigInt64Array(129);
outer.field = inner;
foo(outer);
foo(outer);
foo(outer);
const v64 = {
    get x() {
        return 2147483647;
    },
};
var v = v64;
inner.b = v;
gc();
var boom = foo(outer);
print(boom);
