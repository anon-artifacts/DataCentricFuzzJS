print("Test 1:");
function SimpleObject1() {
    this.x = 0;
}
SimpleObject1.prototype = { p: 10 };
function test1(a9) {
    const v11 = { q: 11 };
    SimpleObject1.prototype = v11;
    const v14 = new SimpleObject1(a9 ? v11 : 0);
    var o = v14;
    return o;
}
var o = test1(false);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
var o = test1(false);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
o = test1(true);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
for (let i67 = 0; i67 < 10; i67++) {
    o = test1(false);
    print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
}
print("");
print("Test 2:");
function SimpleObject2() {
    this.x = 0;
}
SimpleObject2.prototype = { p: 10 };
function test2(a99) {
    const v100 = SimpleObject2.prototype;
    const v109 = new SimpleObject2(a99 ? Object.defineProperty(v100, "x", { value: 12, writable: false }) : 0);
    var o = v109;
    return o;
}
var o = test2(false);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
var o = test2(false);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
o = test2(true);
print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
for (let i162 = 0; i162 < 10; i162++) {
    o = test2(false);
    print(((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + " }");
}
print("");
print("Test 3:");
function SimpleObject3() {
    this.x = 0;
}
SimpleObject3.prototype = { p: 10 };
function test3(a194) {
    const v195 = SimpleObject3.prototype;
    const v204 = new SimpleObject3(a194 ? Object.defineProperty(v195, "y", { value: 12, writable: false }) : 0);
    var o = v204;
    o.y = 1;
    return o;
}
var o = test3(false);
print(((((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
var o = test3(false);
print(((((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
o = test3(true);
print(((((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
for (let i270 = 0; i270 < 10; i270++) {
    o = test3(false);
    print(((((((("{ p: " + o.p) + ", q: ") + o.q) + ", x: ") + o.x) + ", y: ") + o.y) + " }");
}
print("");
