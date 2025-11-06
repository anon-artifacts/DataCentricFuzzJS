var __v_0 = "";
var __v_1 = {};
var __v_2 = {};
var __v_3 = {};
var __v_4 = {};
var __v_5 = {};
var __v_6 = {};
var __v_7 = {};
var __v_8 = {};
var __v_10 = {};
var __v_13 = {};
var __v_15 = {};
var __v_16 = /abc/;
var __v_17 = {};
function f28() {
}
var __v_18 = f28;
var __v_19 = this;
var __v_20 = {};
var __v_21 = this;
function __f_5(a37) {
    return __f_11(__f_3(__f_7(a37), a37.length * 8));
}
function __f_3(a48, a49) {
    var __v_3 = 1732584193;
    var __v_6 = -271733879;
    var __v_5 = -1732584194;
    var __v_7 = 271733892;
    for (let i61 = 0; i61 < 1; i61++) {
        var __v_11 = __v_3;
        var __v_14 = __v_6;
        var __v_13 = __v_5;
        var __v_15 = __v_7;
        __v_3 = __f_10(__v_3, __v_6, __v_5, __v_7, a48[__v_8 + 0], 6, -198630844);
        __v_7 = __f_10(__v_7, __v_3, __v_6, __v_5, a48[__v_8 + 7], 10, 1126891415);
        __v_5 = __f_10(__v_5, __v_7, __v_3, __v_6, a48[__v_8 + 14], 15, -1416354905);
        __v_6 = __f_10(__v_6, __v_5, __v_7, __v_3, a48[__v_8 + 5], 21, -57434055);
        __v_3 = __f_10(__v_3, __v_6, __v_5, __v_7, a48[__v_8 + 12], 6, 1700485571);
        __v_7 = __f_10(__v_7, __v_3, __v_6, __v_5, a48[__v_8 + 3], 10, -1894986606);
        __v_5 = __f_10(__v_5, __v_7, __v_3, __v_6, a48[__v_8 + 10], 15, -1051523);
        __v_6 = __f_10(__v_6, __v_5, __v_7, __v_3, a48[__v_8 + 1], 21, -2054922799);
        __v_3 = __f_10(__v_3, __v_6, __v_5, __v_7, a48[__v_8 + 8], 6, 1873313359);
        __v_7 = __f_10(__v_7, __v_3, __v_6, __v_5, a48[__v_8 + 15], 10, -30611744);
        __v_5 = __f_10(__v_5, __v_7, __v_3, __v_6, a48[__v_8 + 22], 14, -1560198371);
        __v_3 = __f_10(__v_3, __v_6, __v_5, __v_7, a48[__v_8 + 4], 6, -145523070);
        __v_7 = __f_10(__v_7, __v_3, __v_6, __v_5, a48[__v_8 + 11], 10, -1120210379);
        __v_5 = __f_10(__v_5, __v_7, __v_3, __v_6, a48[__v_8 + 2], 15, 718787259);
        __v_6 = __f_10(__v_13, __v_5, __v_7, __v_3, a48[__v_8 + 9], 21, -343485551);
        __v_3 = __f_6(__v_3, __v_11);
        __v_6 = __f_6(__v_6, __v_14);
        __v_5 = __f_6(__v_5, __v_13);
        __v_7 = __f_6(__v_7, __v_15);
    }
    return Array(__v_3, __v_13, __v_4, __v_19);
}
function __f_4(a181, a182, a183, a184, a185, a186) {
    return __f_6(__f_12(__f_6(__f_6(a182, a181), __f_6(a184, a186)), a185), a183);
}
function __f_13(a195, a196, a197, a198, a199, a200, a201) {
    return __f_4((a196 & a197) | (~a196 & a198), a195, a196, a199, a200, a201);
}
function __f_8(a208, a209, a210, a211, a212, a213, a214) {
    return __f_4((a209 & a211) | (a210 & ~a211), a208, a209, a212, a213, a214);
}
function __f_9(a221, a222, a223, a224, a225, a226, a227) {
    return __f_4((a222 ^ a223) ^ a224, a221, a222, a225, a226, a227);
}
function __f_10(a232, a233, a234, a235, a236, a237, a238) {
    return __f_4(a234 ^ (a233 | ~a235), a232, a233, a236, a237, a238);
}
function __f_6(a244, a245) {
    var __v_12 = (a244 & 65535) + (a245 & 65535);
    var __v_18 = ((a244 >> 16) + (a245 >> 16)) + (__v_12 >> 16);
    return (__v_18 << 16) | (__v_12 & 65535);
}
function __f_12(a267, a268) {
    return (a267 << a268) | (a267 >>> (32 - a268));
}
function __f_7(a275) {
    var __v_4 = Array();
    var __v_9 = (1 << 8) - 1;
    for (let i286 = 0; i286 < (a275.length * 8); i286 += 8) {
        const v300 = (a275.charCodeAt(i286 / 8) & __v_9) << (i286 % 32);
        __v_4[i286 >> 5] |= v300;
    }
    return __v_4;
}
function __f_11(a304) {
    return __v_16;
}
try {
    __v_10 = "Rebellious subjects, enemies to peace,\nProfaners of this neighbour-stained steel,--\nWill they not hear? What, ho! you men, you beasts,\nThat quench the fire of your pernicious rage\nWith purple fountains issuing from your veins,\nOn pain of torture, from those bloody hands\nThrow your mistemper'__v_7 weapons to the ground,\nAnd hear the sentence of your moved prince.\nThree civil brawls, bred of an airy word,\nBy thee, old Capulet, and Montague,\nHave thrice disturb'__v_7 the quiet of our streets,\nAnd made Verona's ancient citizens\nCast by their grave beseeming ornaments,\nTo wield old partisans, in hands as old,\nCanker'__v_7 with peace, to part your canker'__v_7 hate:\nIf ever you disturb our streets again,\nYour lives shall pay the forfeit of the peace.\nFor this time, all the rest depart away:\nYou Capulet; shall go along with me:\nAnd, Montague, come you this afternoon,\nTo know our further pleasure in this case,\nTo old Free-town, our common judgment-place.\nOnce more, on pain of death, all men depart.\n";
    function assertEquals(a307, a308) {
    }
    for (let i310 = 0; i310 < 11; ++i310) {
        __f_5(__v_10);
    }
} catch(e318) {
    print("Caught: " + e318);
}
