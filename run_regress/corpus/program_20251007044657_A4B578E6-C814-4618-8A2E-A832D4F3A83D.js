let v2;
try { v2 = new Int32Array(1024); } catch (e) {}
var a = v2;
var v = [0,1,2,3,4,5,6,7,8,9];
function test_do_not_assert_on_non_int32(a17, a18) {
    var r = 0;
    var a1 = a18 + 1;
    var a2 = a18 + 2;
    var a3 = a18 + 3;
    var a4 = a18 + 4;
    if (a1 == 2) {
        r += a17?.[a1];
        r += a17?.[a4];
        r += a17?.[a2];
        r += a17?.[a3];
    }
    return r;
}
try { test_do_not_assert_on_non_int32(v, 1); } catch (e) {}
try { test_do_not_assert_on_non_int32(v, 1); } catch (e) {}
try { test_do_not_assert_on_non_int32(v, "a"); } catch (e) {}
try { test_do_not_assert_on_non_int32(v, "a"); } catch (e) {}
try { test_do_not_assert_on_non_int32(v, 0); } catch (e) {}
function test_base(a50, a51, a52) {
    a50[a51 + 1] = 1;
    a50[a51 + 4] = 2;
    a50[a51 + 3] = 3;
    a50[a51 + 2] = 4;
    const v66 = a51 + 4;
    a50[a51 + 4] = v66;
    if (a52) {
        a50[a51 + 1] = 1;
        a50[a51 + 2] = 2;
        a50[a51 + 2] = 3;
        a50[a51 + 2] = 4;
        const v82 = a51 + 4;
        a50[a51 + 4] = v82;
    } else {
        a50[a51 + 6] = 1;
        a50[a51 + 4] = 2;
        a50[a51 + 3] = 3;
        a50[a51 + 2] = 4;
        const v98 = a51 - 4;
        a50[a51 + 4] = v98;
    }
}
function check_test_base(a102, a103, a104) {
    if (a104) {
        a102?.[a103 + 1];
        a102?.[a103 + 2];
        a103 + 4;
        a102?.[a103 + 4];
    } else {
        a102?.[a103 + 6];
        a102?.[a103 + 3];
        a102?.[a103 + 2];
        a103 - 4;
        a102?.[a103 + 4];
    }
}
try { test_base(a, 1, true); } catch (e) {}
try { test_base(a, 2, true); } catch (e) {}
try { test_base(a, 1, false); } catch (e) {}
try { test_base(a, 2, false); } catch (e) {}
try { test_base(a, 3, true); } catch (e) {}
try { check_test_base(a, 3, true); } catch (e) {}
try { test_base(a, 3, false); } catch (e) {}
try { check_test_base(a, 3, false); } catch (e) {}
let v160;
try { v160 = new Int32Array(128); } catch (e) {}
var dictionary_map_array = v160;
try { test_base(dictionary_map_array, 5, true); } catch (e) {}
try { test_base(dictionary_map_array, 6, true); } catch (e) {}
try { test_base(dictionary_map_array, 5, false); } catch (e) {}
try { test_base(dictionary_map_array, 6, false); } catch (e) {}
const v175 = -2;
try { test_base(dictionary_map_array, v175, true); } catch (e) {}
try { test_base(); } catch (e) {}
try { test_base(a, 5, true); } catch (e) {}
try { test_base(a, 6, true); } catch (e) {}
try { test_base(a, 5, false); } catch (e) {}
try { test_base(a, 6, false); } catch (e) {}
try { test_base(a, 2048, true); } catch (e) {}
try { test_base(); } catch (e) {}
function test_minus(a196, a197) {
    a[a196 - 1] = 1;
    a[a196 - 2] = 2;
    a[a196 + 4] = 3;
    a[a196] = 4;
    const v209 = a196 + 4;
    a[a196 + 4] = v209;
    if (a197) {
        a[a196 - 4] = 1;
        a[a196 + 5] = 2;
        a[a196 + 3] = 3;
        a[a196 + 2] = 4;
        const v225 = a196 + 4;
        a[a196 + 4] = v225;
    } else {
        a[a196 + 6] = 1;
        a[a196 + 4] = 2;
        a[a196 + 3] = 3;
        a[a196 + 2] = 4;
        const v241 = a196 - 4;
        a[a196 + 4] = v241;
    }
}
function check_test_minus(a245, a246) {
    if (a246) {
        a?.[a245 + 5];
        a?.[a245 + 3];
        a?.[a245 + 2];
        a245 + 4;
        a?.[a245 + 4];
    } else {
        a?.[a245 + 6];
        a?.[a245 + 3];
        a?.[a245 + 2];
        a245 - 4;
        a?.[a245 + 4];
    }
}
try { test_minus(5, true); } catch (e) {}
try { test_minus(6, true); } catch (e) {}
try { test_minus(7, true); } catch (e) {}
try { check_test_minus(7, true); } catch (e) {}
try { test_minus(7, false); } catch (e) {}
try { check_test_minus(7, false); } catch (e) {}
let v301;
try { v301 = new Array(100); } catch (e) {}
var short_a = v301;
for (let i304 = 0; i304 < short_a?.length; i304++) {
    short_a[i304] = 0;
}
function short_test(a312, a313) {
    a312[a313 + 9] = 0;
    a312[a313 - 10] = 0;
}
try { short_test(short_a, 50); } catch (e) {}
try { short_test(short_a, 50); } catch (e) {}
short_a.length = 10;
try { short_test(short_a, 0); } catch (e) {}
try { test_base(); } catch (e) {}
var data_phi = [0,1,2,3,4,5,6,7,8];
function test_phi(a340, a341, a342) {
    var index;
    if (a342) {
        index = a341 + 1;
    } else {
        index = a341 + 2;
    }
    var result = a340?.[index];
    result += a340?.[index + 1];
    result += a340?.[index - 1];
    return result;
}
var result_phi = 0;
let v361;
try { v361 = test_phi(data_phi, 3, true); } catch (e) {}
result_phi = v361;
let v365;
try { v365 = test_phi(data_phi, 3, true); } catch (e) {}
result_phi = v365;
let v369;
try { v369 = test_phi(data_phi, 3, true); } catch (e) {}
result_phi = v369;
var data_composition_long = [0,1,2,3,4,5,6,7,8];
var data_composition_short = [0,1,2,3,4];
function test_composition(a390, a391, a392) {
    var base1 = a391 + 2;
    var base2 = (base1 + 8) >> 2;
    var base3 = (base2 + 6) >> 1;
    var base4 = (base3 + 8) >> 1;
    var result = 0;
    result += a390?.[a391];
    result += a390?.[base1];
    result += a390?.[base2];
    result += a390?.[base3];
    result += a390?.[base4];
    return result;
}
var result_composition = 0;
let v421;
try { v421 = test_composition(data_composition_long, 2); } catch (e) {}
result_composition = v421;
let v424;
try { v424 = test_composition(data_composition_long, 2); } catch (e) {}
result_composition = v424;
let v427;
try { v427 = test_composition(data_composition_short, 2); } catch (e) {}
result_composition = v427;
try { gc(); } catch (e) {}
