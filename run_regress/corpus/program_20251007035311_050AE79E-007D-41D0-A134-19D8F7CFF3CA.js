var Failed = 0;
function Fail() {
    print("*** FAILED ***\n");
    Failed++;
}
function check(a8, a9) {
    a8.value(a9);
}
function first() {
}
function isFirst(a13) {
    if (a13 != 1) {
        Fail();
    }
}
function isSecond(a18) {
    if (a18 != 2) {
        Fail();
    }
}
first.value = isFirst;
function second() {
}
second.prototype = first;
function third() {
}
const v24 = new second();
third.prototype = v24;
const v25 = new third();
var obj1 = v25;
check(obj1, 1);
const t30 = third.prototype;
t30.value = isSecond;
check(obj1, 2);
const t33 = third.prototype;
delete t33.value;
check(obj1, 1);
if (Failed == 0) {
    print("Pass\n");
}
