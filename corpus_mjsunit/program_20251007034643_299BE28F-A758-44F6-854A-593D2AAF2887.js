function fooMaker(a1) {
    var x = a1;
    function f3(a4) {
        for (let i6 = 0; i6 < 1000; ++i6) {
            a4 += x;
        }
        return a4;
    }
    return f3;
}
let v13;
try { v13 = fooMaker(42); } catch (e) {}
var foo = v13;
try { noInline(foo); } catch (e) {}
for (let i18 = 0; i18 < 10000; ++i18) {
    let v25;
    try { v25 = foo(5); } catch (e) {}
    var result = v25;
    if (result != ((42 * 1000) + 5)) {
        throw "Error: bad result: " + result;
    }
}
let v37;
try { v37 = fooMaker(23); } catch (e) {}
let v38;
try { v38 = v37(5); } catch (e) {}
var result = v38;
if (result != ((23 * 1000) + 5)) {
    throw "Error: bad result: " + result;
}
