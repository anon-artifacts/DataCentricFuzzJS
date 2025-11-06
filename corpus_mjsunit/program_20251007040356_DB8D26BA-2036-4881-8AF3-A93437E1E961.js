function getterFunction(a1) {
    return "getter";
}
const v4 = Array?.prototype;
const v6 = { get: getterFunction };
try { Object.defineProperty(v4, 1, v6); } catch (e) {}
var N = 10000;
try { repeat_str("try { f(); } finally {\n", N); } catch (e) {}
try { repeat_str("}", ""); } catch (e) {}
function repeat_str(a18, a19) {
    const v20 = --a19;
    let v21;
    try { v21 = new Array(v20); } catch (e) {}
    var arr = v21;
    while (a19 != 0) {
        arr[--a19] = a18;
    }
    const v26 = a18?.concat;
    let v27;
    try { v27 = v26.apply(a18, arr); } catch (e) {}
    return v27;
}
