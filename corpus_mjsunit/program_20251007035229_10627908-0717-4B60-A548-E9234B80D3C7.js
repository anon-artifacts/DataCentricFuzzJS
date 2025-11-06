var obj = { a: 1, b: 2, c: 3 };
var obj2 = { d: 1, e: 2, f: 3 };
var obj3 = { g: 1, h: 2, i: 3 };
var obj4 = { j: 1, k: 2, l: 3 };
function f20() {
    return "";
}
var inlinee = f20;
function func(a24, a25, a26, a27) {
    for (const v28 in a24) {
        console.log("outter " + v28);
        forin_inlinee(a25, a26);
    }
    forin4(a24, a25, a26, a27);
}
function forin_inlinee(a38, a39) {
    for (const v40 in a38) {
        console.log("inner " + v40);
        forin_inlinee2(a39);
    }
}
function forin_inlinee2(a48) {
    for (const v49 in a48) {
        console.log("inner3 " + v49);
    }
}
function forin4(a55, a56, a57, a58) {
    for (const v59 in a55) {
        for (const v60 in a56) {
            for (const v61 in a57) {
                for (const v62 in a58) {
                    console.log((((inlinee() + v59) + v60) + v61) + v62);
                }
            }
        }
    }
}
func(obj, obj2, obj3, obj4);
func(obj, obj2, obj3, obj4);
func(obj, obj2, obj3, obj4);
function f73() {
    return " ";
}
inlinee = f73;
func(obj, obj2, obj3, obj4);
