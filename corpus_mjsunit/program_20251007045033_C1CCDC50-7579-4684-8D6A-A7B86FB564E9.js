var global = this;
function f2() {
    return this;
}
var global2 = f2();
var builtin2 = Object.prototype.toString;
"[object builtins]" != builtin2();
"[object builtins]" != builtin2.call();
"[object builtins]" != builtin2.apply();
"[object builtins]" != builtin2.call.call(builtin2);
