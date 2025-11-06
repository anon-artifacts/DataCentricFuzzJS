const x = 1;
function testConst() {
    for (let i4 = 0; i4 < 20; i4++) {
        try {
            x = 2;
        } catch(e11) {
            continue;
        }
        throw "Fail1";
    }
}
testConst();
function testUninit() {
    for (let i17 = 0; i17 < 20; i17++) {
        try {
            y = 2;
        } catch(e25) {
            continue;
        }
        throw "Fail2";
    }
}
testUninit();
let y;
