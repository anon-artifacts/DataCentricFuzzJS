console.log("Tests to ensure that activations are built correctly in the face of duplicate parameter names and do not cause crashes.");
function test1(a4, a5, a6, a7, a8, a9, a10) {
    function f11() {
        return a4;
    }
    return f11;
}
const t7 = test1("success");
t7();
function test2(a16, a17, a18, a19, a20, a21, a22) {
    function f23() {
        return a22;
    }
    return f23;
}
const t15 = test2("success", "success", "success", "success", "success", "success", "success");
t15();
