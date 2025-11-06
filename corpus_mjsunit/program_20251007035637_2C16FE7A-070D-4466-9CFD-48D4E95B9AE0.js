function checkNameLookup() {
    return "global";
}
function assertWithMessage(a3, a4, a5) {
    (a5 + ": ") + a3;
    (a5 + ": ") + a4;
}
function testFunc() {
    try { checkNameLookup(); } catch (e) {}
    try { checkThisBinding(); } catch (e) {}
    var reason = " in lambda in Call";
    function f22() {
        try { checkNameLookup(); } catch (e) {}
        "nameLookup" + reason;
        try { checkThisBinding(); } catch (e) {}
        "thisBinding" + reason;
    }
    try { f22(); } catch (e) {}
}
function f32() {
    return "local";
}
function f34() {
    let v36;
    try { v36 = this.checkNameLookup(); } catch (e) {}
    return v36;
}
var obj = { checkNameLookup: f32, checkThisBinding: f34 };
let v40;
try { v40 = clone(testFunc, obj); } catch (e) {}
var cloneFunc = v40;
try { cloneFunc(); } catch (e) {}
