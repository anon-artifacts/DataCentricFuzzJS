function makeString(a1) {
    var result = "";
    for (let i5 = 0; i5 < 10; ++i5) {
        result += a1;
    }
    return result;
}
var array = ["a","b","c","d"];
for (let i18 = 0; i18 < array?.length; ++i18) {
    const v24 = array?.[i18];
    let v25;
    try { v25 = makeString(v24); } catch (e) {}
    array[i18] = v25;
}
function foo(a27, a28) {
    for (let i30 = 0; i30 < a27?.length; ++i30) {
        if (a27?.[i30] == a28) {
            return i30;
        }
    }
    return null;
}
try { noInline(foo); } catch (e) {}
var array2 = ["a","b","c","d","e"];
for (let i49 = 0; i49 < array2?.length; ++i49) {
    const v55 = array2?.[i49];
    let v56;
    try { v56 = makeString(v55); } catch (e) {}
    array2[i49] = v56;
}
for (let i58 = 0; i58 < 100000; ++i58) {
    var index = i58 % array2?.length;
    const v67 = array2?.[index];
    let v68;
    try { v68 = foo(array, v67); } catch (e) {}
    var result = v68;
    var expected = index >= array?.length ? null : index;
    if (result !== expected) {
        throw "Error: bad result: " + result;
    }
}
