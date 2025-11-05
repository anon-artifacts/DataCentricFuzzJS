function warmup(a1, a2) {
    for (let i4 = 0; i4 < a2.length; i4++) {
        input = a2[i4];
        input_lhs = input[0];
        input_rhs = input[1];
        output = input[2];
        for (let i20 = 0; i20 < 30; i20++) {
            var str = "";
            var y = a1(input_lhs, input_rhs);
            if (y != output) {
                str = ((((((((("Computed: " + y) + ", expected: ") + output) + " ( ") + a1) + " lhs: ") + input_lhs) + " rhs: ") + input_rhs) + ")";
            }
        }
    }
}
const v51 = (a52, a53) => {
    return a52 > a53;
};
var Int32Int32Fun_GT1 = v51;
warmup(Int32Int32Fun_GT1, [[1,2,false],[1,1,false],[3,4,false],[4294967295,2,true],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10,,false]]);
const v88 = (a89, a90) => {
    return a89 >= a90;
};
var Int32Int32Fun_GTE1 = v88;
warmup(Int32Int32Fun_GTE1, [[1,2,false],[1,1,true],[3,4,false],[4294967295,2,true],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10,,false]]);
const v124 = (a125, a126) => {
    return a125 < a126;
};
var Int32Int32Fun_LT1 = v124;
warmup(Int32Int32Fun_LT1, [[1,2,true],[1,1,false],[3,4,true],[4294967295,2,false],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10,,false]]);
const v160 = (a161, a162) => {
    return a161 <= a162;
};
var Int32Int32Fun_LTE1 = v160;
warmup(Int32Int32Fun_LTE1, [[1,2,true],[1,1,true],[3,4,true],[4294967295,2,false],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10,,false]]);
const v196 = (a197, a198) => {
    return a197 == a198;
};
var Int32Int32Fun_EQ1 = v196;
const v204 = [1,2,false];
const v208 = [1,1,true];
const v212 = [3,4,false];
const v216 = [4294967295,2,false];
const v219 = [NaN,2,false];
const v223 = [-1000,NaN,false];
const v227 = [,null,true];
const v231 = ["0",0,true];
const v234 = new String("0");
warmup(Int32Int32Fun_EQ1, [v204,v208,v212,v216,v219,v223,v227,v231,[v234,0,true],[10,,false]]);
const v244 = (a245, a246) => {
    return a245 == a246;
};
var Int32Int32Fun_EQ2 = v244;
warmup(Int32Int32Fun_EQ2, [[1,NaN,false],[1,,false],[1,null,false]]);
const v262 = (a263, a264) => {
    return a263 == a264;
};
var Int32Int32Fun_EQ3 = v262;
const v270 = [{ a: 1 },NaN,false];
const v275 = [{ a: 1 },,false];
warmup(Int32Int32Fun_EQ3, [v270,v275,[{ a: 1 },null,false]]);
const v283 = (a284, a285) => {
    return a284 == a285;
};
var Int32Int32Fun_EQ4 = v283;
warmup(Int32Int32Fun_EQ4, [[,,true],[null,null,true],[null,,true],[,null,true]]);
const v306 = (a307, a308) => {
    return a307 != a308;
};
var Int32Int32Fun_NEQ1 = v306;
const v314 = [1,2,true];
const v318 = [1,1,false];
const v322 = [3,4,true];
const v326 = [4294967295,2,true];
const v329 = [NaN,2,true];
const v333 = [-1000,NaN,true];
const v337 = [,null,false];
const v341 = ["0",0,false];
const v343 = new String("0");
warmup(Int32Int32Fun_NEQ1, [v314,v318,v322,v326,v329,v333,v337,v341,[v343,0,false],[10,,true]]);
const v353 = (a354, a355) => {
    return a354 != a355;
};
var Int32Int32Fun_NEQ2 = v353;
warmup(Int32Int32Fun_NEQ2, [[1,NaN,true],[1,,true],[1,null,true]]);
const v371 = (a372, a373) => {
    return a372 != a373;
};
var Int32Int32Fun_NEQ3 = v371;
const v379 = [{ a: 1 },NaN,true];
const v384 = [{ a: 1 },,true];
warmup(Int32Int32Fun_NEQ3, [v379,v384,[{ a: 1 },null,true]]);
const v392 = (a393, a394) => {
    return a393 != a394;
};
var Int32Int32Fun_NEQ4 = v392;
warmup(Int32Int32Fun_NEQ4, [[,,false],[null,null,false],[null,,false],[,null,false]]);
const v415 = (a416, a417) => {
    return a416 === a417;
};
var Int32Int32Fun_SEQ1 = v415;
const v423 = [1,2,false];
const v427 = [1,1,true];
const v431 = [3,4,false];
const v435 = [4294967295,2,false];
const v438 = [NaN,2,false];
const v442 = [-1000,NaN,false];
const v446 = [,null,false];
const v450 = ["0",0,false];
const v452 = new String("0");
warmup(Int32Int32Fun_SEQ1, [v423,v427,v431,v435,v438,v442,v446,v450,[v452,0,false],[10,,false]]);
const v462 = (a463, a464) => {
    return a463 === a464;
};
var Int32Int32Fun_SEQ2 = v462;
warmup(Int32Int32Fun_SEQ2, [[1,NaN,false],[1,,false],[1,null,false]]);
const v480 = (a481, a482) => {
    return a481 === a482;
};
var Int32Int32Fun_SEQ3 = v480;
const v488 = [{ a: 1 },NaN,false];
const v493 = [{ a: 1 },,false];
warmup(Int32Int32Fun_SEQ3, [v488,v493,[{ a: 1 },null,false]]);
const v501 = (a502, a503) => {
    return a502 === a503;
};
var Int32Int32Fun_SEQ4 = v501;
warmup(Int32Int32Fun_SEQ4, [[,,true],[null,null,true],[null,,false],[,null,false]]);
const v524 = (a525, a526) => {
    return a525 === a526;
};
var Int32Int32Fun_SEQ5 = v524;
warmup(Int32Int32Fun_SEQ5, [[1,true,false],[1,false,false],[false,1,false],[true,0,false],[true,true,true]]);
const v551 = (a552, a553) => {
    return a552 !== a553;
};
var Int32Int32Fun_SNEQ1 = v551;
const v559 = [1,2,true];
const v563 = [1,1,false];
const v567 = [3,4,true];
const v571 = [4294967295,2,true];
const v574 = [NaN,2,true];
const v578 = [-1000,NaN,true];
const v582 = [,null,true];
const v586 = ["0",0,true];
const v588 = new String("0");
warmup(Int32Int32Fun_SNEQ1, [v559,v563,v567,v571,v574,v578,v582,v586,[v588,0,true],[10,,true]]);
const v598 = (a599, a600) => {
    return a599 !== a600;
};
var Int32Int32Fun_SNEQ2 = v598;
warmup(Int32Int32Fun_SNEQ2, [[1,NaN,true],[1,,true],[1,null,true]]);
const v616 = (a617, a618) => {
    return a617 !== a618;
};
var Int32Int32Fun_SNEQ3 = v616;
const v624 = [{ a: 1 },NaN,true];
const v629 = [{ a: 1 },,true];
warmup(Int32Int32Fun_SNEQ3, [v624,v629,[{ a: 1 },null,true]]);
const v637 = (a638, a639) => {
    return a638 !== a639;
};
var Int32Int32Fun_SNEQ4 = v637;
warmup(Int32Int32Fun_SNEQ4, [[,,false],[null,null,false],[null,,true],[,null,true]]);
const v660 = (a661, a662) => {
    return a661 !== a662;
};
var Int32Int32Fun_SNEQ5 = v660;
warmup(Int32Int32Fun_SNEQ5, [[1,true,true],[1,false,true],[false,1,true],[true,0,true]]);
const v683 = (a684, a685) => {
    return a684 > a685;
};
var NumberNumberFun_GT1 = v683;
warmup(NumberNumberFun_GT1, [[1,2,false],[1.3,2,false],[1,2.6,false],[1.2,2.2,false],[1,1,false],[3,4,false],[4294967295,2,true],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10.2,,false]]);
const v731 = (a732, a733) => {
    return a732 >= a733;
};
var NumberNumberFun_GTE1 = v731;
warmup(NumberNumberFun_GTE1, [[1,2,false],[1.3,2,false],[1,2.6,false],[1.2,2.2,false],[1,1,true],[3,4,false],[4294967295,2,true],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10.2,,false]]);
const v779 = (a780, a781) => {
    return a780 < a781;
};
var NumberNumberFun_LT1 = v779;
warmup(NumberNumberFun_LT1, [[1,2,true],[1.3,2,true],[1,2.6,true],[1.2,2.2,true],[1,1,false],[3,4,true],[4294967295,2,false],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false,[10.2,,false]]]);
const v827 = (a828, a829) => {
    return a828 <= a829;
};
var NumberNumberFun_LTE1 = v827;
warmup(NumberNumberFun_LTE1, [[1,2,true],[1.3,2,true],[1,2.6,true],[1.2,2.2,true],[1,1,true],[3,4,true],[4294967295,2,false],[NaN,2,false],[-1000,NaN,false],[NaN,NaN,false],[10.2,,false]]);
const v875 = (a876, a877) => {
    return a876 == a877;
};
var NumberNumberFun_EQ1 = v875;
const v883 = [1,2,false];
const v887 = [1.3,2,false];
const v891 = [1,2.6,false];
const v895 = [1.2,2.2,false];
const v899 = [1,1,true];
const v903 = [3,4,false];
const v907 = [4294967295,2,false];
const v910 = [NaN,2,false];
const v914 = [-1000,NaN,false];
const v918 = [,null,true];
const v922 = ["0",0,true];
const v924 = new String("0");
warmup(NumberNumberFun_EQ1, [v883,v887,v891,v895,v899,v903,v907,v910,v914,v918,v922,[v924,0,true],[10.2,,false]]);
const v934 = (a935, a936) => {
    return a935 != a936;
};
var NumberNumberFun_NEQ1 = v934;
const v942 = [1,2,true];
const v946 = [1.3,2,true];
const v950 = [1,2.6,true];
const v954 = [1.2,2.2,true];
const v958 = [1,1,false];
const v962 = [3,4,true];
const v966 = [4294967295,2,true];
const v969 = [NaN,2,true];
const v973 = [-1000,NaN,true];
const v977 = [,null,false];
const v981 = ["0",0,false];
const v983 = new String("0");
warmup(NumberNumberFun_NEQ1, [v942,v946,v950,v954,v958,v962,v966,v969,v973,v977,v981,[v983,0,false],[10.2,,true]]);
const v993 = (a994, a995) => {
    return a994 === a995;
};
var NumberNumberFun_SEQ1 = v993;
const v1001 = [1,2,false];
const v1005 = [1.3,2,false];
const v1009 = [1,2.6,false];
const v1013 = [1.2,2.2,false];
const v1017 = [1,1,true];
const v1021 = [3,4,false];
const v1025 = [4294967295,2,false];
const v1028 = [NaN,2,false];
const v1032 = [-1000,NaN,false];
const v1036 = [,null,false];
const v1040 = ["0",0,false];
const v1042 = new String("0");
warmup(NumberNumberFun_SEQ1, [v1001,v1005,v1009,v1013,v1017,v1021,v1025,v1028,v1032,v1036,v1040,[v1042,0,false],[10.2,,false]]);
const v1052 = (a1053, a1054) => {
    return a1053 !== a1054;
};
var NumberNumberFun_SNEQ1 = v1052;
const v1060 = [1,2,true];
const v1064 = [1.3,2,true];
const v1068 = [1,2.6,true];
const v1072 = [1.2,2.2,true];
const v1076 = [1,1,false];
const v1080 = [3,4,true];
const v1084 = [4294967295,2,true];
const v1087 = [NaN,2,true];
const v1091 = [-1000,NaN,true];
const v1095 = [,null,true];
const v1099 = ["0",0,true];
const v1101 = new String("0");
warmup(NumberNumberFun_SNEQ1, [v1060,v1064,v1068,v1072,v1076,v1080,v1084,v1087,v1091,v1095,v1099,[v1101,0,true],[10.2,,true]]);
const v1111 = (a1112, a1113) => {
    return a1112 > a1113;
};
var BooleanFun_GT1 = v1111;
warmup(BooleanFun_GT1, [[1,2,false],[true,2,false],[1,1,false],[true,true,false],[3,4,false]]);
const v1138 = (a1139, a1140) => {
    return a1139 >= a1140;
};
var BooleanFun_GTE1 = v1138;
warmup(BooleanFun_GTE1, [[1,2,false],[true,2,false],[1,1,true],[true,true,true],[3,4,false]]);
const v1165 = (a1166, a1167) => {
    return a1166 < a1167;
};
var BooleanFun_LT1 = v1165;
warmup(BooleanFun_LT1, [[1,2,true],[true,2,true],[1,1,false],[true,true,false],[3,4,true]]);
const v1192 = (a1193, a1194) => {
    return a1193 <= a1194;
};
var BooleanFun_LTE1 = v1192;
warmup(BooleanFun_LTE1, [[1,2,true],[true,2,true],[1,1,true],[true,true,true],[3,4,true]]);
const v1219 = (a1220, a1221) => {
    return a1220 == a1221;
};
var BooleanFun_EQ1 = v1219;
const v1227 = [1,2,false];
const v1231 = [true,2,false];
const v1235 = [1,1,true];
const v1239 = [true,true,true];
const v1243 = [3,4,false];
const v1247 = ["0",0,true];
const v1249 = new String("0");
warmup(BooleanFun_EQ1, [v1227,v1231,v1235,v1239,v1243,v1247,[v1249,0,true],[10,,false]]);
const v1259 = (a1260, a1261) => {
    return a1260 != a1261;
};
var BooleanFun_NEQ1 = v1259;
const v1267 = [1,2,true];
const v1271 = [true,2,true];
const v1275 = [1,1,false];
const v1279 = [true,true,false];
const v1283 = [3,4,true];
const v1287 = ["0",0,false];
const v1289 = new String("0");
warmup(BooleanFun_NEQ1, [v1267,v1271,v1275,v1279,v1283,v1287,[v1289,0,false],[10,,true]]);
const v1299 = (a1300, a1301) => {
    return a1300 === a1301;
};
var BooleanFun_SEQ1 = v1299;
warmup(BooleanFun_SEQ1, [[1,2,false],[true,2,false],[1,1,true],[true,true,true],[3,4,false]]);
const v1326 = (a1327, a1328) => {
    return a1327 !== a1328;
};
var BooleanFun_SNEQ1 = v1326;
warmup(BooleanFun_SNEQ1, [[1,2,true],[true,2,true],[1,1,false],[true,true,false],[3,4,true]]);
const v1353 = (a1354, a1355) => {
    return a1354 == a1355;
};
var UndefNull_EQ1 = v1353;
const v1361 = [,null,true];
const v1365 = [,,true];
const v1369 = [null,,true];
const v1373 = [null,null,true];
const v1378 = [{ a: 10 },,false];
warmup(UndefNull_EQ1, [v1361,v1365,v1369,v1373,v1378,[{ a: 10 },null,false]]);
const v1386 = (a1387, a1388) => {
    return a1387 != a1388;
};
var UndefNull_NEQ1 = v1386;
const v1394 = [,null,false];
const v1398 = [,,false];
const v1402 = [null,,false];
const v1406 = [null,null,false];
const v1411 = [{ a: 10 },,true];
warmup(UndefNull_NEQ1, [v1394,v1398,v1402,v1406,v1411,[{ a: 10 },null,true]]);
const v1419 = (a1420, a1421) => {
    return a1420 === a1421;
};
var UndefNull_SEQ1 = v1419;
const v1427 = [,null,false];
const v1431 = [,,true];
const v1435 = [null,,false];
const v1439 = [null,null,true];
const v1444 = [{ a: 10 },,false];
warmup(UndefNull_SEQ1, [v1427,v1431,v1435,v1439,v1444,[{ a: 10 },null,false]]);
const v1452 = (a1453, a1454) => {
    return a1453 !== a1454;
};
var UndefNull_SNEQ1 = v1452;
const v1460 = [,null,true];
const v1464 = [,,false];
const v1468 = [null,,true];
const v1472 = [null,null,false];
const v1477 = [{ a: 10 },,true];
warmup(UndefNull_SNEQ1, [v1460,v1464,v1468,v1472,v1477,[{ a: 10 },null,true]]);
function f1485(a1486, a1487) {
    return a1486 === a1487;
}
var typeDifference = f1485;
const v1493 = [1,1,true];
const v1497 = [3,3,true];
const v1500 = [3,typeDifference,false];
warmup(typeDifference, [v1493,v1497,v1500,[typeDifference,{},false],[3.2,1,false],[0,-0,true]]);
const v1515 = (a1516, a1517) => {
    return a1516 > a1517;
};
var String_Number_GT1 = v1515;
warmup(String_Number_GT1, [["1.4",2,false],[1,"1",false],["3",4,false],[-1024,"-1023",false],[1.3,"1.2",true]]);
const v1543 = (a1544, a1545) => {
    return a1544 >= a1545;
};
var String_Number_GTE1 = v1543;
warmup(String_Number_GTE1, [["1.4",2,false],[1,"1",true],[3,"4",false],[-1024,"-1023",false],[1.2,"1.2",true]]);
const v1571 = (a1572, a1573) => {
    return a1572 < a1573;
};
var String_Number_LT1 = v1571;
warmup(String_Number_LT1, [["1.4",2,true],["1",1,false],[3,"4",true],[-1024,"-1023",true],[1.2,"1.2",false]]);
const v1599 = (a1600, a1601) => {
    return a1600 <= a1601;
};
var String_Number_LTE1 = v1599;
warmup(String_Number_LTE1, [["1.4",2,true],["1",1,true],[3,"4",true],[-1024,"-1023",true],[1.2,"1.2",true]]);
const v1627 = (a1628, a1629) => {
    return a1628 == a1629;
};
var String_Number_EQ1 = v1627;
warmup(String_Number_EQ1, [["1.4",2,false],["1",1,true],[3,"4",false],[-1024,"-1023",false],[1.2,"1.2",true]]);
const v1655 = (a1656, a1657) => {
    return a1656 != a1657;
};
var String_Number_NEQ1 = v1655;
warmup(String_Number_NEQ1, [["1.4",2,true],["1",1,false],[3,"4",true],[-1024,"-1023",true],[1.2,"1.2",false]]);
const v1683 = (a1684, a1685) => {
    return a1684 === a1685;
};
var String_Number_SEQ1 = v1683;
warmup(String_Number_SEQ1, [["1.4",2,false],["1",1,false],[3,"4",false],[-1024,"-1023",false],[1.2,"1.2",false]]);
const v1711 = (a1712, a1713) => {
    return a1712 !== a1713;
};
var String_Number_SNEQ1 = v1711;
warmup(String_Number_SNEQ1, [["1.4",2,true],["1",1,true],[3,"4",true],[-1024,"-1023",true],[1.2,"1.2",true]]);
