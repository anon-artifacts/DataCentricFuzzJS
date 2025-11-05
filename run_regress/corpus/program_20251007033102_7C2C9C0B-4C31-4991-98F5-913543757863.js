function f0(a1, a2, a3) {
    if (a1 !== a2) {
        throw ((((a3 + ". Expected '") + a2) + "', but was '") + a1) + "'";
    }
}
var testCase = f0;
function f15() {
    const v16 = (a17) => {
        return this?.x + a17;
    };
    return v16;
}
var d = { x: "bar", y: f15 };
const v23 = d?.y;
try { noInline(v23); } catch (e) {}
var e = { x: "baz" };
for (let i30 = 0; i30 < 10000; i30++) {
    let v37;
    try { v37 = d.y(); } catch (e) {}
    let v38;
    try { v38 = v37.bind(e, "ley"); } catch (e) {}
    let v39;
    try { v39 = v38(); } catch (e) {}
    try { testCase(v39, "barley", "Error: function bind shouldn't change lexical binding of the arrow function"); } catch (e) {}
}
