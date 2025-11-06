let f1;
let f2;
function dos() {
    let v6;
    try { v6 = saveStack(); } catch (e) {}
    f1 = v6;
    let v7;
    try { v7 = saveStack(); } catch (e) {}
    f2 = v7;
}
function uno() {
    try { dos(); } catch (e) {}
}
uno();
f1 == f2;
f1?.parent;
f2?.parent;
