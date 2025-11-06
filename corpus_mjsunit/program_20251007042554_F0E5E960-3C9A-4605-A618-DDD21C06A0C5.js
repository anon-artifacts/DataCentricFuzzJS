function f() {
    const v2 = new Error();
    return v2.stack;
}
function g(a5) {
    return f();
}
g();
g();
print(g());
const v12 = g();
/g \(.*?\.js:15:10\)/.test(v12);
