function t1() {
    var objectPrototypeObject = Object.getPrototypeOf(Object.prototype);
    var b = Object.create(null);
    try {
        const t4 = Object.prototype;
        t4.__proto__ = b;
    } catch(e9) {
    }
    console.log(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged");
    console.log(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged");
}
t1();
function t2() {
    var objectPrototypeObject = Object.getPrototypeOf(Object.prototype);
    var b = Object.create(null);
    try {
        Object.setPrototypeOf(Object.prototype, b);
    } catch(e30) {
    }
    console.log(objectPrototypeObject, Object.prototype.__proto__, "Object.prototype.__proto__ is unchanged");
    console.log(objectPrototypeObject, Object.getPrototypeOf(Object.prototype), "Object.getPrototypeOf(Object.prototype) is unchanged");
}
t2();
