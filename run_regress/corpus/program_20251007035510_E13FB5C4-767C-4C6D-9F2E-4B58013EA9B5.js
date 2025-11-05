function test0() {
    var obj1 = {};
    function f3() {
        if (true) {
            function func5() {
                function f6() {
                    function f7() {
                    }
                }
                let v8;
                try { v8 = f6(); } catch (e) {}
                return v8;
            }
            with ({}) {
                let v10;
                try { v10 = func5.call(obj1); } catch (e) {}
                argMath2 = v10;
            }
        }
    }
    var func0 = f3;
    try { func0(); } catch (e) {}
}
try { test0(); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
