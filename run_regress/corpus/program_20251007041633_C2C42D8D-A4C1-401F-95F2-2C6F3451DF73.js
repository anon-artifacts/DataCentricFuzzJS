const v1 = Function.prototype;
function f3() {
    throw 17;
}
function f5() {
    throw 42;
}
Object.defineProperty(v1, "prototype", { get: f3, set: f5 });
this.hasOwnProperty("Intl");
