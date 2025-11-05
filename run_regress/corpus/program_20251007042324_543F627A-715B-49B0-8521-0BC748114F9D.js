function F() {
    for (const v5 in [1,2,3]) {
        return 42;
    }
    return 87;
}
function G() {
    for (const v13 in [1,2,3]) {
        try {
            return 42;
        } finally {
        }
    }
    return 87;
}
function H() {
    for (const v21 in [1,2,3]) {
        try {
            return 42;
        } catch(e23) {
        }
    }
    return 87;
}
F();
G();
H();
