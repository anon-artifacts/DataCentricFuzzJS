function f0() {
}
var BUGNUMBER = 481436;
var summary = "TM: Do not crash @ FlushNativeStackFrame/JS_XDRNewMem";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function search(a12, a13) {
    if (a12.name == a13) {
        return a12;
    }
    for (let i17 = 0; i17 < a12.items.length; i17++) {
        if (a12.items[i17].type == "M") {
            search(a12.items[i17], a13);
        }
    }
}
function crash() {
    for (let i34 = 0; i34 < 2; i34++) {
        const v43 = [{}];
        var root = { name: "root", type: "M", items: v43 };
        search(root, "x");
        const v50 = [];
        const v51 = { name: "tim", type: "M", items: v50 };
        root.items.push(v51);
        search(root, "x");
        search(root, "x");
    }
}
crash();
f0(expect, actual, summary);
