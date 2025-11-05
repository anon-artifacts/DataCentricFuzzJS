var stdlib = this;
var foreign = {};
const v8 = new ArrayBuffer(64 * 1024);
var heap = v8;
function f10(a11, a12, a13) {
    'use asm';
    function switch1(a15) {
        switch ((a15 = a15 | 0) | 0) {
            case 0:
                return 1;
            case 1:
                return 2;
            default:
                return a15 | 0;
        }
        return a15 | 0;
    }
    return { switch1: switch1 };
}
var switch1 = f10(stdlib, foreign, heap).switch1;
switch1(0);
switch1(1);
for (let i40 = -2147483648; i40 < 2147483648; i40 += 3999773) {
    switch1(i40);
}
function f47(a48, a49, a50) {
    'use asm';
    function switch2(a52) {
        a52 = a52 | 0;
        var j = 0;
        switch (a52 | 0) {
            case 0:
                j = 1;
                break;
            case 1:
                j = 2;
                break;
            case 2:
                j = 3;
                break;
            default:
                j = a52 | 0;
                break;
        }
        return j | 0;
    }
    return { switch2: switch2 };
}
var switch2 = f47(stdlib, foreign, heap).switch2;
switch2(0);
switch2(1);
switch2(2);
for (let i84 = -2147483648; i84 < 2147483648; i84 += 3999773) {
    switch2(i84);
}
function f91(a92, a93, a94) {
    'use asm';
    function switch3(a96) {
        a96 = a96 | 0;
        var j = 0;
        switch (a96 | 0) {
            case 0:
            case 1:
                j = 1;
                break;
            case 2:
            case 3:
                j = 2;
                break;
            case 4:
            case 5:
                j = 3;
                break;
            default:
                j = 0;
                break;
        }
        return j | 0;
    }
    return { switch3: switch3 };
}
var switch3 = f91(stdlib, foreign, heap).switch3;
switch3(0);
switch3(1);
switch3(2);
switch3(3);
switch3(4);
switch3(5);
for (let i139 = -2147483648; i139 < 2147483648; i139 += 3999773) {
    switch3(i139);
}
function f147(a148, a149, a150) {
    'use asm';
    function switch4(a152) {
        a152 = a152 | 0;
        const v156 = -1;
        const v159 = -2;
        const v162 = -3;
        const v165 = -8;
        switch (a152 | 0) {
            case v156:
            case 1:
                return 0;
            case v159:
            case 2:
                return 1;
            case v162:
            case 3:
                return 2;
            case v165:
            case 8:
                return 3;
            default:
                return 4;
        }
        return 0;
    }
    return { switch4: switch4 };
}
var switch4 = f147(stdlib, foreign, heap).switch4;
switch4(0);
switch4(-1);
switch4(1);
switch4(-2);
switch4(2);
switch4(-8);
switch4(8);
switch4(-123456789);
switch4(123456789);
