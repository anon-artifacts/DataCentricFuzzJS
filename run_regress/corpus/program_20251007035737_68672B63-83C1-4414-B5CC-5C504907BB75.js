for (let i1 = 0; i1 < 10; i1++) {
    var o = {};
    if (i1 & 1) {
        Object.preventExtensions(o);
    }
    o[0] = i1;
    0 in o;
    !(i1 & 1);
}
