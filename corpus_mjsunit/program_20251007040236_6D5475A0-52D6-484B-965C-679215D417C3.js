function assert(a1) {
}
try { noInline(assert); } catch (e) {}
var o1 = RegExp;
function test(a7) {
    a7.input = "bar";
    return a7?.input;
}
try { noInline(test); } catch (e) {}
var o2 = { input: "hello" };
var o3 = { x: 20, input: "hello" };
for (let i19 = 0; i19 < 1000; i19++) {
    const v27 = i19 % 2 ? o2 : o3;
    let v28;
    try { v28 = test(v27); } catch (e) {}
    v28 === "bar";
}
for (let i32 = 0; i32 < 100; i32++) {
    let v38;
    try { v38 = test(o1); } catch (e) {}
    v38 === "bar";
}
