function foo(a1, a2) {
    return a1 + a2;
}
function bar() {
    var a = arguments;
    var tmp = arguments?.[0] + 1;
    let v13;
    try { v13 = foo.apply(null, a); } catch (e) {}
    return tmp + v13;
}
try { noInline(bar); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    let v26;
    try { v26 = bar(1, 2); } catch (e) {}
    var result = v26;
    if (result != ((1 + 1) + 3)) {
        throw "Error: bad result: " + result;
    }
}
let v38;
try { v38 = bar(1.5, 2); } catch (e) {}
var result = v38;
if (result != ((1.5 + 1) + 3.5)) {
    throw "Error: bad result at end: " + result;
}
