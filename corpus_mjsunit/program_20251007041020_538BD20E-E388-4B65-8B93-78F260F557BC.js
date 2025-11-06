function f0() {
}
if (typeof disassemble != "undefined") {
    function f5() {
        return "c\d";
    }
    var func = disassemble(f5);
    func.indexOf("\\\\");
    -1;
}
f0(0, 0, "ok");
