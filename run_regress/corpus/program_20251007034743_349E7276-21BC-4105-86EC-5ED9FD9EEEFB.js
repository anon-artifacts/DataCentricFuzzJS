function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function test1(a9) {
    return 2 in a9;
}
try { noInline(test1); } catch (e) {}
var object = { a: 10 };
function f17() {
    return this?.a;
}
function f20(a21) {
    this.a = a21;
}
const v23 = { get: f17, set: f20 };
const v24 = { 0: v23 };
try { Object.defineProperties(object, v24); } catch (e) {}
var array = [1,2,3,4];
array.__proto__ = object;
try { ensureArrayStorage(array); } catch (e) {}
for (let i36 = 0; i36 < 100000; ++i36) {
    let v42;
    try { v42 = test1(array); } catch (e) {}
    try { shouldBe(v42, true); } catch (e) {}
}
var array = [1,2,,4];
array.__proto__ = object;
try { ensureArrayStorage(array); } catch (e) {}
let v52;
try { v52 = test1(array); } catch (e) {}
try { shouldBe(v52, false); } catch (e) {}
var array = [];
array.__proto__ = object;
try { ensureArrayStorage(array); } catch (e) {}
let v58;
try { v58 = test1(array); } catch (e) {}
try { shouldBe(v58, false); } catch (e) {}
function test2(a62) {
    return 2 in a62;
}
try { noInline(test2); } catch (e) {}
var array1 = [1,2,3,4];
array1.__proto__ = object;
try { ensureArrayStorage(array1); } catch (e) {}
var array2 = [1,2];
array2.__proto__ = object;
try { ensureArrayStorage(array2); } catch (e) {}
for (let i79 = 0; i79 < 100000; ++i79) {
    let v85;
    try { v85 = test2(array2); } catch (e) {}
    try { shouldBe(v85, false); } catch (e) {}
}
let v88;
try { v88 = test2(array2); } catch (e) {}
try { shouldBe(v88, false); } catch (e) {}
let v91;
try { v91 = test2(array1); } catch (e) {}
try { shouldBe(v91, true); } catch (e) {}
