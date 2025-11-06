function test0() {
    var GiantPrintArray = [];
    var obj1 = {};
    function v9870() {
        try {
            var arr = [];
            var v9872 = [];
            const v11 = Array.prototype;
            function f14() {
                return 30;
            }
            Object.defineProperty(v11, "0", { configurable: true, get: f14 });
            GiantPrintArray.push(v9872.indexOf(30));
        } catch(e22) {
            print(e22.message);
        }
    }
    v9870();
    print(GiantPrintArray[0]);
}
test0();
test0();
function test1() {
    try {
        var arr = [];
        Object.preventExtensions(arr);
        arr.push(0);
    } catch(e39) {
        print(e39.message);
    }
}
test1();
test1();
const v46 = Object.prototype;
function f48() {
    return 8;
}
Object.defineProperty(v46, "a", { get: f48 });
function test2() {
    var GiantPrintArray = [];
    var obj1 = {};
    function f57() {
        try {
            GiantPrintArray.push(obj1.a);
        } catch(e60) {
            print(e60.message);
        }
    }
    var func1 = f57;
    func1();
    function v31079() {
        const v68 = Array.prototype;
        function f71() {
            return 15;
        }
        Object.defineProperty(v68, "4", { configurable: true, get: f71 });
        try {
            GiantPrintArray.push(1);
            GiantPrintArray.push(1);
        } catch(e79) {
            print(e79.message);
        }
    }
    v31079();
    v31079();
    for (let i86 = 0; i86 < GiantPrintArray.length; i86++) {
        print(GiantPrintArray[i86]);
    }
}
test2();
test2();
