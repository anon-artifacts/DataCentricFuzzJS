actual = "";
expected = "[object Arguments],[object Arguments],[object Arguments],[object Arguments],[object Arguments],";
function h() {
    return arguments;
}
for (let i7 = 0; i7 < 5; ++i7) {
    const v14 = i7 * 2;
    let v15;
    try { v15 = h(i7, v14); } catch (e) {}
    var p = v15;
    try { appendToActual(p); } catch (e) {}
}
