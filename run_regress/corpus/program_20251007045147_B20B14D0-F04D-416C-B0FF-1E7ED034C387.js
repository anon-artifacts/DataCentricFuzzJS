function fooMaker(a1) {
    var x = a1;
    var x2 = a1 + 1;
    function f6(a7) {
        for (let i9 = 0; i9 < 1000; ++i9) {
            a7 += x + x2;
        }
        return a7;
    }
    return f6;
}
let v17;
try { v17 = fooMaker(42); } catch (e) {}
var foo = v17;
try { noInline(foo); } catch (e) {}
for (let i22 = 0; i22 < 10000; ++i22) {
    let v29;
    try { v29 = foo(5); } catch (e) {}
    var result = v29;
    if (result != (((42 + 43) * 1000) + 5)) {
        throw "Error: bad result: " + result;
    }
}
let v43;
try { v43 = fooMaker(23); } catch (e) {}
let v44;
try { v44 = v43(5); } catch (e) {}
var result = v44;
if (result != (((23 + 24) * 1000) + 5)) {
    throw "Error: bad result: " + result;
}
