console.log("Tests what happens if we fail to constant fold a LogicalNot that leads into a branch, when the CFA proves that the LogicalNot has a constant value.");
function foo1(a4) {
    if (!(!a4.thingy)) {
        return a4.thingy(42);
    } else {
        return a4.otherThingy(57);
    }
}
function foo2(a13) {
    if (!a13.thingy) {
        return a13.otherThingy(42);
    } else {
        return a13.thingy(57);
    }
}
function Stuff() {
}
function f21(a22) {
    return a22 + 1;
}
function f25(a26) {
    return a26 - 1;
}
Stuff.prototype = { thingy: f21, otherThingy: f25 };
for (let i31 = 0; i31 < 200; i31++) {
    const v37 = new Stuff();
    foo1(v37);
}
for (let i40 = 0; i40 < 200; i40++) {
    const v46 = new Stuff();
    foo2(v46);
}
