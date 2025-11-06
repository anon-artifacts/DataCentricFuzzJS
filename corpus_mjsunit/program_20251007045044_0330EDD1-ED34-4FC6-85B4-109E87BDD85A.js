console.log("Tests to ensure that activations are built correctly in the face of duplicate parameter names and do not cause crashes.");
function test(a4) {
    var b;
    var a = "success";
    function f9() {
        return a;
    }
    return f9;
}
const t9 = test();
t9();
