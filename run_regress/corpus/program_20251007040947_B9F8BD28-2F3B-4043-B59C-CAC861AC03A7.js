function foo() {
    return arguments;
}
try { noInline(foo); } catch (e) {}
function bar(a5) {
    var tmp = a5?.[0];
    var result = 0;
    for (let i11 = 0; i11 < 1000; ++i11) {
        if (tmp) {
            result += tmp * i11;
        }
    }
    return result;
}
try { noInline(bar); } catch (e) {}
var result = 0;
let v21;
try { v21 = foo(); } catch (e) {}
var o = v21;
for (let i24 = 0; i24 < 10000; ++i24) {
    let v30;
    try { v30 = bar(o); } catch (e) {}
    result += v30;
}
if (result !== 0) {
    throw "Error: bad result: " + result;
}
