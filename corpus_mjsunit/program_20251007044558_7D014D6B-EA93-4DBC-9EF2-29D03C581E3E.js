function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
var object = { a: 10 };
function f11() {
    return this?.a;
}
function f14(a15) {
    this.a = a15;
}
const v17 = { get: f11, set: f14 };
const v18 = { 0: v17 };
try { Object.defineProperties(object, v18); } catch (e) {}
var array = [0,1,2,3,4,5];
try { ensureArrayStorage(array); } catch (e) {}
function testInBound(a32) {
    return a32?.length;
}
try { noInline(testInBound); } catch (e) {}
for (let i37 = 0; i37 < 100000; ++i37) {
    let v43;
    try { v43 = testInBound(array); } catch (e) {}
    try { shouldBe(v43, 6); } catch (e) {}
}
function testUncountable(a47) {
    return a47?.length;
}
try { noInline(testUncountable); } catch (e) {}
for (let i51 = 0; i51 < 100000; ++i51) {
    let v57;
    try { v57 = testUncountable(array); } catch (e) {}
    try { shouldBe(v57, 6); } catch (e) {}
}
array.length = 4294967295 - 1;
for (let i64 = 0; i64 < 100000; ++i64) {
    let v70;
    try { v70 = testUncountable(array); } catch (e) {}
    const v73 = 4294967295 - 1;
    try { shouldBe(v70, v73); } catch (e) {}
}
var slowPutArray = [0,1,2,3,4,5];
try { ensureArrayStorage(slowPutArray); } catch (e) {}
slowPutArray.__proto__ = object;
function testSlowPutInBound(a85) {
    return a85?.length;
}
try { noInline(testSlowPutInBound); } catch (e) {}
for (let i89 = 0; i89 < 100000; ++i89) {
    let v95;
    try { v95 = testSlowPutInBound(slowPutArray); } catch (e) {}
    try { shouldBe(v95, 6); } catch (e) {}
}
function testSlowPutUncountable(a99) {
    return a99?.length;
}
try { noInline(testSlowPutUncountable); } catch (e) {}
for (let i103 = 0; i103 < 100000; ++i103) {
    let v109;
    try { v109 = testSlowPutUncountable(slowPutArray); } catch (e) {}
    try { shouldBe(v109, 6); } catch (e) {}
}
slowPutArray.length = 4294967295 - 1;
for (let i116 = 0; i116 < 100000; ++i116) {
    let v122;
    try { v122 = testSlowPutUncountable(slowPutArray); } catch (e) {}
    const v125 = 4294967295 - 1;
    try { shouldBe(v122, v125); } catch (e) {}
}
