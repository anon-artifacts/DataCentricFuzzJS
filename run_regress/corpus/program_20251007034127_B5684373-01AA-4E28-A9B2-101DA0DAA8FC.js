function testOriginalRepro() {
    var result;
    const v5 = {
        toString() {
            result = v;
        },
    };
    var dict = v5;
    for (const v10 of ["fontsize","sup"]) {
        const v12 = String.prototype;
        const v13 = v12[v12];
        try { v13.call(dict); } catch (e) {}
    }
}
testOriginalRepro();
function testSimpler() {
    var result;
    function setResult() {
        result = v;
    }
    for (const v24 of ["hello","world"]) {
        try { setResult(); } catch (e) {}
    }
}
testSimpler();
