function getAsyncStack() {
    let v2;
    try { v2 = saveStack(); } catch (e) {}
    return v2;
}
let v6;
try { v6 = String.fromCharCode(355); } catch (e) {}
let testAsyncCause = ("Tes" + v6) + "String";
function asyncCallback() {
    let v13;
    try { v13 = saveStack(); } catch (e) {}
    let stack = v13;
    stack?.functionDisplayName;
    stack?.parent;
    stack?.asyncCause;
    stack?.asyncParent?.functionDisplayName;
    stack?.asyncParent?.asyncCause;
    stack?.asyncParent?.asyncParent;
    stack?.asyncParent?.parent?.asyncCause;
    stack?.asyncParent?.parent?.asyncParent;
    stack?.asyncParent?.parent?.parent;
}
let v41;
try { v41 = getAsyncStack(); } catch (e) {}
try { callFunctionWithAsyncStack(asyncCallback, v41, testAsyncCause); } catch (e) {}
