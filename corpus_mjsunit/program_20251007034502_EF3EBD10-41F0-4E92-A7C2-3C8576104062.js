function Ctor() {
}
function f1() {
    for (let i3 = 0; i3 < 10; i3++) {
        this.blahnum = 1000;
    }
}
const t7 = Ctor.prototype;
t7.blah = f1;
const v12 = new Ctor();
var a = v12;
a.blah();
print(a.blahnum);
function f18(a19, a20, a21) {
    print(a19, a20, a21);
}
function f23() {
    for (let i25 = 0; i25 < 1; ++i25) {
        this.f.apply(this, arguments);
    }
}
var o = { f: f18, g: f23 };
o.g(1, 2, 3);
function f() {
    for (let i44 = 0; i44 < 1; i44++) {
        var g_args = g.arguments;
        print(g_args === f.caller.arguments);
        print(g_args.callee === f.caller);
    }
}
function g() {
    for (let i63 = 0; i63 < 1; i63++) {
        f();
    }
}
g("hi");
function test() {
    with ({ x: "x" }) {
        while ((() => {
                function f75() {
                    return x;
                }
                return f75();
            })()) {
            print(x);
            break;
        }
    }
}
test();
function retval() {
    for (let i83 = 0; i83 < 1; i83++) {
        if (i83 > 1) {
            return i83;
        }
    }
    return 0;
}
retval();
for (let i94 = 0; i94 < 0; ++i94) {
    1 in 2;
}
function test_bail() {
    var obj0 = {};
    var obj1 = {};
    function f108() {
    }
    var func0 = f108;
    function f110(a111, a112, a113) {
        var __loopvar2 = 0;
        for (; (__loopvar2 < 3) && (a113 < 1); __loopvar2++) {
            var __loopvar3 = 0;
            do {
                __loopvar3++;
                const v127 = ary[8];
                let v128 = obj1.prop1;
                const v129 = ++v128;
                obj2.prop3 ^= v129;
                obj0.prop0 <<= v127 - (v129 ? 1701746938.1 : this.prop2);
                var obj4 = 1;
            } while (1 && (__loopvar3 < 3))
        }
        const v145 = new RegExp("xyz");
        var obj4 = func0(2147483647, v145, 1.1, 1, 7 ? -970342005 : 1);
    }
    var func1 = f110;
    function f156() {
        if (ui8[1073741824]) {
            -2;
            var __loopvar3 = 0;
            for (const v163 in obj0) {
                if (__loopvar3++ > 3) {
                    break;
                }
                function f167(a168) {
                    if (a168 !== undefined) {
                        print((((a168.prop0 + " ") + a168.prop1) + " ") + a168.prop2);
                    }
                }
                var fPolyProp = f167;
                fPolyProp(litObj0);
                fPolyProp(litObj1);
                fPolyProp(litObj2);
                obj2.prop5 = 2147483647;
            }
        }
        for (let i191 = 0; i191 < 3; i191++) {
        }
    }
    var func2 = f156;
    obj0.method0 = func2;
    const v200 = new Uint8Array(256);
    var ui8 = v200;
    var __loopvar1 = 0;
    do {
        __loopvar1++;
        function f205(a206, a207, a208, a209) {
            var obj5 = obj0;
            const t118 = obj5.method0;
            const v212 = new t118();
            obj4 = v212;
        }
        f205();
    } while (1 && (__loopvar1 < 3))
    if (func1(1, 1)) {
    }
}
test_bail();
test_bail();
print("done");
