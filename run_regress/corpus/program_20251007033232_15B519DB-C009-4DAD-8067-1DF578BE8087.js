function f0() {
}
function assertFlags(a2, a3, a4, a5) {
    var name = a2 + " flag: ";
    const v9 = a2?.global;
    const v11 = name + "g";
    const v12 = a3 ? f0 : f0;
    try { v12(v9, v11); } catch (e) {}
    const v14 = a2?.multiline;
    const v16 = name + "m";
    const v17 = a4 ? f0 : f0;
    try { v17(v14, v16); } catch (e) {}
    const v19 = a2?.ignoreCase;
    const v21 = name + "i";
    const v22 = a5 ? f0 : f0;
    try { v22(v19, v21); } catch (e) {}
}
var re = /a/;
re = /a/mgi;
re = RegExp("a", "");
re = RegExp("a", "gim");
function f53() {
    let v56;
    try { v56 = RegExp("a", "ii"); } catch (e) {}
    return v56;
}
f53();
function f58() {
    let v61;
    try { v61 = RegExp("a", "gii"); } catch (e) {}
    return v61;
}
f58();
function f63() {
    let v66;
    try { v66 = RegExp("a", "igi"); } catch (e) {}
    return v66;
}
f63();
function f68() {
    let v71;
    try { v71 = RegExp("a", "iig"); } catch (e) {}
    return v71;
}
f68();
function f73() {
    let v76;
    try { v76 = RegExp("a", "gimi"); } catch (e) {}
    return v76;
}
f73();
function f78() {
    let v81;
    try { v81 = RegExp("a", "giim"); } catch (e) {}
    return v81;
}
f78();
function f83() {
    let v86;
    try { v86 = RegExp("a", "igim"); } catch (e) {}
    return v86;
}
f83();
function f94() {
    let v97;
    try { v97 = RegExp("a", "iii"); } catch (e) {}
    return v97;
}
f94();
function f99() {
    let v102;
    try { v102 = RegExp("a", "giii"); } catch (e) {}
    return v102;
}
f99();
function f104() {
    let v107;
    try { v107 = RegExp("a", "igii"); } catch (e) {}
    return v107;
}
f104();
function f109() {
    let v112;
    try { v112 = RegExp("a", "iigi"); } catch (e) {}
    return v112;
}
f109();
function f114() {
    let v117;
    try { v117 = RegExp("a", "iiig"); } catch (e) {}
    return v117;
}
f114();
function f119() {
    let v122;
    try { v122 = RegExp("a", "miiig"); } catch (e) {}
    return v122;
}
f119();
var re = /a/mgi;
