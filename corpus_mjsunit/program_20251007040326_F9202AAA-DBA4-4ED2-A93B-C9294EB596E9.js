function format(a1) {
    if (a1) {
        return ("X" + true) + "Y";
    } else {
        return ("X" + false) + "Y";
    }
}
for (let i13 = 0; i13 < 1000; i13++) {
    format(true);
    format(false);
}
