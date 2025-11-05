function f0() {
}
function arr() {
    const v5 = [1,2,3];
    const v8 = { writable: false };
    let v10;
    try { v10 = Object.defineProperty(v5, 0, v8); } catch (e) {}
    return v10;
}
function obj() {
    var o = { 0: 1, 1: 2, 2: 3, length: 3 };
    const v20 = { writable: false };
    try { Object.defineProperty(o, 0, v20); } catch (e) {}
    return o;
}
let v26;
try { v26 = raisesException(TypeError); } catch (e) {}
let v27;
try { v27 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var a = arr(); [a.unshift(40, 50), a]", v26, v27); } catch (e) {}
let v32;
try { v32 = raisesException(TypeError); } catch (e) {}
let v33;
try { v33 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var o = obj(); [Array.prototype.unshift.call(o, 40, 50), o]", v32, v33); } catch (e) {}
function agap() {
    var a = [1,2,,4];
    const v45 = { configurable: false };
    try { Object.defineProperty(a, 3, v45); } catch (e) {}
    return a;
}
function ogap() {
    var o = { 0: 1, 1: 2, 3: 4, length: 4 };
    const v57 = { configurable: false };
    try { Object.defineProperty(o, 3, v57); } catch (e) {}
    return o;
}
let v61;
try { v61 = raisesException(TypeError); } catch (e) {}
let v62;
try { v62 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var a = agap(); [a.unshift(9), a]", v61, v62); } catch (e) {}
let v66;
try { v66 = raisesException(TypeError); } catch (e) {}
let v67;
try { v67 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var o = ogap(); [Array.prototype.unshift.call(o, 9), o]", v66, v67); } catch (e) {}
try { f0(true, true); } catch (e) {}
