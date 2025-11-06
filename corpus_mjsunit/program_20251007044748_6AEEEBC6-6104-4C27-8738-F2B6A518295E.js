function f0(a1) {
    if (a1 > 98) {
        function f4(a5) {
            return true;
        }
        uceFault = f4;
    }
}
var uceFault = f0;
var uceFault_str_split = true;
function rstr_split(a12) {
    var x = ("str01234567899876543210rts").split("" + a12);
    let v18;
    try { v18 = uceFault_str_split(a12); } catch (e) {}
    let v19;
    try { v19 = uceFault_str_split(a12); } catch (e) {}
    if (v18 || v19) {
    }
}
for (i = 0; i < 100; i++) {
    rstr_split(i);
}
