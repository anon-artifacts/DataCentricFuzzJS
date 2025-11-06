function inArrayTest() {
    var a = [0,1,2,3,4,5,6,7,8,9];
    for (let i14 = 0; i14 < a.length; i14++) {
        if (!(i14 in a)) {
            break;
        }
    }
    return i;
}
try { inArrayTest(); } catch (e) {}
