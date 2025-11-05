const t0 = Function.prototype;
t0.x = "Function.x";
function proto() {
}
function foo1(a5) {
    var y = a5.y;
    var x = a5.x;
    print(a5.x);
}
function bar1(a14) {
    const t10 = proto1.prototype;
    t10.x = "new x";
}
function proto1() {
}
proto1.prototype = proto;
const t16 = proto1.prototype;
t16.y = "y";
const v21 = new proto1();
var o1 = v21;
foo1(o1);
foo1(o1);
bar1(o1);
foo1(o1);
function foo2(a28) {
    var y = a28.y;
    var x = a28.x;
    print(a28.x);
}
function bar2(a37) {
    const t30 = proto2.prototype;
    delete t30.x;
}
function proto2() {
}
proto2.prototype = proto;
const t36 = proto2.prototype;
t36.x = "x";
const t38 = proto2.prototype;
t38.y = "y";
const v46 = new proto2();
var o2 = v46;
foo2(o2);
foo2(o2);
bar2(o2);
foo2(o2);
var o3 = {};
const t47 = Object.prototype;
t47.x = "no";
const t49 = Object.prototype;
t49.y = "yes";
const t51 = Object.prototype;
t51.foo = foo3;
function foo3() {
    o3.x = this.y;
    print(this.x);
}
const v68 = new foo3();
(o3 = v68).foo();
function test4() {
    var obj0 = {};
    var obj1 = {};
    function f75(a76) {
        let v77 = obj1.prop0;
        const v78 = --v77;
        const v86 = {
            prop0: v78,
            prop1: 1,
            prop2: 1,
            prop3: 1,
            prop4: 1,
            prop5: 1,
            prop6: 1,
            prop7: 1,
        };
        var litObj5 = v86;
    }
    var func0 = f75;
    const t78 = Object.prototype;
    t78.prop5 = 1;
    for (let i92 = 0; i92 < 3; ++i92) {
        obj2 = func0(1, 1, 1);
        function func4() {
            obj1.prop0 >>= 1;
            if (1 >>> this.prop5) {
                for (const v108 in obj1) {
                    this.prop5 >>>= 1;
                    const v112 = this.prop5;
                    obj0.prop6 ^= v112;
                    obj0.prop3 = v112;
                    break;
                }
            }
            print("obj0.prop6 = " + (obj0.prop6 | 0));
        }
        if (func4()) {
        }
    }
}
test4();
test4();
