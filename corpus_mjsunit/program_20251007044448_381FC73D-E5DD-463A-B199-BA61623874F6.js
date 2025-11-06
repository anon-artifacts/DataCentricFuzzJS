function f0() {
    function bar() {
        this.initialize.apply(this, arguments);
    }
    return bar;
}
var Class = { create: f0 };
var object = {};
object.obj1 = Class.create();
function f13(a14) {
    this.r = a14;
}
const v16 = { r: 0, initialize: f13 };
const t13 = object.obj1;
t13.prototype = v16;
object.obj2 = Class.create();
function f21(a22, a23) {
    this.x = a22;
    this.y = a23;
}
const v26 = { x: 0, y: 0, initialize: f21 };
const t21 = object.obj2;
t21.prototype = v26;
object.obj3 = Class.create();
const v29 = {};
function f30(a31) {
    const t26 = object.obj1;
    const v33 = new t26(a31);
    this.prop1 = v33;
}
const v35 = { prop1: v29, initialize: f30 };
const t31 = object.obj3;
t31.prototype = v35;
object.obj4 = Class.create();
const v38 = {};
const v39 = {};
function f40(a41, a42, a43) {
    const t37 = object.obj1;
    const v45 = new t37(a41);
    this.prop1 = v45;
    const t40 = object.obj2;
    const v48 = new t40(a42, a43);
    this.prop2 = v48;
}
const v50 = { prop1: v38, prop2: v39, initialize: f40 };
const t45 = object.obj4;
t45.prototype = v50;
function foo() {
    const t48 = object.obj1;
    const v54 = new t48();
    var v00 = v54;
    const t51 = object.obj1;
    const v58 = new t51(1);
    var v01 = v58;
    const t54 = object.obj1;
    const v63 = new t54(1, 2);
    var v02 = v63;
    const t57 = object.obj1;
    const v69 = new t57(1, 2, 3);
    var v03 = v69;
    print(v03.r);
    const t60 = object.obj2;
    const v76 = new t60(1);
    var v4 = v76;
    const t64 = object.obj2;
    const v81 = new t64(1, 2);
    var v5 = v81;
    const t67 = object.obj2;
    const v87 = new t67(1, 2, 3);
    var v6 = v87;
    print(v6.y);
    const t70 = object.obj3;
    const v93 = new t70(1);
    var v7 = v93;
    const t74 = object.obj3;
    const v98 = new t74(1, 2);
    var v8 = v98;
    const t77 = object.obj3;
    const v104 = new t77(1, 2, 3);
    var v9 = v104;
    print(v9.prop1.r);
    const t80 = object.obj4;
    const v111 = new t80(1);
    var v10 = v111;
    const t84 = object.obj4;
    const v116 = new t84(1, 2);
    var v11 = v116;
    const t87 = object.obj4;
    const v122 = new t87(1, 2, 3);
    var v12 = v122;
    print(v12.prop1.r);
    print(v12.prop2.y);
}
foo();
foo();
function f132() {
}
const t97 = Function.prototype;
t97.apply = f132;
foo();
print("Passed");
