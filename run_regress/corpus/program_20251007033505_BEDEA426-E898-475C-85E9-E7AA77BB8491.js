var values = [true,false,null,void 0,0,0,-0,"",-1,-1.25,1,1.25,-2147483648,2147483648,Infinity,-Infinity,NaN];
var expected = [[true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,true,false,false,false,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,true,false],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]];
function seq(a333, a334) {
    return a333 === a334;
}
var func = seq;
function seq_L0(a338) {
    return true === a338;
}
function seq_L1(a342) {
    return false === a342;
}
function seq_L2(a346) {
    return null === a346;
}
function seq_L3(a350) {
    return void 0 === a350;
}
function seq_L4(a355) {
    return 0 === a355;
}
function seq_L5(a359) {
    return 0 === a359;
}
function seq_L6(a363) {
    return -0 === a363;
}
function seq_L7(a368) {
    return "" === a368;
}
function seq_L8(a372) {
    return -1 === a372;
}
function seq_L9(a377) {
    return -1.25 === a377;
}
function seq_L10(a382) {
    return 1 === a382;
}
function seq_L11(a386) {
    return 1.25 === a386;
}
function seq_L12(a390) {
    return -2147483648 === a390;
}
function seq_L13(a395) {
    return 2147483648 === a395;
}
function seq_L14(a399) {
    return Infinity === a399;
}
function seq_L15(a402) {
    return -Infinity === a402;
}
function seq_L16(a406) {
    return NaN === a406;
}
var left_funcs = [seq_L0,seq_L1,seq_L2,seq_L3,seq_L4,seq_L5,seq_L6,seq_L7,seq_L8,seq_L9,seq_L10,seq_L11,seq_L12,seq_L13,seq_L14,seq_L15,seq_L16];
function seq_R0(a411) {
    return a411 === true;
}
function seq_R1(a415) {
    return a415 === false;
}
function seq_R2(a419) {
    return a419 === null;
}
function seq_R3(a423) {
    return a423 === void 0;
}
function seq_R4(a428) {
    return a428 === 0;
}
function seq_R5(a432) {
    return a432 === 0;
}
function seq_R6(a436) {
    return a436 === -0;
}
function seq_R7(a441) {
    return a441 === "";
}
function seq_R8(a445) {
    return a445 === -1;
}
function seq_R9(a450) {
    return a450 === -1.25;
}
function seq_R10(a455) {
    return a455 === 1;
}
function seq_R11(a459) {
    return a459 === 1.25;
}
function seq_R12(a463) {
    return a463 === -2147483648;
}
function seq_R13(a468) {
    return a468 === 2147483648;
}
function seq_R14(a472) {
    return a472 === Infinity;
}
function seq_R15(a475) {
    return a475 === -Infinity;
}
function seq_R16(a479) {
    return a479 === NaN;
}
var right_funcs = [seq_R0,seq_R1,seq_R2,seq_R3,seq_R4,seq_R5,seq_R6,seq_R7,seq_R8,seq_R9,seq_R10,seq_R11,seq_R12,seq_R13,seq_R14,seq_R15,seq_R16];
function matrix() {
    return [[true === true,true === false,true === null,true === void 0,true === 0,true === 0,true === -0,true === "",true === -1,true === -1.25,true === 1,true === 1.25,true === -2147483648,true === 2147483648,true === Infinity,true === -Infinity,true === NaN],[false === true,false === false,false === null,false === void 0,false === 0,false === 0,false === -0,false === "",false === -1,false === -1.25,false === 1,false === 1.25,false === -2147483648,false === 2147483648,false === Infinity,false === -Infinity,false === NaN],[null === true,null === false,null === null,null === void 0,null === 0,null === 0,null === -0,null === "",null === -1,null === -1.25,null === 1,null === 1.25,null === -2147483648,null === 2147483648,null === Infinity,null === -Infinity,null === NaN],[void 0 === true,void 0 === false,void 0 === null,void 0 === void 0,void 0 === 0,void 0 === 0,void 0 === -0,void 0 === "",void 0 === -1,void 0 === -1.25,void 0 === 1,void 0 === 1.25,void 0 === -2147483648,void 0 === 2147483648,void 0 === Infinity,void 0 === -Infinity,void 0 === NaN],[0 === true,0 === false,0 === null,0 === void 0,0 === 0,0 === 0,0 === -0,0 === "",0 === -1,0 === -1.25,0 === 1,0 === 1.25,0 === -2147483648,0 === 2147483648,0 === Infinity,0 === -Infinity,0 === NaN],[0 === true,0 === false,0 === null,0 === void 0,0 === 0,0 === 0,0 === -0,0 === "",0 === -1,0 === -1.25,0 === 1,0 === 1.25,0 === -2147483648,0 === 2147483648,0 === Infinity,0 === -Infinity,0 === NaN],[-0 === true,-0 === false,-0 === null,-0 === void 0,-0 === 0,-0 === 0,-0 === -0,-0 === "",-0 === -1,-0 === -1.25,-0 === 1,-0 === 1.25,-0 === -2147483648,-0 === 2147483648,-0 === Infinity,-0 === -Infinity,-0 === NaN],["" === true,"" === false,"" === null,"" === void 0,"" === 0,"" === 0,"" === -0,"" === "","" === -1,"" === -1.25,"" === 1,"" === 1.25,"" === -2147483648,"" === 2147483648,"" === Infinity,"" === -Infinity,"" === NaN],[-1 === true,-1 === false,-1 === null,-1 === void 0,-1 === 0,-1 === 0,-1 === -0,-1 === "",-1 === -1,-1 === -1.25,-1 === 1,-1 === 1.25,-1 === -2147483648,-1 === 2147483648,-1 === Infinity,-1 === -Infinity,-1 === NaN],[-1.25 === true,-1.25 === false,-1.25 === null,-1.25 === void 0,-1.25 === 0,-1.25 === 0,-1.25 === -0,-1.25 === "",-1.25 === -1,-1.25 === -1.25,-1.25 === 1,-1.25 === 1.25,-1.25 === -2147483648,-1.25 === 2147483648,-1.25 === Infinity,-1.25 === -Infinity,-1.25 === NaN],[1 === true,1 === false,1 === null,1 === void 0,1 === 0,1 === 0,1 === -0,1 === "",1 === -1,1 === -1.25,1 === 1,1 === 1.25,1 === -2147483648,1 === 2147483648,1 === Infinity,1 === -Infinity,1 === NaN],[1.25 === true,1.25 === false,1.25 === null,1.25 === void 0,1.25 === 0,1.25 === 0,1.25 === -0,1.25 === "",1.25 === -1,1.25 === -1.25,1.25 === 1,1.25 === 1.25,1.25 === -2147483648,1.25 === 2147483648,1.25 === Infinity,1.25 === -Infinity,1.25 === NaN],[-2147483648 === true,-2147483648 === false,-2147483648 === null,-2147483648 === void 0,-2147483648 === 0,-2147483648 === 0,-2147483648 === -0,-2147483648 === "",-2147483648 === -1,-2147483648 === -1.25,-2147483648 === 1,-2147483648 === 1.25,-2147483648 === -2147483648,-2147483648 === 2147483648,-2147483648 === Infinity,-2147483648 === -Infinity,-2147483648 === NaN],[2147483648 === true,2147483648 === false,2147483648 === null,2147483648 === void 0,2147483648 === 0,2147483648 === 0,2147483648 === -0,2147483648 === "",2147483648 === -1,2147483648 === -1.25,2147483648 === 1,2147483648 === 1.25,2147483648 === -2147483648,2147483648 === 2147483648,2147483648 === Infinity,2147483648 === -Infinity,2147483648 === NaN],[Infinity === true,Infinity === false,Infinity === null,Infinity === void 0,Infinity === 0,Infinity === 0,Infinity === -0,Infinity === "",Infinity === -1,Infinity === -1.25,Infinity === 1,Infinity === 1.25,Infinity === -2147483648,Infinity === 2147483648,Infinity === Infinity,Infinity === -Infinity,Infinity === NaN],[-Infinity === true,-Infinity === false,-Infinity === null,-Infinity === void 0,-Infinity === 0,-Infinity === 0,-Infinity === -0,-Infinity === "",-Infinity === -1,-Infinity === -1.25,-Infinity === 1,-Infinity === 1.25,-Infinity === -2147483648,-Infinity === 2147483648,-Infinity === Infinity,-Infinity === -Infinity,-Infinity === NaN],[NaN === true,NaN === false,NaN === null,NaN === void 0,NaN === 0,NaN === 0,NaN === -0,NaN === "",NaN === -1,NaN === -1.25,NaN === 1,NaN === 1.25,NaN === -2147483648,NaN === 2147483648,NaN === Infinity,NaN === -Infinity,NaN === NaN]];
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
