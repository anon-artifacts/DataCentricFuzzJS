function assertArraysFirstEqual(a1, a2) {
    if (a1?.length != a2?.length) {
    }
}
function check(a7) {
    let v9;
    try { v9 = serialize(a7); } catch (e) {}
    let v11;
    try { v11 = deserialize(v9); } catch (e) {}
    var a = v11;
}
let v15;
try { v15 = new Int8Array(1); } catch (e) {}
try { check(v15); } catch (e) {}
try { evaluate("check(['a', 'b']);"); } catch (e) {}
