function foo(a1) {
    return a1?.f;
}
try { noInline(foo); } catch (e) {}
const t4 = String?.prototype;
t4.f = 42;
const t6 = Number?.prototype;
t6.f = 24;
for (let i12 = 0; i12 < 100000; ++i12) {
    let v19;
    try { v19 = foo("hello"); } catch (e) {}
    var result = v19;
    if (result != 42) {
        throw "Error: bad result for string: " + result;
    }
    let v26;
    try { v26 = foo(13); } catch (e) {}
    result = v26;
    if (result != 24) {
        throw "Error: bad result for number: " + result;
    }
    const v32 = { f: 84 };
    let v33;
    try { v33 = foo(v32); } catch (e) {}
    result = v33;
    if (result != 84) {
        throw "Error: bad result for object: " + result;
    }
}
