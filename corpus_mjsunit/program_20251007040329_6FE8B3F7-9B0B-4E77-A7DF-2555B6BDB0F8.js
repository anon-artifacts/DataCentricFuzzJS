function OSRInsideTry(a1) {
    try {
        throw a1;
    } catch(e2) {
        return e2 + 1;
    }
    return a1 + 2;
}
OSRInsideTry(23);
function OSRInsideCatch(a11) {
    try {
        throw a11;
    } catch(e12) {
        return e12 + 1;
    }
    return a11 + 2;
}
OSRInsideCatch(23);
function OSRInsideFinally_Return(a21) {
    try {
        throw a21;
    } finally {
        return a21 + 1;
    }
    return a21 + 2;
}
OSRInsideFinally_Return(23);
function OSRInsideFinally_ReThrow(a30) {
    try {
        throw a30;
    } finally {
    }
    return a30 + 2;
}
