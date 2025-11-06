function write(a1) {
    print(a1);
}
write("TestCase1");
write(Object.seal.length);
write(Object.isSealed({}));
write("TestCase2 - seal & add a property");
var a = { x: 20, y: 30 };
Object.seal(a);
function f20() {
    a.x = 40;
}
SafeCall(f20);
function f24() {
    a.z = 50;
}
SafeCall(f24);
write(Object.getOwnPropertyNames(a));
write(Object.isSealed(a));
write(a.x);
write("TestCase3 - seal & delete a property");
var a = { x: 20, y: 30 };
Object.seal(a);
function f40() {
    a.x = 40;
}
SafeCall(f40);
function f43() {
    delete a.x;
}
SafeCall(f43);
function f46() {
    a.z = 50;
}
SafeCall(f46);
write(Object.getOwnPropertyNames(a));
write(Object.isSealed(a));
write(a.x);
function SafeCall(a56) {
    try {
        a56();
    } catch(e58) {
        write("Exception: " + e58.name);
    }
}
