function test1() {
    try {
        return "try";
    } finally {
        return "finally";
    }
}
test1();
function test2() {
    try {
        throw 4;
    } catch(e7) {
        return "catch";
    } finally {
        return "finally";
    }
}
test2();
function test3() {
    try {
        throw 4;
    } finally {
        return "finally";
    }
}
test3();
