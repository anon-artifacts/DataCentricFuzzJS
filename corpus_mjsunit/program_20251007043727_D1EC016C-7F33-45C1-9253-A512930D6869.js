function test(a1, a2) {
    a2.property;
}
var holder = {};
holder.__proto__ = null;
holder.property = "foo";
delete holder.property;
test(undefined, holder);
test(undefined, holder);
test(undefined, holder);
holder.property = "bar";
test("bar", holder);
test("bar", holder);
function test2(a21, a22) {
    a22.prop2;
}
var holder2 = {};
holder2.prop2 = "foo";
holder2.__proto__ = null;
function Receiver() {
}
Receiver.prototype = holder2;
const v29 = new Receiver();
var rec2 = v29;
delete holder2.prop2;
test2(undefined, rec2);
test2(undefined, rec2);
test2(undefined, rec2);
holder2.prop2 = "bar";
test2("bar", rec2);
test2("bar", rec2);
