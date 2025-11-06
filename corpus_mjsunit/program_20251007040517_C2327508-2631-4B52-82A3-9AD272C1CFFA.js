function test0() {
    var loopInvariant = 2;
    function f3() {
        function func5() {
        }
        {
            function __f() {
                print("pass");
            }
            function __g() {
                __f();
            }
            __g();
        }
    }
    var func2 = f3;
    func2();
}
test0();
