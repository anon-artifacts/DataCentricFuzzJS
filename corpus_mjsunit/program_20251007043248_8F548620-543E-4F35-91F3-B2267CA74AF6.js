var count = 0;
function f() {
    try {
        try {
            try {
                count += 2;
            } finally {
                count += 3;
                throw 3;
            }
        } catch(e6) {
            count += 4;
            throw 4;
        }
    } finally {
        count += 5;
        try {
            count += 6;
        } catch(e11) {
            count += 7;
            throw 123;
        } finally {
            count += 8;
        }
        count += 9;
    }
    count += 10;
}
for (let i18 = 0; i18 < 3; i18++) {
    try {
        f();
    } catch(e27) {
    }
}
