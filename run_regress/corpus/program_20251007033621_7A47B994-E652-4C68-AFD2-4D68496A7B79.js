function test0(a1) {
    const v2 = a1.p0;
    const v3 = /z/;
    a1.p0 = v2 ? a1.p0.replace(v3, "z") : test0a();
    a1.p1 = a1.p1 || "z";
    a1.p2 = 1;
    return a1;
}
function test0a() {
    try {
    } catch(e15) {
    }
}
test0({ p0: "a", p1: "b" });
test0({ p0: "a", p1: "b" });
test0({ p0: "a", p1: "b" });
print("pass");
