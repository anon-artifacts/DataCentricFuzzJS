function f() {
    foo = f.caller;
}
new Number({ valueOf: f });
if (foo !== null) {
    const v10 = new Error(foo);
    throw v10;
}
foo = 1;
const v12 = { valueOf: f };
([1]).slice(v12);
if (foo !== null) {
    const v19 = new Error(foo);
    throw v19;
}
foo = 1;
([1]).map(f);
if (foo !== null) {
    const v27 = new Error(foo);
    throw v27;
}
