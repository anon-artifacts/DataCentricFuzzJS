function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 != a1?.length; i5 += 2) {
        var element = a1?.[i5];
        if (element === void 0) {
            break;
        }
        result += a1?.[i5];
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var array = [1,2,3,4];
for (let i26 = 0; i26 < 10000; ++i26) {
    let v32;
    try { v32 = foo(array); } catch (e) {}
    var result = v32;
    if (result != 4) {
        throw "Error: bad result in loop: " + result;
    }
}
var array = [1,2,3];
let v43;
try { v43 = foo(array); } catch (e) {}
var result = v43;
if (result != 4) {
    throw "Error: bad result at end: " + result;
}
