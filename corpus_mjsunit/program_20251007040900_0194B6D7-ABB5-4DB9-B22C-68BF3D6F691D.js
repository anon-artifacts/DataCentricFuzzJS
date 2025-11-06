function disable__proto__() {
    const t1 = Object.prototype;
    delete t1.__proto__;
}
function verify__proto__enabled() {
    Object.prototype.hasOwnProperty("__proto__");
    var desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");
    console.log(__saved__proto__desc.get === desc.get);
    console.log(__saved__proto__desc.set === desc.set);
    var p = { a: 0 };
    var o = { b: 1 };
    o.__proto__ === Object.getPrototypeOf(o);
    Object.prototype === o.__proto__;
    o.__proto__ = p;
    o.__proto__ === Object.getPrototypeOf(o);
    p === o.__proto__;
    Object.setPrototypeOf(o, Object.prototype);
    o.__proto__ === Object.getPrototypeOf(o);
    Object.prototype === o.__proto__;
}
function verify__proto__disabled(a49) {
    var p = { a: 0 };
    var o = { b: 1 };
    Object.prototype === Object.getPrototypeOf(o);
    o.__proto__ = p;
    Object.prototype === Object.getPrototypeOf(o);
    Object.setPrototypeOf(o, p);
    p === Object.getPrototypeOf(o);
}
