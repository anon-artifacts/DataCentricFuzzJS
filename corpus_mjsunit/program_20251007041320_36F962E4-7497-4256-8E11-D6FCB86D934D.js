var o = { x: 1 };
function Ctor() {
}
function f4() {
    let v5 = o.x;
    return v5++;
}
const t7 = Ctor.prototype;
t7.valueOf = f4;
const v8 = new Ctor();
var c = v8;
function f10(a11, a12) {
    var n = 0;
    for (let i16 = 0; i16 < 1; i16++) {
        if (a11.x < a12) {
            n += a11.x;
        } else {
            n -= a11.x;
        }
    }
    return n;
}
var test_less = f10;
print("RESULT: " + test_less(o, c));
