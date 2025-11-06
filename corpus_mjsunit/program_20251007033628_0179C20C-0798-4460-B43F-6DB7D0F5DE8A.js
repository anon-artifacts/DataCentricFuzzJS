function* f0() {
    yield;
}
var gen = f0();
var t = gen.throw;
try {
    new t();
} catch(e7) {
    actual = e7;
}
actual.name;
const v12 = actual.message;
/is not a constructor/.test(v12);
