function f1() {
    var args = arguments;
    const v4 = () => {
        return args?.[0];
    };
    return v4;
}
let v6;
try { v6 = f1(1); } catch (e) {}
var fn = v6;
try { noInline(fn); } catch (e) {}
for (let i11 = 0; i11 < 10000; i11++) {
    let v18;
    try { v18 = fn(2); } catch (e) {}
    if (v18 !== 1) {
        throw 0;
    }
}
