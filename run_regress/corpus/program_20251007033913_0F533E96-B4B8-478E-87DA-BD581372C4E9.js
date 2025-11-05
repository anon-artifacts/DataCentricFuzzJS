function bitwiseAnd_inner(a1) {
    for (let i3 = 0; i3 < 60000; i3++) {
        a1 = a1 & i3;
    }
    return a1;
}
function bitwiseAnd() {
    return bitwiseAnd_inner(12341234);
}
bitwiseAnd();
