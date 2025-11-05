function constantLookup(a1, a2) {
    for (const v3 in a2) {
        if (a2[v3] == a1) {
            return v3;
        }
    }
    if (a2.Accessor) {
        var flags = [];
        if (a1 & a2.None) {
            flags.push("None");
        }
        if ((a1 & a2.ToPrimitive) != a2.None) {
            flags.push("ToPrimitive");
        }
        if ((a1 & a2.Accessor) != a2.None) {
            flags.push("Accessor");
        }
        if ((a1 & a2.External) != a2.None) {
            flags.push("External");
        }
        if ((a1 & a2.Exception) != a2.None) {
            flags.push("Exception");
        }
        if (a1 == a2.All) {
            flags.push("All");
        }
        if (a1 & a2.Dispose) {
            flags.push("Dispose");
        }
        return flags.join(" | ");
    }
    if (a2.hasOwnProperty("LikelyBit")) {
        var highestTypeBitIndex = a2.VALUE_TYPE_COMMON_BIT_COUNT - 1;
        if (a1 & a2.ObjectBit) {
            a1 &= ~(((1 << a2.VALUE_TYPE_OBJECT_BIT_COUNT) - 1) ^ ((1 << a2.VALUE_TYPE_COMMON_BIT_COUNT) - 1));
        } else {
            highestTypeBitIndex += a2.VALUE_TYPE_NONOBJECT_BIT_COUNT;
        }
        for (let i68 = highestTypeBitIndex; i68 >= 0; --i68) {
            if (a1 & (1 << i68)) {
                var generalizedVal = a1 & (~((1 << i68) - 1) | a2.LikelyBit);
                for (const v86 in a2) {
                    if (a2[v86] == generalizedVal) {
                        return v86;
                    }
                }
                break;
            }
        }
    }
    return "ERROR: constant not found";
}
function dumpProfileData(a91, a92) {
    print("Profile data for " + a92);
}
function I1(a98) {
    return a98;
}
function I2(a100) {
    return a100;
}
function I3(a102) {
    return a102;
}
function I4(a104) {
    return a104;
}
function test1() {
    const v113 = (I1("test") + I2(123)) + I3(0.5);
    var sum = v113 + I4({});
}
test1();
dumpProfileData(test1, "test1");
function test2(a122, a123, a124, a125, a126, a127) {
    var sum = 0;
    for (let i131 = 0; i131 < a122.length; ++i131) {
        sum += a122[i131];
    }
    for (let i139 = 0; i139 < a123.length; ++i139) {
        sum += a123[i139];
    }
    for (let i147 = 0; i147 < a124.length; ++i147) {
        sum += a124[i147];
    }
    for (let i155 = 0; i155 < a125.length; ++i155) {
        sum += a125[i155];
    }
    for (let i163 = 0; i163 < a126.length; ++i163) {
        sum += a126[i163];
    }
    for (let i171 = 0; i171 < a127.length; ++i171) {
        sum += a127[i171];
    }
}
const v183 = [1,2,3,4,5];
const v187 = [-2147483648,2147483647];
const v190 = new Uint8Array(10);
const v193 = new Float64Array(10);
const v196 = new Int16Array(10);
test2(v183, v187, v190, v193, v196, [0.3,0.4,0.5,0.6,0.7]);
dumpProfileData(test2, "test2");
const v211 = [1,2,3.5,4.2,5];
const v214 = [0,2147483647];
const v216 = new Uint8Array(10);
const v219 = new Int16Array(10);
test2(v211, v214, v216, "a string", v219, [0.3,0.4,0.5,0.6,0.7]);
dumpProfileData(test2, "test2 - second call");
function test3(a230, a231, a232, a233) {
    var sum = 0;
    for (let i237 = 0; i237 < a230.p.length; ++i237) {
        sum += a230.p[i237];
    }
    for (let i247 = 0; i247 < a231.p.length; ++i247) {
        sum += a231.p[i247];
    }
    if (typeof a232 === "blah") {
        sum += a232.p[i];
    }
}
const v264 = new Uint32Array(10);
const v265 = { p: v264 };
const v268 = [null,,,,];
test3(v265, { p: v268 }, 0);
dumpProfileData(test3, "test3");
function test4(a275, a276, a277) {
    var sum = (a275 + a276) + a277;
}
dumpProfileData(test4, "test4 - before call");
test4("a string", 5.3, 3);
dumpProfileData(test4, "test4");
test4("a string", 3, 3);
dumpProfileData(test4, "test4 - second call");
function test5(a296, a297) {
    function f298() {
        return 7;
    }
    var x1 = { valueOf: f298 };
    const v304 = {
        get prop() {
            return 8;
        },
    };
    var x2 = v304;
    var sum = 0;
    for (let i309 = 0; i309 < 5; ++i309) {
    }
    for (let i316 = 0; i316 < 5; ++i316) {
        sum += x1;
    }
    for (let i323 = 0; i323 < 5; ++i323) {
        sum += x2.prop;
    }
    for (let i331 = 0; i331 < 5; ++i331) {
        sum += x1 + x2.prop;
    }
}
test5();
dumpProfileData(test5, "test5");
