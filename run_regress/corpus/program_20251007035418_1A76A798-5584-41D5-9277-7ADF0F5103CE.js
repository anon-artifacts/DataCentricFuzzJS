function testSet(a1) {
    var y = 0;
    for (let i5 = 0; i5 < 40; i5++) {
        a1[i5] = 3;
    }
    return a1[10];
}
function testGet(a14) {
    var y = 0;
    for (let i18 = 0; i18 < 40; i18++) {
        y += a14[i18];
    }
    return y;
}
const v27 = new Uint16Array(40);
var arr = v27;
testSet(arr);
try {
    testSet(undefined);
} catch(e33) {
    e33 instanceof TypeError;
}
try {
    testSet(4.5);
} catch(e39) {
    e39 instanceof TypeError;
}
testGet(arr);
try {
    testGet(undefined);
} catch(e47) {
    e47 instanceof TypeError;
}
try {
    testGet(12345);
} catch(e53) {
    e53 instanceof TypeError;
}
