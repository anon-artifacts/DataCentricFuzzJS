function fooMaker(a1) {
    var x = a1;
    var x2 = a1 + 1;
    var x3 = a1 + 2;
    var x4 = a1 + 3;
    var x5 = a1 + 4;
    var x6 = a1 + 5;
    var x7 = a1 + 6;
    var x8 = a1 + 7;
    var x9 = a1 + 8;
    var x10 = a1 + 9;
    function f30(a31) {
        for (let i33 = 0; i33 < 1000; ++i33) {
            a31 += ((((((((x + x2) + x3) + x4) + x5) + x6) + x7) + x8) + x9) + x10;
        }
        return a31;
    }
    return f30;
}
let v49;
try { v49 = fooMaker(42); } catch (e) {}
var foo = v49;
try { noInline(foo); } catch (e) {}
for (let i54 = 0; i54 < 10000; ++i54) {
    let v61;
    try { v61 = foo(5); } catch (e) {}
    var result = v61;
    if (result != 465005) {
        throw "Error: bad result: " + result;
    }
}
let v69;
try { v69 = fooMaker(23); } catch (e) {}
let v70;
try { v70 = v69(5); } catch (e) {}
var result = v70;
if (result != 275005) {
    throw "Error: bad result: " + result;
}
