const v2 = [];
const v3 = [v2,v2,v2];
[-2147483649,v2];
class C5 {
    static 128 = v2;
}
const v6 = new C5();
new C5();
const v8 = new C5();
function F9(a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
}
new F9(4096, v8, v3);
new F9(F9, v6, v3);
const v18 = {
    get hello() {
        return 42;
    },
};
var object = v18;
function f20() {
    var value = "hello";
    if ((object?.[value] + 20) !== 62) {
        let v28;
        try { v28 = new C5(); } catch (e) {}
        throw v28;
    }
}
try { noInline(f20); } catch (e) {}
for (let i32 = 0; i32 < 10000; ++i32) {
    try { f20(); } catch (e) {}
}
