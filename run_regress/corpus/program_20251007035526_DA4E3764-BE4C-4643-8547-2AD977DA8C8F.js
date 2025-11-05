const v0 = [-13442,268435456,-4096,-4294967296,-536870912,-3,-11826,5665,5212];
class C1 {
}
function f2() {
    return v0;
}
class C3 extends f2 {
    3778203144 = C1;
}
new C3();
class C5 {
    [C3];
    set f(a7) {
    }
    o(a9, a10) {
    }
}
const v13 = {
    get hello() {
        return 42;
    },
};
function f14() {
    var value = "hello";
    if ((v13[value] + 20) !== 62) {
        let v23;
        try { v23 = new Error(); } catch (e) {}
        throw v23;
    }
}
for (let i25 = 0; i25 < 10000; ++i25) {
    try { f14(); } catch (e) {}
}
