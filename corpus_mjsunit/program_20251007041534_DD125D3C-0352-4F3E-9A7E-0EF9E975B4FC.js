function inverted_index() {
    return ~1;
}
function crash(a4) {
    a4[~inverted_index()] = 2;
    return 2;
}
const v11 = new Array(1);
crash(v11);
const v15 = new Array(1);
crash(v15);
const v19 = new Array(1);
crash(v19);
