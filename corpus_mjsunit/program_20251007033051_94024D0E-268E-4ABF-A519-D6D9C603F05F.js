print(Object.preventExtensions.length);
print(Object.isExtensible({}));
var a = { x: 20, y: 30 };
Object.preventExtensions(a);
function f13() {
    a.z = 50;
}
SafeCall(f13);
print(Object.getOwnPropertyNames(a));
print(Object.isExtensible(a));
var a = { x: 20, y: 30 };
Object.preventExtensions(a);
function f26() {
    delete a.x;
}
SafeCall(f26);
print(a.x);
print(Object.isExtensible(a));
var a = { x: 20, y: 30 };
Object.preventExtensions(a);
function f38() {
    a.x = 40;
}
SafeCall(f38);
function f41() {
    a.y = 60;
}
SafeCall(f41);
print(Object.getOwnPropertyNames(a));
print(Object.isExtensible(a));
print(a.x);
Object.preventExtensions(this);
var newVar1 = 4;
var a = { x: 20, y: 30 };
Object.preventExtensions(a);
delete a.x;
Object.defineProperty(a, "y", { configurable: false });
print(Object.isSealed(a));
Object.defineProperty(a, "y", { writable: false });
print(Object.isFrozen(a));
const v75 = {
    get x() {
        return 0;
    },
    y: 30,
};
var a = v75;
Object.preventExtensions(a);
delete a.x;
Object.defineProperty(a, "y", { configurable: false });
print(Object.isSealed(a));
Object.defineProperty(a, "y", { writable: false });
print(Object.isFrozen(a));
function SafeCall(a92) {
    try {
        a92();
    } catch(e94) {
        print("Exception: " + e94.name);
    }
}
Object.preventExtensions(this);
this[10] = 10;
