var n = 10000000;
function bar(a3) {
    try { a3(10); } catch (e) {}
}
function foo(a7) {
    var result = 0;
    var imUndefined;
    var baz;
    function f14(a15) {
        result = a15;
        return baz;
    }
    var set = f14;
    baz = 40;
    if (a7) {
        try { bar(set); } catch (e) {}
        if (result != 10) {
            throw "Error: bad: " + result;
        }
        if (baz !== 40) {
            throw "Error: bad: " + baz;
        }
        if (imUndefined !== void 0) {
            throw "Error: bad value: " + imUndefined;
        }
        return 0;
    }
    return result;
}
try { noInline(bar); } catch (e) {}
try { noInline(foo); } catch (e) {}
for (let i37 = 0; i37 < n; i37++) {
    const v44 = !(i37 % 100);
    let v45;
    try { v45 = foo(v44); } catch (e) {}
    var result = v45;
    if (result != 0) {
        throw "Error: bad result: " + result;
    }
}
