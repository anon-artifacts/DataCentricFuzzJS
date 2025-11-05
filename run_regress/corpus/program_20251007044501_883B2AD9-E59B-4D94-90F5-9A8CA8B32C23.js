function shouldBe(a1, a2) {
    if (a1 !== a2) {
        let v6;
        try { v6 = String(a1); } catch (e) {}
        const v7 = `bad value: ${v6}`;
        let v8;
        try { v8 = new Error(v7); } catch (e) {}
        throw v8;
    }
}
function* gen(a10, a11, a12) {
    function test() {
        return arguments;
    }
    return test;
}
let v18;
try { v18 = gen(1, 2, 3); } catch (e) {}
let g = v18;
let v20;
try { v20 = g.next(); } catch (e) {}
let  = v20;
let v23;
try { v23 = func(); } catch (e) {}
const v24 = v23?.length;
try { shouldBe(v24, 0); } catch (e) {}
