for (let i1 = 0; i1 <= 383; i1++) {
    const v8 = new Unicode(i1);
    var U = v8;
}
function Unicode(a11) {
    u = GetUnicodeValues(a11);
    this.upper = u?.[0];
}
function GetUnicodeValues(a19) {
    const v21 = new Array();
    u = v21;
    if (((a19 >= 256) && (a19 < 312)) || ((a19 > 329) && (a19 < 376))) {
        try {
        } finally {
            return;
        }
    }
    return u;
}
