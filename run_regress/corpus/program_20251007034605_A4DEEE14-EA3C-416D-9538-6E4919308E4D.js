function write(a1) {
    print(a1);
}
function Getter() {
    write("GETTER");
    return "GetterValue";
}
function SafeCall(a9) {
    try {
        a9();
    } catch(e11) {
        write(e11.name);
    }
}
write("Test 1");
function f16() {
    Object.getOwnPropertyDescriptor();
}
SafeCall(f16);
write("Test 2");
function f22() {
    write(Object.getOwnPropertyDescriptor({}));
}
SafeCall(f22);
write("Test 3");
function f30() {
    write(Object.getOwnPropertyDescriptor({ undefined: 4 }).value);
}
SafeCall(f30);
write("Test 4");
function f40() {
    Object.defineProperty();
}
SafeCall(f40);
write("Test 5");
function f46() {
    Object.defineProperty({});
}
SafeCall(f46);
write("Test 6");
function f53() {
    Object.defineProperty({}, "foo");
}
SafeCall(f53);
write("Test 7");
function f61() {
    const v62 = {};
    function f63() {
        throw { name: "MyError" };
    }
    Object.defineProperty(v62, { toString: f63 });
}
SafeCall(f61);
write("Test 8");
function f72() {
    var obj = {};
    Object.defineProperty(obj, undefined, { value: 4, writable: true });
    write(obj["undefined"]);
}
SafeCall(f72);
write("Test 9");
function f87() {
    Object.defineProperties();
}
SafeCall(f87);
write("Test 10");
function f93() {
    Object.defineProperties({});
}
SafeCall(f93);
var obj = {};
Object.defineProperty(obj, "length", { get: Getter, configurable: true });
write("Test 11");
function f107() {
    Array.prototype.every.call(obj);
}
SafeCall(f107);
write("Test 12");
function f115() {
    Array.prototype.some.call(obj);
}
SafeCall(f115);
write("Test 13");
function f123() {
    Array.prototype.forEach.call(obj);
}
SafeCall(f123);
write("Test 14");
function f131() {
    Array.prototype.map.call(obj);
}
SafeCall(f131);
write("Test 15");
function f139() {
    Array.prototype.filter.call(obj);
}
SafeCall(f139);
write("Test 16");
function f147() {
    Array.prototype.reduce.call(obj);
}
SafeCall(f147);
write("Test 17");
function f155() {
    Array.prototype.reduceRight.call(obj);
}
SafeCall(f155);
