function f0() {
    function f() {
        for (let i3 = 0; i3 < 4294967295; i3 += 2) {
            if (i3 === 10) {
                break;
            }
        }
    }
    f();
}
f0();
function f13() {
    function f() {
        for (let i16 = 0; i16 < 4294967293; i16 += 2) {
            if (i16 === 10) {
                break;
            }
        }
    }
    f();
}
f13();
