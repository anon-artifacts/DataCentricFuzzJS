print("Testing invalidation due to overwrite:");
function f4() {
    return (this.x + this.y) + " (original)";
}
function f12() {
    return (this.x - this.y) + " (original)";
}
var proto1 = { unique1_1: 0, add: f4, subtract: f12 };
var object1 = Object.create(proto1);
object1.x = 0;
object1.y = 1;
function f27(a28) {
    print("x + y = " + a28.add());
    print("x - y = " + a28.subtract());
}
var testOverwrite = f27;
testOverwrite(object1);
testOverwrite(object1);
function f40() {
    return (this.x - this.y) + " (overwritten)";
}
proto1.subtract = f40;
testOverwrite(object1);
function f49() {
    return (this.x + this.y) + " (overwritten)";
}
proto1.add = f49;
testOverwrite(object1);
function f59() {
    return (this.x + this.y) + " (original)";
}
function f67() {
    return (this.x - this.y) + " (original)";
}
var proto1 = { unique1_2: 0, add: f59, subtract: f67 };
var object1 = Object.create(proto1);
object1.x = 0;
object1.y = 1;
function f81() {
    return (this.x - this.y) + " (overwritten)";
}
var overwrittenSubtract = f81;
function f90(a91, a92) {
    print("x + y = " + a91.add());
    if (a92) {
        proto1.subtract = overwrittenSubtract;
    }
    print("x - y = " + a91.subtract());
}
var testOverwrite = f90;
testOverwrite(object1, false);
testOverwrite(object1, false);
testOverwrite(object1, true);
print();
print("Testing invalidation due to delete:");
function f112() {
    return (this.x + this.y) + " (from proto2)";
}
function f120() {
    return (this.x - this.y) + " (from proto2)";
}
var proto2 = { unique2: 0, add: f112, subtract: f120 };
const v131 = { value: 0 };
function f132() {
    return (this.x + this.y) + " (from proto1)";
}
const v142 = { value: f132, writable: true, configurable: true };
function f143() {
    return (this.x - this.y) + " (from proto1)";
}
const v153 = { value: f143, writable: true, configurable: true };
var proto1 = Object.create(proto2, { unique3: v131, add: v142, subtract: v153 });
var object1 = Object.create(proto1);
object1.x = 0;
object1.y = 1;
function testDelete(a162) {
    print("x + y = " + a162.add());
    print("x - y = " + a162.subtract());
}
testDelete(object1);
testDelete(object1);
delete proto1.subtract;
testDelete(object1);
delete proto1.add;
testDelete(object1);
print();
print("Testing invalidation due to shadowing:");
function f181() {
    return (this.x + this.y) + " (from proto2)";
}
function f189() {
    return (this.x - this.y) + " (from proto2)";
}
var proto2 = { unique4: 0, add: f181, subtract: f189 };
const v200 = { value: 0 };
var proto1 = Object.create(proto2, { unique5: v200 });
var object1 = Object.create(proto1);
object1.x = 0;
object1.y = 1;
function testShadow(a209) {
    print("x + y = " + a209.add());
    print("x - y = " + a209.subtract());
}
testShadow(object1);
testShadow(object1);
function f220() {
    return (this.x - this.y) + " (from proto1)";
}
proto1.subtract = f220;
testShadow(object1);
function f229() {
    return (this.x + this.y) + " (from proto1)";
}
proto1.add = f229;
testShadow(object1);
print();
