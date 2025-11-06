function assert(a1) {
}
function foo(a3, a4, a5) {
    let x = (a3 + a4) + a5;
    return [a3,a4,a5,x];
}
try { noInline(foo); } catch (e) {}
const v13 = Object?.prototype;
const v17 = {
    get() {
        return 20;
    },
};
try { Object.defineProperty(v13, "10000", v17); } catch (e) {}
for (let i20 = 0; i20 < 10000; ++i20) {
    let a = 10.5;
    let b = 1.1;
    let c = 1.2;
    let x = (a + b) + c;
    let v35;
    try { v35 = foo(a, b, c); } catch (e) {}
    let result = v35;
    result?.length === 4;
    result?.[0] === a;
    result?.[1] === b;
    result?.[2] === c;
    result?.[3] === x;
}
