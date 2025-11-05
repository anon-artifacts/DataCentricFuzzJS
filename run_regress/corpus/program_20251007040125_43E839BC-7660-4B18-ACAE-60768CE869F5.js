console.log("This test checks that functions on the array prototype correctly handle exceptions from length getters when called on non-array objects.");
var testObj = { 0: "a", 1: "b", 2: "c" };
function f8() {
    throw true;
}
var lengthGetter = { get: f8 };
Object.defineProperty(testObj, "length", lengthGetter);
function test(a16) {
    try {
        a16.call(testObj, undefined);
        return false;
    } catch(e20) {
        return e20 === true;
    }
}
test(Array.prototype.join);
test(Array.prototype.pop);
test(Array.prototype.push);
test(Array.prototype.reverse);
test(Array.prototype.shift);
test(Array.prototype.slice);
test(Array.prototype.sort);
test(Array.prototype.splice);
test(Array.prototype.unshift);
test(Array.prototype.indexOf);
test(Array.prototype.lastIndexOf);
test(Array.prototype.every);
test(Array.prototype.some);
test(Array.prototype.forEach);
test(Array.prototype.map);
test(Array.prototype.filter);
test(Array.prototype.reduce);
test(Array.prototype.reduceRight);
