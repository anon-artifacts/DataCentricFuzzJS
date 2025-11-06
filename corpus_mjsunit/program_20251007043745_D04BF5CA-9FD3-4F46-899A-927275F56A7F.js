function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function f8() {
    function indexOf(a10, a11) {
        let v12;
        try { v12 = a10.indexOf(a11); } catch (e) {}
        return v12;
    }
    try { noInline(indexOf); } catch (e) {}
    var array = [];
    for (let i18 = 0; i18 < 100; ++i18) {
        let v25;
        try { v25 = String(i18); } catch (e) {}
        try { array.push(v25); } catch (e) {}
    }
    for (let i28 = 0; i28 < 100000; ++i28) {
        let v35;
        try { v35 = indexOf(array, "42"); } catch (e) {}
        try { shouldBe(v35, 42); } catch (e) {}
    }
}
try { f8(); } catch (e) {}
function f39() {
    function indexOf(a41, a42) {
        let v43;
        try { v43 = a41.indexOf(a42); } catch (e) {}
        return v43;
    }
    try { noInline(indexOf); } catch (e) {}
    var array = [];
    for (let i49 = 0; i49 < 100; ++i49) {
        const v56 = i49 + 0.5;
        let v58;
        try { v58 = String(v56); } catch (e) {}
        try { array.push(v58); } catch (e) {}
        const v60 = {};
        try { array.push(v60); } catch (e) {}
    }
    for (let i63 = 0; i63 < 100000; ++i63) {
        let v70;
        try { v70 = indexOf(array, "42.5"); } catch (e) {}
        const v73 = 42 * 2;
        try { shouldBe(v70, v73); } catch (e) {}
    }
}
try { f39(); } catch (e) {}
