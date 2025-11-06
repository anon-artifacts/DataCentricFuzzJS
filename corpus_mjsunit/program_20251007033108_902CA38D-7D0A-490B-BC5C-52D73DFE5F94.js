const maxLength = 4294967295;
let v3;
try { v3 = ("A").repeat(maxLength); } catch (e) {}
const s = v3;
function foo(a6) {
    let v8;
    try { v8 = a6.indexOf("", maxLength); } catch (e) {}
    let x = v8;
    return x === maxLength;
}
foo(s);
foo(s);
foo(s);
