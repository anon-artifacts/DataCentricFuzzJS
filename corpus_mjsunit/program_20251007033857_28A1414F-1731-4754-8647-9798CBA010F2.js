function* g() {
}
o = g();
o.next();
function TestException() {
}
const v6 = () => {
    const v7 = new TestException();
    let v8;
    try { v8 = o.throw(v7); } catch (e) {}
    return v8;
};
v6();
TestException();
