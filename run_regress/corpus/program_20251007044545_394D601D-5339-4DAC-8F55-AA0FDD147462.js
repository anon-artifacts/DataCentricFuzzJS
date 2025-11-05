function f0() {
}
var test = f0;
function f2(a3, a4, a5, a6) {
    return (a3 + a4) + a5;
}
const t6 = test.prototype;
t6.B = f2;
const v10 = new test();
var A = v10;
function F() {
    this.init.apply(this, arguments);
}
function f18() {
    A.B.call(this, arguments);
}
const t16 = F.prototype;
t16.init = f18;
function bar() {
    const v29 = new F(10, 30, 40, 50);
    return v29;
}
bar();
bar();
bar();
function test0() {
    var arrObj0 = {};
    const t27 = Object.prototype;
    t27.method0 = 1;
    arrObj0.method0.apply(this, arguments);
}
try {
    test0();
} catch(e44) {
}
try {
    const t36 = __og169.Array;
    const v64 = new t36(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    var FloatArr0 = v64;
    var FloatArr1 = __og169();
} catch(e68) {
}
print("PASSED\n");
function baz() {
    const v74 = this.x;
    this.initialize.apply(v74, arguments);
}
var object = baz;
function f80() {
}
object.prototype = { initialize: f80 };
function foo() {
    new object();
}
foo();
foo();
foo();
print("PASSED\n");
function test1() {
    var arrObj0 = {};
    arrObj0[0] = 1;
    function v16037() {
        for (const v94 in arrObj0) {
            function f95() {
                function bar() {
                    this.method0.apply(this, arguments);
                }
                return bar;
            }
            var v16039 = { v16041: f95 };
            var v16042 = arrObj0;
            v16042.v16043 = v16039.v16041();
            v16042.v16046 = v16039.v16041();
            function f107() {
                const t74 = v16042.v16043;
                const v109 = new t74();
                this.v16052 = v109;
            }
            const v111 = { method0: f107 };
            const t79 = v16042.v16046;
            t79.prototype = v111;
            const t81 = v16042.v16046;
            const v116 = new t81(0, 0);
            var v16067 = v116;
        }
    }
    try {
        v16037();
    } catch(e119) {
    }
}
test1();
test1();
print("PASSED\n");
function test2() {
    var protoObj0 = {};
    var obj1 = {};
    function f129() {
        function f130() {
            function bar() {
                f /= arguments[(1 >= 0 ? 1 : 0) & 15];
                this.method0.apply(protoObj0, arguments);
            }
            return bar;
        }
        var v12673 = { v12675: f130 };
        var v12676 = protoObj1;
        v12676.prototype = {};
        v12676.v12677 = v12673.v12675();
        function f153(a154) {
        }
        const v155 = { method0: f153 };
        const t112 = v12676.v12677;
        t112.prototype = v155;
        v12676.v12679 = v12673.v12675();
        function f158(a159) {
            const t116 = v12676.v12677;
            const v161 = new t116(a159);
            this.v12684 = v161;
        }
        const v163 = { method0: f158 };
        const t121 = v12676.v12679;
        t121.prototype = v163;
        const t123 = v12676.v12677;
        const v166 = new t123();
        var v12690 = v166;
        const t126 = v12676.v12679;
        const v169 = new t126();
        var v12696 = v169;
        const t129 = v12676.v12679;
        const v172 = new t129();
        var v12697 = v172;
    }
    var func1 = f129;
    var f = 1;
    protoObj1 = Object.create(obj1);
    func1();
}
test2();
test2();
print("PASSED\n");
var obj1 = {};
var arrObj0 = {};
function f189() {
    func0.caller;
}
var func0 = f189;
function f193(a194) {
    func0(ary.unshift(func0(), Object()));
}
arrObj0.method0 = f193;
var ary = Array();
function f204() {
    function bar() {
        this.method0.apply(obj1, arguments);
    }
    return bar;
}
var v0 = { v1: f204 };
arrObj0.method1 = v0.v1();
function v17() {
    function f214() {
        var uniqobj3 = arrObj0.method1();
    }
    this.method0 = f214;
}
function v24() {
}
const v219 = new v17();
v24.prototype = v219;
const v220 = new v24();
var v25 = v220;
function v26(a223) {
    a223.method0();
}
v26(v25);
v26(v25);
v26(v25);
function test0() {
    var obj1 = {};
    var protoObj2 = {};
    function f233() {
    }
    var func0 = f233;
    function f235() {
        new func0(ui16[4]);
    }
    var func1 = f235;
    function f240() {
        func1();
    }
    var func4 = f240;
    obj1.method1 = func4;
    const v244 = new Uint16Array();
    var ui16 = v244;
    function f246() {
        const v247 = {};
        obj1.method1.apply(v247, arguments);
    }
    var func12 = f246;
    function f252() {
        function bar() {
            func12();
            const v255 = {};
            this.method0.apply(v255, arguments);
        }
        return bar;
    }
    var v0 = { v1: f252 };
    const t209 = Object.prototype;
    t209.method0 = func0;
    protoObj2.v3 = v0.v1();
    protoObj2.v5 = v0.v1();
    function f266() {
        protoObj2.v3();
    }
    const v268 = { method0: f266 };
    const t217 = protoObj2.v5;
    t217.prototype = v268;
    const t219 = protoObj2.v5;
    const v271 = new t219();
    var v34 = v271;
    const t222 = protoObj2.v5;
    const v274 = new t222();
    var v35 = v274;
    const t225 = protoObj2.v5;
    const v277 = new t225();
    var v36 = v277;
}
test0();
print("PASSED");
