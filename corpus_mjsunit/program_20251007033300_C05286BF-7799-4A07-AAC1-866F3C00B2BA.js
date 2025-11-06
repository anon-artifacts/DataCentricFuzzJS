function write(a1) {
    print(a1);
}
write("TestCase1");
write(Object.freeze.length);
write(Object.isFrozen({}));
write("TestCase2 - freeze & add a property");
var a = { x: 20, y: 30 };
Object.freeze(a);
function f20() {
    a.z = 50;
}
SafeCall(f20);
write(Object.getOwnPropertyNames(a));
write(Object.isFrozen(a));
write("TestCase3 - freeze & delete a property");
var a = { x: 20, y: 30 };
Object.freeze(a);
function f35() {
    delete a.x;
}
SafeCall(f35);
write(Object.getOwnPropertyNames(a));
write(Object.isFrozen(a));
write(a.x);
write("TestCase4 - freeze & modify a property");
var a = { x: 20, y: 30 };
Object.freeze(a);
function f51() {
    a.x = 40;
}
SafeCall(f51);
function f54() {
    a.y = 60;
}
SafeCall(f54);
write(Object.getOwnPropertyNames(a));
write(Object.isFrozen(a));
write(a.x);
function SafeCall(a64) {
    try {
        a64();
    } catch(e66) {
        write("Exception: " + e66.name);
    }
}
