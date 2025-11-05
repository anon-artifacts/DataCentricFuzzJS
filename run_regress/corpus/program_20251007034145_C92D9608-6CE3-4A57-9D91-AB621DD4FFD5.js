print("Test 1:");
function f3() {
    this.a = 0;
    this.b = 1;
}
var SimpleObject1 = f3;
var proto1a = { p: 100 };
var proto1b = { p: 200 };
SimpleObject1.prototype = proto1a;
function f15() {
    const v16 = new SimpleObject1();
    var o = v16;
    o.x = 10;
    o.y = 11;
    return o;
}
var test1 = f15;
const v22 = new Array();
var oa1 = v22;
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
SimpleObject1.prototype = proto1b;
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
oa1.push(test1());
for (let i43 = 0; i43 < oa1.length; i43++) {
    var o = oa1[i43];
    print((((((((((((("oa1[" + i43) + "]: ") + "{ a: ") + o.a) + ", b: ") + o.b) + ", p: ") + o.p) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
}
print("");
print("Test 2:");
function f82() {
    this.a = 0;
    this.b = 1;
    this.c = 2;
}
var SimpleObject2 = f82;
var proto2a = { p: 100 };
SimpleObject2.prototype = proto2a;
function f93() {
    const v94 = new SimpleObject2();
    var o = v94;
    o.x = 10;
    o.y = 11;
    return o;
}
var test2 = f93;
const v99 = new Array();
var oa2 = v99;
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
Object.defineProperty(proto2a, "a", { value: 101, writable: false });
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
oa2.push(test2());
for (let i126 = 0; i126 < oa2.length; i126++) {
    var o = oa2[i126];
    print((((((((((((((("oa2[" + i126) + "]: ") + "{ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", p: ") + o.p) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
}
print("");
print("Test 3:");
function f169() {
    this.a = 0;
    this.b = 1;
}
var SimpleObject3 = f169;
var proto3a = { p: 100 };
SimpleObject3.prototype = proto3a;
function f178() {
    const v179 = new SimpleObject3();
    var o = v179;
    o.x = 10;
    o.y = 11;
    return o;
}
var test3 = f178;
const v184 = new Array();
var oa3 = v184;
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
Object.defineProperty(proto3a, "x", { value: 102, writable: false });
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
oa3.push(test3());
for (let i210 = 0; i210 < oa3.length; i210++) {
    var o = oa3[i210];
    print((((((((((((("oa3[" + i210) + "]: ") + "{ a: ") + o.a) + ", b: ") + o.b) + ", p: ") + o.p) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
}
print("");
print("Test 4:");
function f249() {
    this.a = this.p + 0;
    this.b = this.p + 1;
    this.c = this.p + 2;
    this.d = this.p + 3;
    this.e = this.p + 4;
    this.f = this.p + 5;
    this.g = this.p + 6;
    this.h = this.p + 7;
    this.i = this.p + 8;
    this.j = this.p + 9;
}
var SimpleObject4 = f249;
var proto4a = { p: 100 };
var proto4b = Object.create(proto4a);
SimpleObject4.prototype = proto4b;
function f306() {
    const v307 = new SimpleObject4();
    var o = v307;
    o.x = o.p + 10;
    o.y = o.p + 11;
    return o;
}
var test4 = f306;
const v316 = new Array();
var oa4 = v316;
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
proto4b.p = 200;
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
oa4.push(test4());
for (let i338 = 0; i338 < oa4.length; i338++) {
    var o = oa4[i338];
    print((((((((((((((((((("oa4[" + i338) + "]: ") + "{ a: ") + o.a) + ", b: ") + o.b) + ", c: ") + o.c) + ", i: ") + o.i) + ", j: ") + o.j) + ", p: ") + o.p) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
}
print("");
