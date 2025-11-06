function f0() {
}
function callFunctionBody(a2) {
    return ((((((("(function f() {\n" + "Object.defineProperties(arguments, {1: { writable: false },\n") + "                                    2: { configurable: false },\n") + "                                    3: { writable: false,\n") + "                                        configurable: false }});\n") + "return (") + a2) + ");\n") + "})(0, 1, 2, 3);";
}
let v20;
try { v20 = callFunctionBody("arguments[0] = 42"); } catch (e) {}
let v23;
try { v23 = returns(42); } catch (e) {}
let v25;
try { v25 = returns(42); } catch (e) {}
try { testLenientAndStrict(v20, v23, v25); } catch (e) {}
let v30;
try { v30 = callFunctionBody("delete arguments[0]"); } catch (e) {}
let v32;
try { v32 = returns(true); } catch (e) {}
let v34;
try { v34 = returns(true); } catch (e) {}
try { testLenientAndStrict(v30, v32, v34); } catch (e) {}
let v38;
try { v38 = callFunctionBody("arguments[1] = 42"); } catch (e) {}
let v40;
try { v40 = returns(42); } catch (e) {}
let v43;
try { v43 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict(v38, v40, v43); } catch (e) {}
let v47;
try { v47 = callFunctionBody("delete arguments[1]"); } catch (e) {}
let v49;
try { v49 = returns(true); } catch (e) {}
let v51;
try { v51 = returns(true); } catch (e) {}
try { testLenientAndStrict(v47, v49, v51); } catch (e) {}
let v55;
try { v55 = callFunctionBody("arguments[2] = 42"); } catch (e) {}
let v57;
try { v57 = returns(42); } catch (e) {}
let v59;
try { v59 = returns(42); } catch (e) {}
try { testLenientAndStrict(v55, v57, v59); } catch (e) {}
let v63;
try { v63 = callFunctionBody("delete arguments[2]"); } catch (e) {}
let v65;
try { v65 = returns(false); } catch (e) {}
let v66;
try { v66 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict(v63, v65, v66); } catch (e) {}
let v70;
try { v70 = callFunctionBody("arguments[3] = 42"); } catch (e) {}
let v72;
try { v72 = returns(42); } catch (e) {}
let v73;
try { v73 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict(v70, v72, v73); } catch (e) {}
let v77;
try { v77 = callFunctionBody("delete arguments[3]"); } catch (e) {}
let v79;
try { v79 = returns(false); } catch (e) {}
let v80;
try { v80 = raisesException(TypeError); } catch (e) {}
try { testLenientAndStrict(v77, v79, v80); } catch (e) {}
try { f0(true, true); } catch (e) {}
