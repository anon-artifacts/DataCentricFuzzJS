function test() {
    function f1() {
    }
    var kcngmm = f1;
    function f3() {
    }
    var u3056 = f3;
    const v6 = /x/g;
    const v9 = Object.seal.bind(undefined, v6);
    u3056.__proto__ = v9;
    with (v9) {
        function f10() {
            return "";
        }
        f10();
    }
    try {
        try {
            u3056.caller = kcngmm;
        } catch(e13) {
        }
        try {
        } catch(e14) {
        }
    } catch(e15) {
    }
}
test();
print("Pass");
