function Module() {
    'use asm';
    function d0() {
        do {
        } while (false)
        return 110;
    }
    function d1() {
        do {
            return 111;
        } while (false)
        return 112;
    }
    function d2() {
        do {
            break;
        } while (false)
        return 113;
    }
    function d3(a12) {
        a12 = a12 | 0;
        do {
            if (a12) {
                return 114;
            }
        } while (false)
        return 115;
    }
    function d4(a19) {
        a19 = a19 | 0;
        do {
            if (a19) {
                return 116;
            } else {
                break;
            }
        } while (false)
        return 117;
    }
    function d5(a26) {
        a26 = a26 | 0;
        do {
            if (a26) {
                return 118;
            }
        } while (false)
        return 119;
    }
    function d6(a33) {
        a33 = a33 | 0;
        do {
            if ((a33 | 0) == 0) {
                return 120;
            }
            if ((a33 | 0) == 1) {
                break;
            }
            if ((a33 | 0) == 2) {
                return 122;
            }
            if ((a33 | 0) == 3) {
                continue;
            }
            if ((a33 | 0) == 4) {
                return 124;
            }
        } while (false)
        return 125;
    }
    const v61 = {
        d0: d0,
        d1: d1,
        d2: d2,
        d3: d3,
        d4: d4,
        d5: d5,
        d6: d6,
    };
    return v61;
}
var m = Module();
m.d0();
m.d1();
m.d2();
m.d3(1);
m.d3(0);
m.d4(1);
m.d4(0);
m.d5(1);
m.d5(0);
m.d6(0);
m.d6(1);
m.d6(2);
m.d6(3);
m.d6(4);
m.d6(5);
