try { console.log("Test Promise nested microtasks."); } catch (e) {}
var globalObject = this;
globalObject.jsTestIsAsync = true;
var value1;
var value2;
var result;
function f12(a13) {
    result = a13;
    try { finishJSTest(); } catch (e) {}
}
function f16(a17) {
    value1 = a17;
    try {
    } catch(e18) {
    }
    try {
    } catch(e19) {
    }
    function f20(a21) {
        value2 = a21;
        try {
        } catch(e22) {
        }
        return a21 * a17;
    }
    let v26;
    try { v26 = Promise.resolve(84); } catch (e) {}
    let v27;
    try { v27 = v26.then(f20); } catch (e) {}
    return v27;
}
let v30;
try { v30 = Promise.resolve(42); } catch (e) {}
let v31;
try { v31 = v30.then(f16); } catch (e) {}
try { v31.then(f12); } catch (e) {}
try { console.log("The promise is not fulfilled until after this function call executes."); } catch (e) {}
