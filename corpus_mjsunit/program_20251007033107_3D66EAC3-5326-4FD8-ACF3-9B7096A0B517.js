console.log("Tests to ensure that activations are built correctly in the face of duplicate parameter names and do not cause crashes.");
function gc() {
    if (this.GCController) {
        GCController.collect();
    } else {
        for (let i9 = 0; i9 < 10000; ++i9) {
            const v15 = {};
        }
    }
}
function eatRegisters(a17) {
    if (a17 > 10) {
        return;
    }
    eatRegisters(a17 + 1);
}
function test1(a24, a25, a26, a27, a28, a29, a30) {
    function f31() {
        return a24[0];
    }
    return f31;
}
var test1Closure = test1(["success"]);
var extra = test1("success");
eatRegisters(0);
gc();
test1Closure();
function test2(a45, a46, a47, a48, a49, a50, a51) {
    function f52() {
        return a51[0];
    }
    return f52;
}
var test2Closure = test2("success", "success", "success", "success", "success", "success", ["success"]);
extra = test2("success", "success", "success", "success", "success", "success", ["success"]);
eatRegisters(0);
gc();
test2Closure();
