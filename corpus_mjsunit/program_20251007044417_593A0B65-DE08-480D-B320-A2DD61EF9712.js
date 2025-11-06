function assign(a1) {
    a1 = 17;
    return arguments;
}
var a1;
for (let i7 = 0; i7 < 5; i7++) {
    let v14;
    try { v14 = assign(1); } catch (e) {}
    a1 = v14;
}
const v16 = [17];
try { arraysEqual(a1, v16); } catch (e) {}
