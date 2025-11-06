function test1(a1) {
    var count = 0;
    for (let i5 = 0; i5 < 10; i5++) {
        count += a1.x.y;
        count += a1.x.y;
        count += a1.x.w;
        count += a1.z;
    }
    return count;
}
const v20 = { y: 2, w: 3 };
var o = { x: v20, z: 1 };
console.log("\ntest1");
test1(o);
test1(o);
test1(o);
function test2(a31) {
    var a = 0;
    var b = 0;
    a31.x;
    for (let i38 = 0; i38 < 10; i38++) {
        let v44 = a31.x;
        v44++;
    }
    return b;
}
o.x = 1;
console.log("\ntest2");
test2(o);
test2(o);
test2(o);
const v53 = new Object();
var Direction = v53;
Direction.NONE = 0;
Direction.FORWARD = 1;
Direction.BACKWARD = -1;
function inlinee(a60) {
    a60.count += Direction.FORWARD;
    return true;
}
function testInlined(a64) {
    for (let i66 = 0; i66 < 1000; i66++) {
        if (!inlinee(a64)) {
            a64.count = 1;
        }
        inlinee(a64);
    }
}
console.log("\ntestInlined");
var obj = { count: 0, dir: 1 };
obj.count = 1;
o.dir = 1;
testInlined(obj);
console.log(o.count);
obj.count = 1;
obj.dir = 2;
testInlined(obj);
console.log(obj.count);
obj.count = 1;
obj.dir = 1;
testInlined(obj);
console.log(obj.count);
function test3() {
    function OrderedCollection() {
        const v100 = new Array();
        this.elms = v100;
    }
    function f102() {
        return this.elms.length;
    }
    const t70 = OrderedCollection.prototype;
    t70.size = f102;
    function f107(a108) {
        return this.elms[a108];
    }
    const t75 = OrderedCollection.prototype;
    t75.at = f107;
    function Plan() {
        const v114 = new OrderedCollection();
        this.v = v114;
    }
    function f116(a117) {
        this.v.elms.push(a117);
    }
    const t84 = Plan.prototype;
    t84.add = f116;
    function f123() {
        return this.v.size();
    }
    const t89 = Plan.prototype;
    t89.size = f123;
    function f128(a129) {
        return this.v.at(a129);
    }
    const t94 = Plan.prototype;
    t94.constraintAt = f128;
    function f134() {
        var count = 0;
        for (let i138 = 0; i138 < this.size(); i138++) {
            this.constraintAt(i138);
            count += Direction.FORWARD;
        }
        return count;
    }
    const t104 = Plan.prototype;
    t104.execute = f134;
    const v149 = new Plan();
    var plan = v149;
    for (let i152 = 0; i152 < 10; i152++) {
        plan.add(1);
    }
    console.log(plan.execute());
    console.log(plan.execute());
    console.log(plan.execute());
}
console.log("\ntest3");
test3();
