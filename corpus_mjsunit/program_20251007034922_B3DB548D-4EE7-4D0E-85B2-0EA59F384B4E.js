function getLaterAssign(a1) {
    var o = arguments;
    a1 = 17;
    return o;
}
var a1;
var a2;
for (let i10 = 0; i10 < 5; i10++) {
    let v17;
    try { v17 = getLaterAssign(1); } catch (e) {}
    a1 = v17;
}
const v19 = [17];
try { arraysEqual(a1, v19); } catch (e) {}
