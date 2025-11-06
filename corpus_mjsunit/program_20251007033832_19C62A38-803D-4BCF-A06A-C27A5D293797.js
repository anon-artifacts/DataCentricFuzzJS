function f0() {
}
var gTestfile = "for-in-with-declaration.js";
var BUGNUMBER = 1163851;
var summary = "Declarations in for-in loop heads must not contain |in|-expression " + "initializers";
f0((BUGNUMBER + ": ") + summary);
const v13 = () => {
    let v16;
    try { v16 = Function("for (var x = 3 in {}; ; ) break;"); } catch (e) {}
    return v16;
};
v13();
const v19 = () => {
    let v22;
    try { v22 = Function("for (var x, y = 3 in {}; ; ) break;"); } catch (e) {}
    return v22;
};
v19();
const v24 = () => {
    let v27;
    try { v27 = Function("for (var x = 5, y = 3 in {}; ; ) break;"); } catch (e) {}
    return v27;
};
v24();
const v29 = () => {
    let v32;
    try { v32 = Function("for (const x = 3 in {}; ; ) break;"); } catch (e) {}
    return v32;
};
v29();
const v34 = () => {
    let v37;
    try { v37 = Function("for (const x = 5, y = 3 in {}; ; ) break;"); } catch (e) {}
    return v37;
};
v34();
const v39 = () => {
    let v42;
    try { v42 = Function("for (let x = 3 in {}; ; ) break;"); } catch (e) {}
    return v42;
};
v39();
const v44 = () => {
    let v47;
    try { v47 = Function("for (let x, y = 3 in {}; ; ) break;"); } catch (e) {}
    return v47;
};
v44();
const v49 = () => {
    let v52;
    try { v52 = Function("for (let x = 2, y = 3 in {}; ; ) break;"); } catch (e) {}
    return v52;
};
v49();
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests complete");
