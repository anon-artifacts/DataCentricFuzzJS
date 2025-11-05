var a = 1;
function test() {
    if (a) {
        for (const v5 in [1]) {
            break;
        }
    }
    for (const v8 in [1]) {
        for (const v11 in [1]) {
            break;
        }
    }
    do {
        for (const v14 in [1]) {
            break;
        }
    } while (!a)
    if (a) {
        for (let i17 = 0; i17 < 1; i17++) {
            break;
        }
    }
    for (const v25 in [1]) {
        for (let i27 = 0; i27 < 1; i27++) {
            break;
        }
    }
    do {
        for (let i34 = 0; i34 < 1; i34++) {
            break;
        }
    } while (!a)
}
test();
