function shapelessArgCalleeLoop(a1, a2, a3, a4) {
    for (let i6 = 0; i6 < 10; i6++) {
        a1(i6, a4);
        a1 = a2;
        a2 = a3;
    }
}
function shapelessVarCalleeLoop(a14, a15, a16, a17) {
    var f = a14;
    for (let i20 = 0; i20 < 10; i20++) {
        f(i20, a17);
        f = a15;
        a15 = a16;
    }
}
function shapelessLetCalleeLoop(a28, a29, a30, a31) {
    for (let i33 = 0; i33 < 10; i33++) {
        let f = a28;
        f(i33, a31);
        f = a29;
        a29 = a30;
    }
}
function shapelessUnknownCalleeLoop(a42, a43, a44, a45, a46) {
    for (let i48 = 0; i48 < 10; i48++) {
        a43(i48, a46);
        a43 = a44;
        a44 = a45;
    }
}
function shapelessCalleeTest() {
    var a = [];
    function f58(a59, a60) {
        a60[a59] = a59;
    }
    var helper = f58;
    function f62(a63, a64) {
        a64[a63] = -a63;
    }
    shapelessArgCalleeLoop(helper, helper, f62, a);
    function f67(a68, a69) {
        a69[10 + a68] = a68;
    }
    helper = f67;
    function f72(a73, a74) {
        const v75 = -a73;
        a74[10 + a73] = v75;
    }
    shapelessVarCalleeLoop(helper, helper, f72, a);
    function f79(a80, a81) {
        a81[20 + a80] = a80;
    }
    helper = f79;
    function f84(a85, a86) {
        const v87 = -a85;
        a86[20 + a85] = v87;
    }
    shapelessLetCalleeLoop(helper, helper, f84, a);
    function f91(a92, a93) {
        a93[30 + a92] = a92;
    }
    helper = f91;
    function f97(a98, a99) {
        const v100 = -a98;
        a99[30 + a98] = v100;
    }
    shapelessUnknownCalleeLoop(null, helper, helper, f97, a);
    try {
        helper = { hack: 42 };
        shapelessUnknownCalleeLoop(null, helper, helper, helper, a);
    } catch(e108) {
        if ((e108 + "") != "TypeError: f is not a function") {
            print("shapelessUnknownCalleeLoop: unexpected exception " + e108);
        }
    }
    return a.join("");
}
shapelessCalleeTest();
