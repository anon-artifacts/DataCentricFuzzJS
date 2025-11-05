function test0() {
    function leaf() {
    }
    class C2 {
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    var litObj1 = {};
    function f11() {
    }
    var func0 = f11;
    function f13() {
        function* f14() {
            strvar1 = "!";
        }
        var func5 = f14;
        for (const v19 of func5()) {
        }
    }
    var func1 = f13;
    function f21() {
    }
    var func2 = f21;
    function f23() {
    }
    var func3 = f23;
    function f25() {
    }
    var func4 = f25;
    obj0.method0 = func2;
    obj0.method1 = func3;
    obj1.method1 = func0;
    var ary = Array();
    const v31 = new Int8Array();
    var i8 = v31;
    const v34 = new Int16Array();
    var i16 = v34;
    const v37 = new Int32Array();
    var i32 = v37;
    const v40 = new Float32Array();
    var f32 = v40;
    var IntArr0 = [];
    var VarArr0 = [];
    var b = -2;
    var d = 217;
    var f = -354058415.9;
    var g = 192563783;
    var h = -6607978441461539840;
    var strvar4 = "!";
    var strvar5 = "-";
    var strvar6 = "!$EUI";
    var strvar7 = "#qÀÈ©";
    var protoObj0 = Object(obj0);
    var protoObj1 = Object(obj1);
    class C72 extends C2 {
    }
    class C73 extends C2 {
    }
    class C74 {
        static set func56(a76) {
            while ((() => {
                    const v81 = (a76 == h) && (217 != obj0.prop5);
                    a76 <<= a76;
                    return v81 * a76;
                })()) {
                console.log("loop 1");
            }
        }
    }
    var __loopvar1000 = 2;
    for (;;) {
        if ((__loopvar1000 -= 2) <= (2 - 6)) {
            break;
        }
        console.log("loop 2");
        function f97() {
            console.log("class7.func56.valueOf");
        }
        C74.func56 = { valueOf: f97 };
        C74.func56 = arrObj0;
        protoObj1.method1(arrObj0);
    }
}
test0();
