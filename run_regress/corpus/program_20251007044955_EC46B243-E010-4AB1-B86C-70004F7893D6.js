function branchy(a1, a2) {
    var result = 0;
    if (a1) {
        if (a1 & a1) {
            if (a2 & a1) {
            } else {
                result = (a1 & a1) & a2;
            }
        } else {
            if ((a1 & a1) & a1) {
                result = a2;
            }
        }
    } else {
        if ((a1 & a2) & a1) {
        }
    }
    return result;
}
branchy(932, 256, 368);
