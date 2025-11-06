function f0() {
}
void 0;
Function.prototype.hasOwnProperty("prototype");
Function.prototype.prototype;
var builtin_ctors = [Object,Function,Array,String,Boolean,Number,Date,RegExp,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError];
for (let i29 = 0; i29 < builtin_ctors.length; i29++) {
    var c = builtin_ctors[i29];
    typeof c.prototype;
    c === Function ? "function" : "object";
    c.prototype.constructor;
}
var builtin_funcs = [eval,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent];
for (let i57 = 0; i57 < builtin_funcs.length; i57++) {
    builtin_funcs[i57].hasOwnProperty("prototype");
    builtin_funcs[i57].prototype;
}
var names = Object.getOwnPropertyNames(Math);
for (let i74 = 0; i74 < names.length; i74++) {
    var m = Math[names[i74]];
    if (typeof m === "function") {
        m.prototype;
    }
}
f0(0, 0, "don't crash");
