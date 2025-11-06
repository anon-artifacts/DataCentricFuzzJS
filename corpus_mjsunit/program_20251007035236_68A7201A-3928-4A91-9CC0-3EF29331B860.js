var values = [true,false,null,void 0,0,0,-0,"",-1,-1.25,1,1.25,-2147483648,2147483648,Infinity,-Infinity,NaN];
var expected = [[false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[true,false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false],[true,true,true,false,true,true,true,true,false,false,true,true,false,true,true,false,false],[true,true,true,false,true,true,true,true,true,false,true,true,false,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,true,false,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,true,false,false],[true,true,true,false,true,true,true,true,true,true,true,true,false,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
function lt(a333, a334) {
    return a333 < a334;
}
var func = lt;
function lt_L0(a338) {
    return true < a338;
}
function lt_L1(a342) {
    return false < a342;
}
function lt_L2(a346) {
    return null < a346;
}
function lt_L3(a350) {
    return void 0 < a350;
}
function lt_L4(a355) {
    return 0 < a355;
}
function lt_L5(a359) {
    return 0 < a359;
}
function lt_L6(a363) {
    return -0 < a363;
}
function lt_L7(a368) {
    return "" < a368;
}
function lt_L8(a372) {
    return -1 < a372;
}
function lt_L9(a377) {
    return -1.25 < a377;
}
function lt_L10(a382) {
    return 1 < a382;
}
function lt_L11(a386) {
    return 1.25 < a386;
}
function lt_L12(a390) {
    return -2147483648 < a390;
}
function lt_L13(a395) {
    return 2147483648 < a395;
}
function lt_L14(a399) {
    return Infinity < a399;
}
function lt_L15(a402) {
    return -Infinity < a402;
}
function lt_L16(a406) {
    return NaN < a406;
}
var left_funcs = [lt_L0,lt_L1,lt_L2,lt_L3,lt_L4,lt_L5,lt_L6,lt_L7,lt_L8,lt_L9,lt_L10,lt_L11,lt_L12,lt_L13,lt_L14,lt_L15,lt_L16];
function lt_R0(a411) {
    return a411 < true;
}
function lt_R1(a415) {
    return a415 < false;
}
function lt_R2(a419) {
    return a419 < null;
}
function lt_R3(a423) {
    return a423 < void 0;
}
function lt_R4(a428) {
    return a428 < 0;
}
function lt_R5(a432) {
    return a432 < 0;
}
function lt_R6(a436) {
    return a436 < -0;
}
function lt_R7(a441) {
    return a441 < "";
}
function lt_R8(a445) {
    return a445 < -1;
}
function lt_R9(a450) {
    return a450 < -1.25;
}
function lt_R10(a455) {
    return a455 < 1;
}
function lt_R11(a459) {
    return a459 < 1.25;
}
function lt_R12(a463) {
    return a463 < -2147483648;
}
function lt_R13(a468) {
    return a468 < 2147483648;
}
function lt_R14(a472) {
    return a472 < Infinity;
}
function lt_R15(a475) {
    return a475 < -Infinity;
}
function lt_R16(a479) {
    return a479 < NaN;
}
var right_funcs = [lt_R0,lt_R1,lt_R2,lt_R3,lt_R4,lt_R5,lt_R6,lt_R7,lt_R8,lt_R9,lt_R10,lt_R11,lt_R12,lt_R13,lt_R14,lt_R15,lt_R16];
function matrix() {
    return [[true < true,true < false,true < null,true < void 0,true < 0,true < 0,true < -0,true < "",true < -1,true < -1.25,true < 1,true < 1.25,true < -2147483648,true < 2147483648,true < Infinity,true < -Infinity,true < NaN],[false < true,false < false,false < null,false < void 0,false < 0,false < 0,false < -0,false < "",false < -1,false < -1.25,false < 1,false < 1.25,false < -2147483648,false < 2147483648,false < Infinity,false < -Infinity,false < NaN],[null < true,null < false,null < null,null < void 0,null < 0,null < 0,null < -0,null < "",null < -1,null < -1.25,null < 1,null < 1.25,null < -2147483648,null < 2147483648,null < Infinity,null < -Infinity,null < NaN],[void 0 < true,void 0 < false,void 0 < null,void 0 < void 0,void 0 < 0,void 0 < 0,void 0 < -0,void 0 < "",void 0 < -1,void 0 < -1.25,void 0 < 1,void 0 < 1.25,void 0 < -2147483648,void 0 < 2147483648,void 0 < Infinity,void 0 < -Infinity,void 0 < NaN],[0 < true,0 < false,0 < null,0 < void 0,0 < 0,0 < 0,0 < -0,0 < "",0 < -1,0 < -1.25,0 < 1,0 < 1.25,0 < -2147483648,0 < 2147483648,0 < Infinity,0 < -Infinity,0 < NaN],[0 < true,0 < false,0 < null,0 < void 0,0 < 0,0 < 0,0 < -0,0 < "",0 < -1,0 < -1.25,0 < 1,0 < 1.25,0 < -2147483648,0 < 2147483648,0 < Infinity,0 < -Infinity,0 < NaN],[-0 < true,-0 < false,-0 < null,-0 < void 0,-0 < 0,-0 < 0,-0 < -0,-0 < "",-0 < -1,-0 < -1.25,-0 < 1,-0 < 1.25,-0 < -2147483648,-0 < 2147483648,-0 < Infinity,-0 < -Infinity,-0 < NaN],["" < true,"" < false,"" < null,"" < void 0,"" < 0,"" < 0,"" < -0,"" < "","" < -1,"" < -1.25,"" < 1,"" < 1.25,"" < -2147483648,"" < 2147483648,"" < Infinity,"" < -Infinity,"" < NaN],[-1 < true,-1 < false,-1 < null,-1 < void 0,-1 < 0,-1 < 0,-1 < -0,-1 < "",-1 < -1,-1 < -1.25,-1 < 1,-1 < 1.25,-1 < -2147483648,-1 < 2147483648,-1 < Infinity,-1 < -Infinity,-1 < NaN],[-1.25 < true,-1.25 < false,-1.25 < null,-1.25 < void 0,-1.25 < 0,-1.25 < 0,-1.25 < -0,-1.25 < "",-1.25 < -1,-1.25 < -1.25,-1.25 < 1,-1.25 < 1.25,-1.25 < -2147483648,-1.25 < 2147483648,-1.25 < Infinity,-1.25 < -Infinity,-1.25 < NaN],[1 < true,1 < false,1 < null,1 < void 0,1 < 0,1 < 0,1 < -0,1 < "",1 < -1,1 < -1.25,1 < 1,1 < 1.25,1 < -2147483648,1 < 2147483648,1 < Infinity,1 < -Infinity,1 < NaN],[1.25 < true,1.25 < false,1.25 < null,1.25 < void 0,1.25 < 0,1.25 < 0,1.25 < -0,1.25 < "",1.25 < -1,1.25 < -1.25,1.25 < 1,1.25 < 1.25,1.25 < -2147483648,1.25 < 2147483648,1.25 < Infinity,1.25 < -Infinity,1.25 < NaN],[-2147483648 < true,-2147483648 < false,-2147483648 < null,-2147483648 < void 0,-2147483648 < 0,-2147483648 < 0,-2147483648 < -0,-2147483648 < "",-2147483648 < -1,-2147483648 < -1.25,-2147483648 < 1,-2147483648 < 1.25,-2147483648 < -2147483648,-2147483648 < 2147483648,-2147483648 < Infinity,-2147483648 < -Infinity,-2147483648 < NaN],[2147483648 < true,2147483648 < false,2147483648 < null,2147483648 < void 0,2147483648 < 0,2147483648 < 0,2147483648 < -0,2147483648 < "",2147483648 < -1,2147483648 < -1.25,2147483648 < 1,2147483648 < 1.25,2147483648 < -2147483648,2147483648 < 2147483648,2147483648 < Infinity,2147483648 < -Infinity,2147483648 < NaN],[Infinity < true,Infinity < false,Infinity < null,Infinity < void 0,Infinity < 0,Infinity < 0,Infinity < -0,Infinity < "",Infinity < -1,Infinity < -1.25,Infinity < 1,Infinity < 1.25,Infinity < -2147483648,Infinity < 2147483648,Infinity < Infinity,Infinity < -Infinity,Infinity < NaN],[-Infinity < true,-Infinity < false,-Infinity < null,-Infinity < void 0,-Infinity < 0,-Infinity < 0,-Infinity < -0,-Infinity < "",-Infinity < -1,-Infinity < -1.25,-Infinity < 1,-Infinity < 1.25,-Infinity < -2147483648,-Infinity < 2147483648,-Infinity < Infinity,-Infinity < -Infinity,-Infinity < NaN],[NaN < true,NaN < false,NaN < null,NaN < void 0,NaN < 0,NaN < 0,NaN < -0,NaN < "",NaN < -1,NaN < -1.25,NaN < 1,NaN < 1.25,NaN < -2147483648,NaN < 2147483648,NaN < Infinity,NaN < -Infinity,NaN < NaN]];
}
function test() {
    for (let i1473 = 0; i1473 < values.length; i1473++) {
        for (let i1480 = 0; i1480 < values.length; i1480++) {
            var a = values[i1473];
            var b = values[i1480];
            var x = expected[i1473][i1480];
            func(a, b);
            left_funcs[i1473](b);
            right_funcs[i1480](a);
        }
    }
    var result = matrix();
    for (let i1499 = 0; i1499 < values.length; i1499++) {
        for (let i1506 = 0; i1506 < values.length; i1506++) {
            expected[i1499][i1506];
            result[i1499][i1506];
        }
    }
}
test();
test();
