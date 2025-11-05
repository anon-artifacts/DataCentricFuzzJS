var a = ["string"];
function funky(a4) {
    a4[0] = 1;
    return 1;
}
funky(a);
function crash() {
    var q = [0];
    for (let i12 = 0; i12 < 100000; i12++) {
        funky(q);
    }
    q[0] = 0;
    funky(q);
}
crash();
