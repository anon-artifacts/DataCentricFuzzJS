/(?:a+)+/mdsu;
class C1 {
    get f() {
        const v3 = %WasmArray();
        super.g = v3;
    }
}
try { Reflect.parse("function fሀ() { return 3; }"); } catch (e) {}
const v7 = {};
function f9() {
    return Reflect;
}
function f10() {
    return f10;
}
const v14 = Object.defineProperty(v7, "prop", { get: f9, set: f10, configurable: true });
function f16() {
    return v14;
}
Object.defineProperty(v7, "prop", { get: f16 });
test = "'stringሴ';";
