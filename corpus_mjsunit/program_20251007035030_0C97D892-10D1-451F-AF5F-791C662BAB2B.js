class C2 extends Intl.DateTimeFormat {
}
const v3 = new C2();
var obj = v3;
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
C2.prototype;
obj = Reflect.construct(C2, []);
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
C2.prototype;
obj = Reflect.construct(C2, [], C2);
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
C2.prototype;
obj = Reflect.construct(C2, [], Intl.DateTimeFormat);
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
Intl.DateTimeFormat.prototype;
obj = Reflect.construct(C2, [], Array);
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
obj instanceof Array;
Object.getPrototypeOf(obj);
Array.prototype;
obj = Reflect.construct(Intl.DateTimeFormat, [], Array);
obj instanceof Intl.DateTimeFormat;
obj instanceof Array;
Object.getPrototypeOf(obj);
Array.prototype;
function NewTargetNullPrototype() {
}
NewTargetNullPrototype.prototype = null;
obj = Reflect.construct(Intl.DateTimeFormat, [], NewTargetNullPrototype);
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
Intl.DateTimeFormat.prototype;
obj = Reflect.construct(C2, [], NewTargetNullPrototype);
obj instanceof C2;
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
Intl.DateTimeFormat.prototype;
var trapLog = [];
var getLog = [];
const v91 = Intl.DateTimeFormat;
const v98 = {
    get(a93, a94, a95) {
        getLog.push(a94);
        return Reflect.get(a93, a94, a95);
    },
};
const v105 = {
    get(a100, a101, a102) {
        trapLog.push(a101);
        return Reflect.get(a100, a101, a102);
    },
};
const v106 = new Proxy(v98, v105);
const v107 = new Proxy(v91, v106);
var ProxiedConstructor = v107;
obj = Reflect.construct(Intl.DateTimeFormat, [], ProxiedConstructor);
["get"];
["prototype"];
obj instanceof Intl.DateTimeFormat;
Object.getPrototypeOf(obj);
Intl.DateTimeFormat.prototype;
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
