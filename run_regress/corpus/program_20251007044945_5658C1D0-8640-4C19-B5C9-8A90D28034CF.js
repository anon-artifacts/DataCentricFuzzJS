function f(a1) {
    var ret = -1;
    switch (a1) {
        default:
        case 0:
            ret = 0;
            break;
        case 1:
            ret = 1;
            break;
        case 2:
            ret = 2;
            break;
        case 3:
            ret = 3;
            break;
        case 4:
            ret = 4;
            break;
    }
    return ret;
}
for (let i16 = 0; i16 < 3; i16++) {
    f(i16);
}
f(0);
f(1);
