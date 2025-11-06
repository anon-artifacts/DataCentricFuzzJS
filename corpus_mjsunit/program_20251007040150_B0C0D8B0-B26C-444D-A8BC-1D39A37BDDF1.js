function shouldBe(a1, a2) {
}
var didFTLCompile = false;
var ftlTrue = true;
function test1(a8) {
    didFTLCompile = true;
    return 2 in a8;
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
didFTLCompile = false;
for (let i37 = 0; i37 < 100000; ++i37) {
    let v43;
    try { v43 = test1(array); } catch (e) {}
    try { shouldBe(v43, true); } catch (e) {}
}
try { shouldBe(didFTLCompile, true); } catch (e) {}
var array = [1,2,,4];
array.__proto__ = object;
try { ensureArrayStorage(array); } catch (e) {}
let v55;
try { v55 = test1(array); } catch (e) {}
try { shouldBe(v55, false); } catch (e) {}
var array = [];
array.__proto__ = object;
try { ensureArrayStorage(array); } catch (e) {}
let v61;
try { v61 = test1(array); } catch (e) {}
try { shouldBe(v61, false); } catch (e) {}
function test2(a65) {
    didFTLCompile = true;
    return 9 in a65;
}
try { noInline(test2); } catch (e) {}
var array1 = [1,2,3,4,5,6,7,8,9,10];
array1.__proto__ = object;
try { ensureArrayStorage(array1); } catch (e) {}
var array2 = [1,2];
array2.__proto__ = object;
try { ensureArrayStorage(array2); } catch (e) {}
didFTLCompile = false;
for (let i90 = 0; i90 < 100000; ++i90) {
    let v96;
    try { v96 = test2(array2); } catch (e) {}
    try { shouldBe(v96, false); } catch (e) {}
}
try { shouldBe(didFTLCompile, true); } catch (e) {}
let v101;
try { v101 = test2(array2); } catch (e) {}
try { shouldBe(v101, false); } catch (e) {}
let v104;
try { v104 = test2(array1); } catch (e) {}
try { shouldBe(v104, true); } catch (e) {}
