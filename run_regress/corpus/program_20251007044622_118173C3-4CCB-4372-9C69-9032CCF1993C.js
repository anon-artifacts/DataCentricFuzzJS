let x;
const v4 = {
    set foo(a3) {
        x = a3;
    },
};
let o = v4;
Object.freeze(o);
o.foo = 42;
if (x != 42) {
    throw "Error: bad result: " + x;
}
