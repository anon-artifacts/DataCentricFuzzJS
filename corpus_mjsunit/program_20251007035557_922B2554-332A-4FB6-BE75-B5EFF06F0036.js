function maybeFreeze(a1, a2) {
    with (this) {
    }
    if (a2) {
        Object.freeze(a1);
    }
}
function test() {
    var arr = [];
    for (let i10 = 0; i10 < 1800; i10++) {
        maybeFreeze(arr, i10 > 1500);
        try {
            arr.push(2);
            i10 <= 1500;
        } catch(e24) {
            e24 instanceof TypeError;
        }
    }
}
test();
