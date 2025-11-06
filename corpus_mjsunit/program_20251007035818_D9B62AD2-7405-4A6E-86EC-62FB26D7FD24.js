function dead1(a1, a2) {
    {
        var x = a1 + a2;
    }
    return a1;
}
function dead2(a6, a7) {
    {
        var x = a6 | 0;
        var y = a7 | 0;
    }
    return a6;
}
function dead3(a15, a16) {
    {
        var z;
        if (a15 == 2) {
            z = a15;
        } else {
            z = a16;
        }
    }
    return a15;
}
function dead4(a22) {
    {
        var z = 3;
        for (i = 0; i < 3; i++) {
            z++;
        }
    }
    return a22;
}
function dead5(a34) {
    {
        var z = 3;
        for (i = 0; i < 3; i++) {
            z++;
        }
        var w = z + a34;
    }
    return a34;
}
dead1(33, 32) == 33;
dead2(33, 32) == 33;
dead3(33, 32) == 33;
dead4(33) == 33;
dead5(33) == 33;
dead1(34, 7) == 34;
dead2(34, 7) == 34;
dead3(34, 7) == 34;
dead4(34) == 34;
dead5(34) == 34;
dead1(3.4, 0.1) == 3.4;
dead2(3.4, 0.1) == 3.4;
dead3(3.4, 0.1) == 3.4;
dead4(3.4) == 3.4;
dead5(3.4) == 3.4;
