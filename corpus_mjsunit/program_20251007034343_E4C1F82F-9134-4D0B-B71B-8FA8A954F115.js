function unreachable() {
    const v3 = new Error("NG");
    throw v3;
}
function* gen() {
    unreachable();
}
var g = gen();
const v10 = new Error("OK");
var error = v10;
var thrown = null;
try {
    g.throw(error);
} catch(e15) {
    thrown = e15;
}
if (thrown !== error) {
    unreachable();
}
