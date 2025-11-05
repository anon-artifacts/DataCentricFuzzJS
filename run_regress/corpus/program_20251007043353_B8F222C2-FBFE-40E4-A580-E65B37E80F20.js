function f0() {
    function f1() {
        this.a = 1;
        this.b = 2;
        this.c = 3;
    }
    return f1;
}
var nonNumeric = f0;
nonNumeric.myName = "Non-numeric";
nonNumeric.prop = "b";
function f11() {
    function f12() {
        this.a = 1;
        this[9] = 2;
        this.c = 3;
    }
    return f12;
}
var numeric = f11;
numeric.myName = "Numeric";
numeric.prop = "9";
var ctorProviders = [nonNumeric,numeric];
function f24(a25, a26) {
}
var doNothing = f24;
doNothing.myName = "No-op";
function f29(a30, a31) {
    function f32(a33) {
        print("SETTER: " + a33);
    }
    function f38() {
        print("GETTER");
        return "GETTERVALUE";
    }
    Object.defineProperty(a30, a31, { set: f32, get: f38 });
}
var defineAccessor = f29;
defineAccessor.myName = "Define accessor property";
function f48(a49, a50) {
    Object.defineProperty(a49, a50, { value: "NONWRITABLE", writable: false });
}
var defineNonWritable = f48;
defineNonWritable.myName = "Define non-writable property";
function f58(a59, a60) {
    Object.defineProperty(a59, a60, { value: "WRITABLE", writable: true });
}
var defineWritable = f58;
defineWritable.myName = "Define writable property";
var definers = [doNothing,defineAccessor,defineNonWritable,defineWritable];
var testId = 1;
for (let i73 = 0; i73 < definers.length; i73++) {
    var define = definers[i73];
    for (let i82 = 0; i82 < ctorProviders.length; i82++) {
        var provider = ctorProviders[i82];
        var ctor = provider();
        print((((("Test " + testId++) + ": ") + provider.myName) + ", ") + define.myName);
        const v105 = new ctor();
        var o = v105;
        printt(o, provider.prop);
        define(ctor.prototype, provider.prop);
        const v113 = new ctor();
        printt(o = v113, provider.prop);
    }
}
function printt(a117, a118) {
    print("a: " + a117.a);
    print((a118 + ": ") + a117[a118]);
    print("c: " + a117.c);
}
