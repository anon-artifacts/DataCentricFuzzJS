function shouldThrow(a1, a2) {
    var errorThrown = false;
    var error = null;
    try {
        a1();
    } catch(e8) {
        errorThrown = true;
        error = e8;
    }
}
function* gen() {
}
var g = gen();
const v13 = () => {
    const v14 = {};
    g.next.call(v14);
};
shouldThrow(v13, `TypeError: |this| should be a generator`);
const v19 = () => {
    const v20 = {};
    g.throw.call(v20);
};
shouldThrow(v19, `TypeError: |this| should be a generator`);
const v25 = () => {
    const v26 = {};
    g.return.call(v26);
};
shouldThrow(v25, `TypeError: |this| should be a generator`);
