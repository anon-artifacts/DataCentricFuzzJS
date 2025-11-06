var values = [23,4.2,true,false,0 / 0];
for (let i10 = 0; i10 < values.length; ++i10) {
    var v = values[i10];
    Array.prototype.join.call(v);
    Array.prototype.pop.call(v);
    Array.prototype.push.call(v);
    Array.prototype.reverse.call(v);
    Array.prototype.shift.call(v);
    Array.prototype.slice.call(v);
    Array.prototype.splice.call(v);
    Array.prototype.unshift.call(v);
}
var length_receiver;
var element_receiver;
function length() {
    length_receiver = this;
    return 2;
}
function element() {
    element_receiver = this;
    return "x";
}
const v54 = Number.prototype;
Object.defineProperty(v54, "length", { get: length, set: length });
const v59 = Number.prototype;
Object.defineProperty(v59, "0", { get: element, set: element });
const v63 = Number.prototype;
Object.defineProperty(v63, "1", { get: element, set: element });
const v67 = Number.prototype;
Object.defineProperty(v67, "2", { get: element, set: element });
function test_receiver(a72, a73) {
    new Number(a72);
}
test_receiver(11, "Array.prototype.join.call(11)");
test_receiver(23, "Array.prototype.pop.call(23)");
test_receiver(42, "Array.prototype.push.call(42, 'y')");
test_receiver(49, "Array.prototype.reverse.call(49)");
test_receiver(65, "Array.prototype.shift.call(65)");
test_receiver(77, "Array.prototype.slice.call(77, 1)");
test_receiver(88, "Array.prototype.splice.call(88, 1, 1)");
test_receiver(99, "Array.prototype.unshift.call(99, 'z')");
