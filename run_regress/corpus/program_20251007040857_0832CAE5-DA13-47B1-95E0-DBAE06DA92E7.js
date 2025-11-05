function foo(a1, a2) {
    try { possiblyDoBadThings(a2); } catch (e) {}
    let v5;
    try { v5 = a1.f(); } catch (e) {}
    return v5;
}
try { noInline(foo); } catch (e) {}
function Thingy() {
}
function f9() {
    return 42;
}
const t12 = Thingy?.prototype;
t12.f = f9;
function possiblyDoBadThings(a13) {
    if (a13) {
        function f14() {
            return 24;
        }
        const t19 = Thingy?.prototype;
        t19.f = f14;
    }
}
try { noInline(possiblyDoBadThings); } catch (e) {}
for (let i19 = 0; i19 < 100000; ++i19) {
    let v25;
    try { v25 = new Thingy(); } catch (e) {}
    let v27;
    try { v27 = foo(v25, false); } catch (e) {}
    var result = v27;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
let v33;
try { v33 = new Thingy(); } catch (e) {}
let v35;
try { v35 = foo(v33, true); } catch (e) {}
var result = v35;
if (result != 24) {
    throw "Error: bad result: " + result;
}
