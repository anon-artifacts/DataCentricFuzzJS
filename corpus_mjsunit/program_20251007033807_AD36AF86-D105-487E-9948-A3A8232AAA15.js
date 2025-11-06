function f0() {
}
function obj() {
    var o = { all: 1, nowrite: 1, noconfig: 1, noble: 1 };
    const v10 = { writable: false };
    try { Object.defineProperty(o, "nowrite", v10); } catch (e) {}
    const v15 = { configurable: false };
    try { Object.defineProperty(o, "noconfig", v15); } catch (e) {}
    const v20 = { writable: false, configurable: false };
    try { Object.defineProperty(o, "noble", v20); } catch (e) {}
    return o;
}
let v25;
try { v25 = returns(2); } catch (e) {}
let v27;
try { v27 = returns(2); } catch (e) {}
try { testLenientAndStrict("var o = obj(); o.all = 2; o.all", v25, v27); } catch (e) {}
let v33;
try { v33 = returns(1); } catch (e) {}
let v36;
try { v36 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var o = obj(); o.nowrite = 2; o.nowrite", v33, v36); } catch (e) {}
let v41;
try { v41 = returns(2); } catch (e) {}
let v43;
try { v43 = returns(2); } catch (e) {}
try { testLenientAndStrict("var o = obj(); o.noconfig = 2; o.noconfig", v41, v43); } catch (e) {}
let v48;
try { v48 = returns(1); } catch (e) {}
let v49;
try { v49 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var o = obj(); o.noble = 2; o.noble", v48, v49); } catch (e) {}
let v54;
try { v54 = returns(1); } catch (e) {}
let v55;
try { v55 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("obj().nowrite++", v54, v55); } catch (e) {}
let v60;
try { v60 = returns(2); } catch (e) {}
let v61;
try { v61 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("++obj().nowrite", v60, v61); } catch (e) {}
let v66;
try { v66 = returns(1); } catch (e) {}
let v67;
try { v67 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("obj().nowrite--", v66, v67); } catch (e) {}
let v72;
try { v72 = returns(0); } catch (e) {}
let v73;
try { v73 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("--obj().nowrite", v72, v73); } catch (e) {}
function arr() {
    const v81 = [1,1,1,1];
    const v83 = { writable: false };
    const v85 = { configurable: false };
    const v88 = { writable: false, configurable: false };
    const v89 = { 1: v83, 2: v85, 3: v88 };
    let v91;
    try { v91 = Object.defineProperties(v81, v89); } catch (e) {}
    return v91;
}
let v94;
try { v94 = returns(2); } catch (e) {}
let v96;
try { v96 = returns(2); } catch (e) {}
try { testLenientAndStrict("var a = arr(); a[0] = 2; a[0]", v94, v96); } catch (e) {}
let v101;
try { v101 = returns(1); } catch (e) {}
let v102;
try { v102 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var a = arr(); a[1] = 2; a[1]", v101, v102); } catch (e) {}
let v107;
try { v107 = returns(2); } catch (e) {}
let v109;
try { v109 = returns(2); } catch (e) {}
try { testLenientAndStrict("var a = arr(); a[2] = 2; a[2]", v107, v109); } catch (e) {}
let v114;
try { v114 = returns(1); } catch (e) {}
let v115;
try { v115 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("var a = arr(); a[3] = 2; a[3]", v114, v115); } catch (e) {}
let v120;
try { v120 = returns(1); } catch (e) {}
let v121;
try { v121 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("arr()[1]++", v120, v121); } catch (e) {}
let v126;
try { v126 = returns(2); } catch (e) {}
let v127;
try { v127 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("++arr()[1]", v126, v127); } catch (e) {}
let v132;
try { v132 = returns(1); } catch (e) {}
let v133;
try { v133 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("arr()[1]--", v132, v133); } catch (e) {}
let v138;
try { v138 = returns(0); } catch (e) {}
let v139;
try { v139 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict("--arr()[1]", v138, v139); } catch (e) {}
try { f0(true, true); } catch (e) {}
