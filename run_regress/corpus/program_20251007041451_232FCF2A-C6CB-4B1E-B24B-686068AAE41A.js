var shouldBailout = false;
function test0() {
    var obj0 = {};
    var protoObj0 = {};
    function f7() {
        const v11 = typeof Error ? Error : Object;
        function f14() {
        }
        shouldBailout ? Object.defineProperty(this, "prop5", { set: f14, configurable: true }) : -216;
        function f23() {
        }
        const v28 = shouldBailout ? Object.defineProperty(this, "prop5", { set: f23 }) : -216;
        const v29 = { prop0: v11, prop5: v28 };
    }
    var func0 = f7;
    function f31() {
        return (func0(func0()) < protoObj0) >= 0 ? func0(func0()) : 0;
    }
    var func1 = f31;
    function f42() {
    }
    var func2 = f42;
    function f44() {
        return func1();
    }
    var func4 = f44;
    obj0.method0 = func4;
    obj0.method1 = obj0.method0;
    function func7() {
        func2(func0());
    }
    func2(func0());
    obj0.method1();
    var uniqobj0 = func7();
}
test0();
shouldBailout = true;
test0();
print("pass");
