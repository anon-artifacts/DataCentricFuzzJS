function f0() {
    function func5() {
        if ((func5.caller == null) || (func5.arguments == null)) {
            print("FAILED");
        }
    }
    func5(func5());
}
var func4 = f0;
func4();
print("PASSED");
