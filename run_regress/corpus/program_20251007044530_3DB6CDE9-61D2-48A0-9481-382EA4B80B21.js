var thing0 = 0;
var thing1 = 1;
var thing2 = 2;
var thing3 = 3;
var thing4 = 4;
var thing5 = 5;
var thing6 = 6;
var thing7 = 7;
var thing8 = 8;
var thing9 = 9;
var thing10 = 10;
var thing11 = 11;
var thing12 = 12;
var thing13 = 13;
var thing14 = 14;
var thing15 = 15;
var thing16 = 16;
var thing17 = 17;
var thing18 = 18;
var thing19 = 19;
var thing20 = 20;
var thing21 = 21;
var thing22 = 22;
var thing23 = 23;
var thing24 = 24;
var thing25 = 25;
var thing26 = 26;
var thing27 = 27;
var thing28 = 28;
var thing29 = 29;
var thing30 = 30;
var thing31 = 31;
var thing32 = 32;
var thing33 = 33;
var thing34 = 34;
var thing35 = 35;
var thing36 = 36;
var thing37 = 37;
var thing38 = 38;
var thing39 = 39;
var thing40 = 40;
var thing41 = 41;
var thing42 = 42;
var thing43 = 43;
var thing44 = 44;
var thing45 = 45;
var thing46 = 46;
var thing47 = 47;
var thing48 = 48;
var thing49 = 49;
var thing50 = 50;
var thing51 = 51;
var thing52 = 52;
var thing53 = 53;
var thing54 = 54;
var thing55 = 55;
var thing56 = 56;
var thing57 = 57;
var thing58 = 58;
var thing59 = 59;
var thing60 = 60;
var thing61 = 61;
var thing62 = 62;
function foo(a127) {
    var result = 0;
    for (let i131 = 0; i131 < 1000; ++i131) {
        var value = i131 & 63;
        switch (value) {
            case thing0:
                result += a127.a;
                break;
            case thing1:
                result += a127.b;
                break;
            case thing2:
                result += a127.c;
                break;
            case thing3:
                result += a127.d;
                break;
            case thing4:
                result += a127.e;
                break;
            case thing5:
                result += a127.f;
                break;
            case thing6:
                result += a127.g;
                break;
            case thing7:
                result += a127.h;
                break;
            case thing8:
                result += a127.i;
                break;
            case thing9:
                result += a127.j;
                break;
            case thing10:
                result += a127.k;
                break;
            case thing11:
                result += a127.a;
                break;
            case thing12:
                result += a127.b;
                break;
            case thing13:
                result += a127.c;
                break;
            case thing14:
                result += a127.d;
                break;
            case thing15:
                result += a127.e;
                break;
            case thing16:
                result += a127.f;
                break;
            case thing17:
                result += a127.g;
                break;
            case thing18:
                result += a127.h;
                break;
            case thing19:
                result += a127.i;
                break;
            case thing20:
                result += a127.j;
                break;
            case thing21:
                result += a127.k;
                break;
            case thing22:
                result += a127.k;
                break;
            case thing23:
                result += a127.a;
                break;
            case thing24:
                result += a127.b;
                break;
            case thing25:
                result += a127.c;
                break;
            case thing26:
                result += a127.d;
                break;
            case thing27:
                result += a127.e;
                break;
            case thing28:
                result += a127.f;
                break;
            case thing29:
                result += a127.g;
                break;
            case thing30:
                result += a127.h;
                break;
            case thing31:
                result += a127.i;
                break;
            case thing32:
                result += a127.j;
                break;
            case thing33:
                result += a127.k;
                break;
            case thing34:
                result += a127.k;
                break;
            case thing35:
                result += a127.k;
                break;
            case thing36:
                result += a127.a;
                break;
            case thing37:
                result += a127.b;
                break;
            case thing38:
                result += a127.c;
                break;
            case thing39:
                result += a127.d;
                break;
            case thing40:
                result += a127.e;
                break;
            case thing41:
                result += a127.f;
                break;
            case thing42:
                result += a127.g;
                break;
            case thing43:
                result += a127.h;
                break;
            case thing44:
                result += a127.i;
                break;
            case thing45:
                result += a127.j;
                break;
            case thing46:
                result += a127.k;
                break;
            case thing47:
                result += a127.i;
                break;
            case thing48:
                result += a127.j;
                break;
            case thing49:
                result += a127.k;
                break;
            case thing50:
                result += a127.k;
                break;
            case thing51:
                result += a127.k;
                break;
            case thing52:
                result += a127.a;
                break;
            case thing53:
                result += a127.b;
                break;
            case thing54:
                result += a127.c;
                break;
            case thing55:
                result += a127.d;
                break;
            case thing56:
                result += a127.e;
                break;
            case thing57:
                result += a127.f;
                break;
            case thing58:
                result += a127.g;
                break;
            case thing59:
                result += a127.h;
                break;
            case thing60:
                result += a127.i;
                break;
            case thing61:
                result += a127.j;
                break;
            case thing62:
                result += a127.k;
                break;
            default:
                result += a127.z;
                break;
        }
    }
    return result;
}
function f204() {
    const v217 = {
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
    var o = v217;
    var result = 0;
    for (let i222 = 0; i222 < 5000; ++i222) {
        result += foo(o);
    }
    if (result != 39830000) {
        throw "Error: bad result: " + result;
    }
}
f204();
