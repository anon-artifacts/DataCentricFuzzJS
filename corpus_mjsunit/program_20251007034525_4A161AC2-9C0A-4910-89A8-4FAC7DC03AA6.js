function foo(a1, a2, a3, a4) {
    var result = a1;
    if (a1 < 0) {
        throw "what!";
    } else {
        if (a1 < 1) {
            for (let i11 = a2; i11 < a3; ++i11) {
                result += a4[i11];
            }
        } else {
            if (a1 < 2) {
                for (let i21 = a2 + 1; i21 < (a3 - 1); ++i21) {
                    result += a4[i21] * a1;
                }
            } else {
                if (a1 < 3) {
                    for (let i34 = a2 + 2; i34 < (a3 - 2); ++i34) {
                        result += a4[i34] * a2;
                    }
                } else {
                    if (a1 < 4) {
                        for (let i47 = a2 + 3; i47 < (a3 - 3); ++i47) {
                            result += a4[i47] * a3;
                        }
                    } else {
                        throw "huh?";
                    }
                }
            }
        }
    }
    return result;
}
var array = [];
for (let i60 = 0; i60 < 20; ++i60) {
    array.push(i60);
}
var limit = 20000;
var phases = 4;
var result = 0;
for (let i74 = 0; i74 < limit; ++i74) {
    var phase = ((i74 * phases) / limit) | 0;
    result += foo(i74 % (phase + 1), ((i74 % array.length) / 2) | 0, array.length - (((i74 % array.length) / 2) | 0), array);
}
if (result != 3072367) {
    throw "Bad result: " + result;
}
