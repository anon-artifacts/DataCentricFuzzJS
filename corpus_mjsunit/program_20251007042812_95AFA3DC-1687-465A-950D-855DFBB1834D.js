const v1 = {};
const v4 = {
    get() {
        throw 3235839742;
    },
};
const v5 = new Proxy(v1, v4);
const foo = v5;
const v7 = {};
const v10 = {
    get() {
        throw 3735928559;
    },
};
const v11 = new Proxy(v7, v10);
const bar = v11;
const v13 = (a14) => {
    if (a14 !== 3235839742) {
        const v19 = new Error(`bad ${a14}!`);
        throw v19;
    }
};
const check = v13;
try {
    Math.acos(foo, bar);
} catch(e23) {
    check(e23);
}
try {
    Math.acosh(foo, bar);
} catch(e27) {
    check(e27);
}
try {
    Math.asin(foo, bar);
} catch(e31) {
    check(e31);
}
try {
    Math.asinh(foo, bar);
} catch(e35) {
    check(e35);
}
try {
    Math.atan(foo, bar);
} catch(e39) {
    check(e39);
}
try {
    Math.atanh(foo, bar);
} catch(e43) {
    check(e43);
}
try {
    Math.atan2(foo, bar);
} catch(e47) {
    check(e47);
}
try {
    Math.cbrt(foo, bar);
} catch(e51) {
    check(e51);
}
try {
    Math.ceil(foo, bar);
} catch(e55) {
    check(e55);
}
try {
    Math.clz32(foo, bar);
} catch(e59) {
    check(e59);
}
try {
    Math.cos(foo, bar);
} catch(e63) {
    check(e63);
}
try {
    Math.cosh(foo, bar);
} catch(e67) {
    check(e67);
}
try {
    Math.exp(foo, bar);
} catch(e71) {
    check(e71);
}
try {
    Math.expm1(foo, bar);
} catch(e75) {
    check(e75);
}
try {
    Math.floor(foo, bar);
} catch(e79) {
    check(e79);
}
try {
    Math.fround(foo, bar);
} catch(e83) {
    check(e83);
}
try {
    Math.hypot(foo, bar);
} catch(e87) {
    check(e87);
}
try {
    Math.imul(foo, bar);
} catch(e91) {
    check(e91);
}
try {
    Math.log(foo, bar);
} catch(e95) {
    check(e95);
}
try {
    Math.log1p(foo, bar);
} catch(e99) {
    check(e99);
}
try {
    Math.log10(foo, bar);
} catch(e103) {
    check(e103);
}
try {
    Math.log2(foo, bar);
} catch(e107) {
    check(e107);
}
try {
    Math.max(foo, bar);
} catch(e111) {
    check(e111);
}
try {
    Math.min(foo, bar);
} catch(e115) {
    check(e115);
}
try {
    Math.pow(foo, bar);
} catch(e119) {
    check(e119);
}
Math.random(foo, bar);
try {
    Math.round(foo, bar);
} catch(e124) {
    check(e124);
}
try {
    Math.sign(foo, bar);
} catch(e127) {
    check(e127);
}
try {
    Math.sin(foo, bar);
} catch(e130) {
    check(e130);
}
try {
    Math.sinh(foo, bar);
} catch(e133) {
    check(e133);
}
try {
    Math.sqrt(foo, bar);
} catch(e136) {
    check(e136);
}
try {
    Math.tan(foo, bar);
} catch(e139) {
    check(e139);
}
try {
    Math.tanh(foo, bar);
} catch(e142) {
    check(e142);
}
try {
    Math.trunc(foo, bar);
} catch(e145) {
    check(e145);
}
