function assert(a1) {
}
const v2 = () => {
    return 2;
};
let o = { valueOf: v2 };
let a = 2;
try {
    a.toString(o);
} catch(e9) {
}
