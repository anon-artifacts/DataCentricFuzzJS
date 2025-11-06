var a = [1,2];
a[3.1415926535] = "value";
for (let i7 = 0; i7 < 3; i7++) {
    var attr;
    switch (i7) {
        case 0:
            attr = 0;
            break;
        case 1:
            attr = 1;
            break;
        case 2:
            attr = 3.1415926535;
            break;
    }
    var result = a[attr];
    switch (i7) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            break;
    }
}
