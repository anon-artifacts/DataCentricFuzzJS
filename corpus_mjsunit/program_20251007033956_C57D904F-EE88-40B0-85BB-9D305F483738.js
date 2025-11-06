var Failed = 0;
function Fail() {
    print("*** FAILED ***\n");
    Failed++;
}
function check(a8, a9) {
    if (a8.value != a9) {
        Fail();
    }
}
function first() {
}
first.value = 1;
function second() {
}
second.prototype = first;
function third() {
}
const v17 = new second();
third.prototype = v17;
const v18 = new third();
var obj1 = v18;
obj1.foo = 45;
delete obj1.foo;
check(obj1, 1);
const t23 = third.prototype;
t23.value = 2;
check(obj1, 2);
const t27 = third.prototype;
delete t27.value;
check(obj1, 1);
if (Failed == 0) {
    print("Pass\n");
}
