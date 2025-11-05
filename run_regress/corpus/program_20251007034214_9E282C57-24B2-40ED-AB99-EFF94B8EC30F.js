function globalFixedFunction1() {
    print("globalFixedFunction1: original");
}
function f4() {
    print("globalFixedFunction2: original");
}
var globalFixedFunction2 = f4;
function testGlobal() {
    globalFixedFunction1();
    globalFixedFunction2();
}
print("Testing the global object:");
testGlobal();
testGlobal();
function f17() {
    print("globalFixedFunction1: overwritten");
}
globalFixedFunction1 = f17;
function f20() {
    print("globalFixedFunction2: overwritten");
}
globalFixedFunction2 = f20;
testGlobal();
print();
print("Testing object literal:");
function f30() {
    return (this.x + this.y) + " (original)";
}
function f38() {
    return (this.x - this.y) + " (original)";
}
const v46 = {
    unique1: 0,
    x: 0,
    y: 1,
    add: f30,
    subtract: f38,
};
var objectLiteral = v46;
function testObjectLiteral() {
    print("x + y = " + objectLiteral.add());
    print("x - y = " + objectLiteral.subtract());
}
testObjectLiteral();
testObjectLiteral();
function f59() {
    return (this.x + this.y) + " (overwritten)";
}
objectLiteral.add = f59;
testObjectLiteral();
print();
print("Testing Object.defineProperty with accessors:");
var object = {};
function f74() {
    return "0 (original)";
}
Object.defineProperty(object, "x", { get: f74, configurable: true });
function testObjectDefineProperty() {
    print("x = " + object.x);
}
testObjectDefineProperty();
testObjectDefineProperty();
function f88() {
    return "1 (overwritten)";
}
Object.defineProperty(object, "x", { get: f88 });
testObjectDefineProperty();
print();
print("Testing the Math object:");
function f96(a97) {
    return a97;
}
Math.identity = f96;
function testMathObject() {
    print("Math.sin(Math.PI) = " + Math.sin(Math.PI));
    print("Math.identity(Math.PI) = " + Math.identity(Math.PI));
}
testMathObject();
testMathObject();
function f112(a113) {
    return -a113;
}
Math.identity = f112;
testMathObject();
function f116(a117) {
    return -a117;
}
Math.sin = f116;
testMathObject();
print();
print("Testing the Object constructor:");
function f123(a124) {
    return a124;
}
Object.identity = f123;
function testObjectConstructor() {
    var o = {};
    Object.seal(o);
    print("Object.identity(o) = " + Object.identity(o));
    print("Object.isSealed(o) = " + Object.isSealed(o));
}
testObjectConstructor();
testObjectConstructor();
function f139(a140) {
    return "I don't know you anymore...";
}
Object.identity = f139;
testObjectConstructor();
function f143(a144) {
    return false;
}
Object.seal = f143;
testObjectConstructor();
function f147(a148) {
    return "With the magic of JavaScript I pronounce you sealed!";
}
Object.isSealed = f147;
testObjectConstructor();
print();
