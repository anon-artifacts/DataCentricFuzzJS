const v1 = Boolean.prototype;
Object.defineProperty(v1, "v", { set: constructor });
function foo(a8) {
    a8.v = 1;
}
foo(true);
foo(true);
foo(true);
