console.log("Tests whether bytecode codegen properly handles assignment as righthand expression.");
function assign_as_rexp_1() {
    var obj = {};
    var victim = "PASS";
    function f9(a10) {
        victim = "FAIL";
    }
    obj.__defineSetter__("slot", f9);
    var obj2 = {};
    obj["slot"] = victim;
    obj2.forward = victim;
    return obj2.forward;
}
assign_as_rexp_1();
function assign_as_rexp_2() {
    var obj = {};
    var victim = "PASS";
    function f24(a25) {
        victim = "FAIL";
    }
    obj.__defineSetter__("slot", f24);
    var obj2 = {};
    obj.slot = victim;
    obj2.forward = victim;
    return obj2.forward;
}
assign_as_rexp_2();
