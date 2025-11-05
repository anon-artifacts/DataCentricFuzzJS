function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < 1000; ++i5) {
        var value = i5 & 63;
        switch (value) {
            case 0:
                result += a1.a;
                break;
            case 1:
                result += a1.b;
                break;
            case 2:
                result += a1.c;
                break;
            case 3:
                result += a1.d;
                break;
            case 4:
                result += a1.e;
                break;
            case 5:
                result += a1.f;
                break;
            case 6:
                result += a1.g;
                break;
            case 7:
                result += a1.h;
                break;
            case 8:
                result += a1.i;
                break;
            case 9:
                result += a1.j;
                break;
            case 10:
                result += a1.k;
                break;
            case 11:
                result += a1.a;
                break;
            case 12:
                result += a1.b;
                break;
            case 13:
                result += a1.c;
                break;
            case 14:
                result += a1.d;
                break;
            case 15:
                result += a1.e;
                break;
            case 16:
                result += a1.f;
                break;
            case 17:
                result += a1.g;
                break;
            case 18:
                result += a1.h;
                break;
            case 19:
                result += a1.i;
                break;
            case 20:
                result += a1.j;
                break;
            case 21:
                result += a1.k;
                break;
            case 22:
                result += a1.k;
                break;
            case 23:
                result += a1.a;
                break;
            case 24:
                result += a1.b;
                break;
            case 25:
                result += a1.c;
                break;
            case 26:
                result += a1.d;
                break;
            case 27:
                result += a1.e;
                break;
            case 28:
                result += a1.f;
                break;
            case 29:
                result += a1.g;
                break;
            case 30:
                result += a1.h;
                break;
            case 31:
                result += a1.i;
                break;
            case 32:
                result += a1.j;
                break;
            case 33:
                result += a1.k;
                break;
            case 34:
                result += a1.k;
                break;
            case 35:
                result += a1.k;
                break;
            case 36:
                result += a1.a;
                break;
            case 37:
                result += a1.b;
                break;
            case 38:
                result += a1.c;
                break;
            case 39:
                result += a1.d;
                break;
            case 40:
                result += a1.e;
                break;
            case 41:
                result += a1.f;
                break;
            case 42:
                result += a1.g;
                break;
            case 43:
                result += a1.h;
                break;
            case 44:
                result += a1.i;
                break;
            case 45:
                result += a1.j;
                break;
            case 46:
                result += a1.k;
                break;
            case 47:
                result += a1.i;
                break;
            case 48:
                result += a1.j;
                break;
            case 49:
                result += a1.k;
                break;
            case 50:
                result += a1.k;
                break;
            case 51:
                result += a1.k;
                break;
            case 52:
                result += a1.a;
                break;
            case 53:
                result += a1.b;
                break;
            case 54:
                result += a1.c;
                break;
            case 55:
                result += a1.d;
                break;
            case 56:
                result += a1.e;
                break;
            case 57:
                result += a1.f;
                break;
            case 58:
                result += a1.g;
                break;
            case 59:
                result += a1.h;
                break;
            case 60:
                result += a1.i;
                break;
            case 61:
                result += a1.j;
                break;
            case 62:
                result += a1.k;
                break;
            default:
                result += a1.z;
                break;
        }
    }
    return result;
}
function f141() {
    const v154 = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
        g: 7,
        h: 8,
        i: 9,
        j: 10,
        k: 11,
        z: 100,
    };
    var o = v154;
    var result = 0;
    for (let i159 = 0; i159 < 10000; ++i159) {
        result += foo(o);
    }
    if (result != 79660000) {
        throw "Error: bad result: " + result;
    }
}
f141();
