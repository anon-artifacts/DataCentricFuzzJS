function foo(a1) {
    try {
        for (const v2 in a1) {
        }
        return false;
    } catch(e4) {
        return true;
    }
}
const v8 = { a: 1 };
const v12 = {
    getOwnPropertyDescriptor(a10, a11) {
        throw a10;
    },
};
const v13 = new Proxy(v8, v12);
var o = v13;
foo(o);
foo(o);
foo(o);
