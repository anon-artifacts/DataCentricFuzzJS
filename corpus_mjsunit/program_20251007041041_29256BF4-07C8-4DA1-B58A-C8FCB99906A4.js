function f1(a1) {
    return a1?.[0];
}
function f2(a4) {
    let v6;
    try { v6 = f1(arguments); } catch (e) {}
    return a4 = v6;
}
function f3(a8) {
    let v9;
    try { v9 = f2(a8); } catch (e) {}
    return v9;
}
try { noInline(f3); } catch (e) {}
for (let i13 = 0; i13 < 10000; ++i13) {
    let v20;
    try { v20 = f3(42); } catch (e) {}
    var result = v20;
    if (result != 42) {
        throw "Error: bad result: " + result;
    }
}
