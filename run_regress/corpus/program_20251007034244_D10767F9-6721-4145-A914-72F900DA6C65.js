function test_helper_for_ics(a1, a2, a3, a4, a5) {
    a1(0.5, 0.5);
    a1(0.5, undefined);
    a1(undefined, 0.5);
    a1(undefined, undefined);
}
function test_helper_for_crankshaft(a19, a20, a21, a22, a23) {
    a19(0.5, 0.5);
    a19(0.5, 0.5);
    a19(0.5, undefined);
    a19(undefined, 0.5);
    a19(undefined, undefined);
}
function less_1(a40, a41) {
    return a40 < a41;
}
test_helper_for_ics(less_1, false, false, false, false);
function less_2(a49, a50) {
    return a49 < a50;
}
test_helper_for_crankshaft(less_1, false, false, false, false);
function greater_1(a58, a59) {
    return a58 > a59;
}
test_helper_for_ics(greater_1, false, false, false, false);
function greater_2(a67, a68) {
    return a67 > a68;
}
test_helper_for_crankshaft(greater_1, false, false, false, false);
function less_equal_1(a76, a77) {
    return a76 <= a77;
}
test_helper_for_ics(less_equal_1, true, false, false, false);
function less_equal_2(a85, a86) {
    return a85 <= a86;
}
test_helper_for_crankshaft(less_equal_1, true, false, false, false);
function greater_equal_1(a94, a95) {
    return a94 >= a95;
}
test_helper_for_ics(greater_equal_1, true, false, false, false);
function greater_equal_2(a103, a104) {
    return a103 >= a104;
}
test_helper_for_crankshaft(greater_equal_1, true, false, false, false);
function equal_1(a112, a113) {
    return a112 == a113;
}
test_helper_for_ics(equal_1, true, false, false, true);
function equal_2(a121, a122) {
    return a121 == a122;
}
test_helper_for_crankshaft(equal_2, true, false, false, true);
function strict_equal_1(a130, a131) {
    return a130 === a131;
}
test_helper_for_ics(strict_equal_1, true, false, false, true);
function strict_equal_2(a139, a140) {
    return a139 === a140;
}
test_helper_for_crankshaft(strict_equal_2, true, false, false, true);
function not_equal_1(a148, a149) {
    return a148 != a149;
}
test_helper_for_ics(not_equal_1, false, true, true, false);
function not_equal_2(a157, a158) {
    return a157 != a158;
}
test_helper_for_crankshaft(not_equal_2, false, true, true, false);
