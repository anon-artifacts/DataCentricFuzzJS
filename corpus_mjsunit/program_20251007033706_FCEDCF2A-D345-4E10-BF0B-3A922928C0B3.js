console.log("This test checks that functions on the array prototype correctly handle exceptions from property getters when called on non-array objects.");
function test(a4) {
    var testObj = { length: 3 };
    function f8() {
        throw true;
    }
    var propertyGetter = { get: f8 };
    Object.defineProperty(testObj, 0, propertyGetter);
    Object.defineProperty(testObj, 1, propertyGetter);
    Object.defineProperty(testObj, 2, propertyGetter);
    try {
        function f19() {
        }
        a4.call(testObj, f19);
        return false;
    } catch(e22) {
        return e22 === true;
    }
}
test(Array.prototype.sort);
test(Array.prototype.every);
test(Array.prototype.some);
test(Array.prototype.forEach);
test(Array.prototype.map);
test(Array.prototype.filter);
test(Array.prototype.reduce);
test(Array.prototype.reduceRight);
test(Array.prototype.join);
test(Array.prototype.pop);
test(Array.prototype.push);
test(Array.prototype.reverse);
test(Array.prototype.shift);
test(Array.prototype.slice);
test(Array.prototype.splice);
test(Array.prototype.unshift);
test(Array.prototype.indexOf);
test(Array.prototype.lastIndexOf);
