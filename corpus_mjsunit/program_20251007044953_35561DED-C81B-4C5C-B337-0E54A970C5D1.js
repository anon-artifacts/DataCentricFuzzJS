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
    let v17;
    try { v17 = new Array(100); } catch (e) {}
    var array = v17;
    for (let i20 = 0; i20 < 10000; ++i20) {
        let v27;
        try { v27 = indexOf(array, undefined); } catch (e) {}
        const v29 = -1;
        try { shouldBe(v27, v29); } catch (e) {}
        let v32;
        try { v32 = indexOf(array, null); } catch (e) {}
        const v34 = -1;
        try { shouldBe(v32, v34); } catch (e) {}
    }
}
try { f8(); } catch (e) {}
function f37() {
    function indexOf(a39, a40) {
        let v41;
        try { v41 = a39.indexOf(a40); } catch (e) {}
        return v41;
    }
    try { noInline(indexOf); } catch (e) {}
    let v46;
    try { v46 = new Array(100); } catch (e) {}
    var array = v46;
    const v48 = {};
    try { array.push(v48); } catch (e) {}
    for (let i51 = 0; i51 < 10000; ++i51) {
        let v58;
        try { v58 = indexOf(array, undefined); } catch (e) {}
        const v60 = -1;
        try { shouldBe(v58, v60); } catch (e) {}
        let v63;
        try { v63 = indexOf(array, null); } catch (e) {}
        const v65 = -1;
        try { shouldBe(v63, v65); } catch (e) {}
    }
}
try { f37(); } catch (e) {}
