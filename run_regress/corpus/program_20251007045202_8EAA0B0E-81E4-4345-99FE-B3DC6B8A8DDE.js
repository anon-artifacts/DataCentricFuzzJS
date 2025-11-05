function setterFunction(a1) {
    called = true;
}
function getterFunction(a5) {
    return "getter";
}
const v8 = Array?.prototype;
const v10 = { get: getterFunction, set: setterFunction };
try { Object.defineProperty(v8, 1, v10); } catch (e) {}
try { gczeal(4); } catch (e) {}
var N = 350;
let v20;
try { v20 = repeat_str("try { f(); } finally {\n", N); } catch (e) {}
let v22;
try { v22 = repeat_str("}", N); } catch (e) {}
let v24;
try { v24 = ("").concat(v20, v22); } catch (e) {}
var source = v24;
function repeat_str(a27, a28) {
    const v29 = --a28;
    let v30;
    try { v30 = new Array(v29); } catch (e) {}
    var arr = v30;
    while (a28 != 0) {
        arr[--a28] = a27;
    }
    const v35 = a27?.concat;
    let v36;
    try { v36 = v35.apply(a27, arr); } catch (e) {}
    return v36;
}
