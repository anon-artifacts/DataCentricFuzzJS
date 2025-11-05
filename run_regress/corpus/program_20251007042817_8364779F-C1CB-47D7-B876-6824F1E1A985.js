function createTower(a1) {
    var result = Object.create(null);
    for (let i7 = 0; i7 < a1; i7++) {
        result = Object.create(result);
    }
    return result;
}
function updateChain(a14, a15, a16, a17) {
    var cur = a14;
    for (let i20 = 0; i20 < a15; i20++) {
        cur = Object.getPrototypeOf(cur);
    }
    var desc = { value: a17, writable: true, configurable: true, enumerable: true };
    Object.defineProperty(cur, a16, desc);
}
function runChain_0_0(a35) {
    var sum = 0;
    for (let i39 = 0; i39 < 100; i39++) {
        sum += a35.foo;
    }
    return sum;
}
function testChain_0_0() {
    var obj = createTower(0);
    runChain_0_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_0_0(obj);
}
function runChain_1_0(a59) {
    var sum = 0;
    for (let i63 = 0; i63 < 100; i63++) {
        sum += a59.foo;
    }
    return sum;
}
function testChain_1_0() {
    var obj = createTower(1);
    runChain_1_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_1_0(obj);
}
function runChain_1_1(a83) {
    var sum = 0;
    for (let i87 = 0; i87 < 100; i87++) {
        sum += a83.foo;
    }
    return sum;
}
function testChain_1_1() {
    var obj = createTower(1);
    runChain_1_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_1_1(obj);
}
function runChain_2_0(a107) {
    var sum = 0;
    for (let i111 = 0; i111 < 100; i111++) {
        sum += a107.foo;
    }
    return sum;
}
function testChain_2_0() {
    var obj = createTower(2);
    runChain_2_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_2_0(obj);
}
function runChain_2_1(a131) {
    var sum = 0;
    for (let i135 = 0; i135 < 100; i135++) {
        sum += a131.foo;
    }
    return sum;
}
function testChain_2_1() {
    var obj = createTower(2);
    runChain_2_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_2_1(obj);
}
function runChain_2_2(a155) {
    var sum = 0;
    for (let i159 = 0; i159 < 100; i159++) {
        sum += a155.foo;
    }
    return sum;
}
function testChain_2_2() {
    var obj = createTower(2);
    runChain_2_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_2_2(obj);
}
function runChain_3_0(a179) {
    var sum = 0;
    for (let i183 = 0; i183 < 100; i183++) {
        sum += a179.foo;
    }
    return sum;
}
function testChain_3_0() {
    var obj = createTower(3);
    runChain_3_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_3_0(obj);
}
function runChain_3_1(a203) {
    var sum = 0;
    for (let i207 = 0; i207 < 100; i207++) {
        sum += a203.foo;
    }
    return sum;
}
function testChain_3_1() {
    var obj = createTower(3);
    runChain_3_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_3_1(obj);
}
function runChain_3_2(a227) {
    var sum = 0;
    for (let i231 = 0; i231 < 100; i231++) {
        sum += a227.foo;
    }
    return sum;
}
function testChain_3_2() {
    var obj = createTower(3);
    runChain_3_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_3_2(obj);
}
function runChain_3_3(a251) {
    var sum = 0;
    for (let i255 = 0; i255 < 100; i255++) {
        sum += a251.foo;
    }
    return sum;
}
function testChain_3_3() {
    var obj = createTower(3);
    runChain_3_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_3_3(obj);
}
function runChain_4_0(a275) {
    var sum = 0;
    for (let i279 = 0; i279 < 100; i279++) {
        sum += a275.foo;
    }
    return sum;
}
function testChain_4_0() {
    var obj = createTower(4);
    runChain_4_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_4_0(obj);
}
function runChain_4_1(a299) {
    var sum = 0;
    for (let i303 = 0; i303 < 100; i303++) {
        sum += a299.foo;
    }
    return sum;
}
function testChain_4_1() {
    var obj = createTower(4);
    runChain_4_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_4_1(obj);
}
function runChain_4_2(a323) {
    var sum = 0;
    for (let i327 = 0; i327 < 100; i327++) {
        sum += a323.foo;
    }
    return sum;
}
function testChain_4_2() {
    var obj = createTower(4);
    runChain_4_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_4_2(obj);
}
function runChain_4_3(a347) {
    var sum = 0;
    for (let i351 = 0; i351 < 100; i351++) {
        sum += a347.foo;
    }
    return sum;
}
function testChain_4_3() {
    var obj = createTower(4);
    runChain_4_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_4_3(obj);
}
function runChain_4_4(a371) {
    var sum = 0;
    for (let i375 = 0; i375 < 100; i375++) {
        sum += a371.foo;
    }
    return sum;
}
function testChain_4_4() {
    var obj = createTower(4);
    runChain_4_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_4_4(obj);
}
function runChain_5_0(a395) {
    var sum = 0;
    for (let i399 = 0; i399 < 100; i399++) {
        sum += a395.foo;
    }
    return sum;
}
function testChain_5_0() {
    var obj = createTower(5);
    runChain_5_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_5_0(obj);
}
function runChain_5_1(a419) {
    var sum = 0;
    for (let i423 = 0; i423 < 100; i423++) {
        sum += a419.foo;
    }
    return sum;
}
function testChain_5_1() {
    var obj = createTower(5);
    runChain_5_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_5_1(obj);
}
function runChain_5_2(a443) {
    var sum = 0;
    for (let i447 = 0; i447 < 100; i447++) {
        sum += a443.foo;
    }
    return sum;
}
function testChain_5_2() {
    var obj = createTower(5);
    runChain_5_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_5_2(obj);
}
function runChain_5_3(a467) {
    var sum = 0;
    for (let i471 = 0; i471 < 100; i471++) {
        sum += a467.foo;
    }
    return sum;
}
function testChain_5_3() {
    var obj = createTower(5);
    runChain_5_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_5_3(obj);
}
function runChain_5_4(a491) {
    var sum = 0;
    for (let i495 = 0; i495 < 100; i495++) {
        sum += a491.foo;
    }
    return sum;
}
function testChain_5_4() {
    var obj = createTower(5);
    runChain_5_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_5_4(obj);
}
function runChain_5_5(a515) {
    var sum = 0;
    for (let i519 = 0; i519 < 100; i519++) {
        sum += a515.foo;
    }
    return sum;
}
function testChain_5_5() {
    var obj = createTower(5);
    runChain_5_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_5_5(obj);
}
function runChain_6_0(a539) {
    var sum = 0;
    for (let i543 = 0; i543 < 100; i543++) {
        sum += a539.foo;
    }
    return sum;
}
function testChain_6_0() {
    var obj = createTower(6);
    runChain_6_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_6_0(obj);
}
function runChain_6_1(a563) {
    var sum = 0;
    for (let i567 = 0; i567 < 100; i567++) {
        sum += a563.foo;
    }
    return sum;
}
function testChain_6_1() {
    var obj = createTower(6);
    runChain_6_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_6_1(obj);
}
function runChain_6_2(a587) {
    var sum = 0;
    for (let i591 = 0; i591 < 100; i591++) {
        sum += a587.foo;
    }
    return sum;
}
function testChain_6_2() {
    var obj = createTower(6);
    runChain_6_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_6_2(obj);
}
function runChain_6_3(a611) {
    var sum = 0;
    for (let i615 = 0; i615 < 100; i615++) {
        sum += a611.foo;
    }
    return sum;
}
function testChain_6_3() {
    var obj = createTower(6);
    runChain_6_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_6_3(obj);
}
function runChain_6_4(a635) {
    var sum = 0;
    for (let i639 = 0; i639 < 100; i639++) {
        sum += a635.foo;
    }
    return sum;
}
function testChain_6_4() {
    var obj = createTower(6);
    runChain_6_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_6_4(obj);
}
function runChain_6_5(a659) {
    var sum = 0;
    for (let i663 = 0; i663 < 100; i663++) {
        sum += a659.foo;
    }
    return sum;
}
function testChain_6_5() {
    var obj = createTower(6);
    runChain_6_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_6_5(obj);
}
function runChain_6_6(a683) {
    var sum = 0;
    for (let i687 = 0; i687 < 100; i687++) {
        sum += a683.foo;
    }
    return sum;
}
function testChain_6_6() {
    var obj = createTower(6);
    runChain_6_6(obj);
    updateChain(obj, 6, "foo", 9);
    runChain_6_6(obj);
}
function runChain_7_0(a707) {
    var sum = 0;
    for (let i711 = 0; i711 < 100; i711++) {
        sum += a707.foo;
    }
    return sum;
}
function testChain_7_0() {
    var obj = createTower(7);
    runChain_7_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_7_0(obj);
}
function runChain_7_1(a731) {
    var sum = 0;
    for (let i735 = 0; i735 < 100; i735++) {
        sum += a731.foo;
    }
    return sum;
}
function testChain_7_1() {
    var obj = createTower(7);
    runChain_7_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_7_1(obj);
}
function runChain_7_2(a755) {
    var sum = 0;
    for (let i759 = 0; i759 < 100; i759++) {
        sum += a755.foo;
    }
    return sum;
}
function testChain_7_2() {
    var obj = createTower(7);
    runChain_7_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_7_2(obj);
}
function runChain_7_3(a779) {
    var sum = 0;
    for (let i783 = 0; i783 < 100; i783++) {
        sum += a779.foo;
    }
    return sum;
}
function testChain_7_3() {
    var obj = createTower(7);
    runChain_7_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_7_3(obj);
}
function runChain_7_4(a803) {
    var sum = 0;
    for (let i807 = 0; i807 < 100; i807++) {
        sum += a803.foo;
    }
    return sum;
}
function testChain_7_4() {
    var obj = createTower(7);
    runChain_7_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_7_4(obj);
}
function runChain_7_5(a827) {
    var sum = 0;
    for (let i831 = 0; i831 < 100; i831++) {
        sum += a827.foo;
    }
    return sum;
}
function testChain_7_5() {
    var obj = createTower(7);
    runChain_7_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_7_5(obj);
}
function runChain_7_6(a851) {
    var sum = 0;
    for (let i855 = 0; i855 < 100; i855++) {
        sum += a851.foo;
    }
    return sum;
}
function testChain_7_6() {
    var obj = createTower(7);
    runChain_7_6(obj);
    updateChain(obj, 6, "foo", 9);
    runChain_7_6(obj);
}
function runChain_7_7(a875) {
    var sum = 0;
    for (let i879 = 0; i879 < 100; i879++) {
        sum += a875.foo;
    }
    return sum;
}
function testChain_7_7() {
    var obj = createTower(7);
    runChain_7_7(obj);
    updateChain(obj, 7, "foo", 9);
    runChain_7_7(obj);
}
function runChain_8_0(a899) {
    var sum = 0;
    for (let i903 = 0; i903 < 100; i903++) {
        sum += a899.foo;
    }
    return sum;
}
function testChain_8_0() {
    var obj = createTower(8);
    runChain_8_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_8_0(obj);
}
function runChain_8_1(a923) {
    var sum = 0;
    for (let i927 = 0; i927 < 100; i927++) {
        sum += a923.foo;
    }
    return sum;
}
function testChain_8_1() {
    var obj = createTower(8);
    runChain_8_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_8_1(obj);
}
function runChain_8_2(a947) {
    var sum = 0;
    for (let i951 = 0; i951 < 100; i951++) {
        sum += a947.foo;
    }
    return sum;
}
function testChain_8_2() {
    var obj = createTower(8);
    runChain_8_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_8_2(obj);
}
function runChain_8_3(a971) {
    var sum = 0;
    for (let i975 = 0; i975 < 100; i975++) {
        sum += a971.foo;
    }
    return sum;
}
function testChain_8_3() {
    var obj = createTower(8);
    runChain_8_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_8_3(obj);
}
function runChain_8_4(a995) {
    var sum = 0;
    for (let i999 = 0; i999 < 100; i999++) {
        sum += a995.foo;
    }
    return sum;
}
function testChain_8_4() {
    var obj = createTower(8);
    runChain_8_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_8_4(obj);
}
function runChain_8_5(a1019) {
    var sum = 0;
    for (let i1023 = 0; i1023 < 100; i1023++) {
        sum += a1019.foo;
    }
    return sum;
}
function testChain_8_5() {
    var obj = createTower(8);
    runChain_8_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_8_5(obj);
}
function runChain_8_6(a1043) {
    var sum = 0;
    for (let i1047 = 0; i1047 < 100; i1047++) {
        sum += a1043.foo;
    }
    return sum;
}
function testChain_8_6() {
    var obj = createTower(8);
    runChain_8_6(obj);
    updateChain(obj, 6, "foo", 9);
    runChain_8_6(obj);
}
function runChain_8_7(a1067) {
    var sum = 0;
    for (let i1071 = 0; i1071 < 100; i1071++) {
        sum += a1067.foo;
    }
    return sum;
}
function testChain_8_7() {
    var obj = createTower(8);
    runChain_8_7(obj);
    updateChain(obj, 7, "foo", 9);
    runChain_8_7(obj);
}
function runChain_8_8(a1091) {
    var sum = 0;
    for (let i1095 = 0; i1095 < 100; i1095++) {
        sum += a1091.foo;
    }
    return sum;
}
function testChain_8_8() {
    var obj = createTower(8);
    runChain_8_8(obj);
    updateChain(obj, 8, "foo", 9);
    runChain_8_8(obj);
}
function runChain_9_0(a1115) {
    var sum = 0;
    for (let i1119 = 0; i1119 < 100; i1119++) {
        sum += a1115.foo;
    }
    return sum;
}
function testChain_9_0() {
    var obj = createTower(9);
    runChain_9_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_9_0(obj);
}
function runChain_9_1(a1139) {
    var sum = 0;
    for (let i1143 = 0; i1143 < 100; i1143++) {
        sum += a1139.foo;
    }
    return sum;
}
function testChain_9_1() {
    var obj = createTower(9);
    runChain_9_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_9_1(obj);
}
function runChain_9_2(a1163) {
    var sum = 0;
    for (let i1167 = 0; i1167 < 100; i1167++) {
        sum += a1163.foo;
    }
    return sum;
}
function testChain_9_2() {
    var obj = createTower(9);
    runChain_9_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_9_2(obj);
}
function runChain_9_3(a1187) {
    var sum = 0;
    for (let i1191 = 0; i1191 < 100; i1191++) {
        sum += a1187.foo;
    }
    return sum;
}
function testChain_9_3() {
    var obj = createTower(9);
    runChain_9_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_9_3(obj);
}
function runChain_9_4(a1211) {
    var sum = 0;
    for (let i1215 = 0; i1215 < 100; i1215++) {
        sum += a1211.foo;
    }
    return sum;
}
function testChain_9_4() {
    var obj = createTower(9);
    runChain_9_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_9_4(obj);
}
function runChain_9_5(a1235) {
    var sum = 0;
    for (let i1239 = 0; i1239 < 100; i1239++) {
        sum += a1235.foo;
    }
    return sum;
}
function testChain_9_5() {
    var obj = createTower(9);
    runChain_9_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_9_5(obj);
}
function runChain_9_6(a1259) {
    var sum = 0;
    for (let i1263 = 0; i1263 < 100; i1263++) {
        sum += a1259.foo;
    }
    return sum;
}
function testChain_9_6() {
    var obj = createTower(9);
    runChain_9_6(obj);
    updateChain(obj, 6, "foo", 9);
    runChain_9_6(obj);
}
function runChain_9_7(a1283) {
    var sum = 0;
    for (let i1287 = 0; i1287 < 100; i1287++) {
        sum += a1283.foo;
    }
    return sum;
}
function testChain_9_7() {
    var obj = createTower(9);
    runChain_9_7(obj);
    updateChain(obj, 7, "foo", 9);
    runChain_9_7(obj);
}
function runChain_9_8(a1307) {
    var sum = 0;
    for (let i1311 = 0; i1311 < 100; i1311++) {
        sum += a1307.foo;
    }
    return sum;
}
function testChain_9_8() {
    var obj = createTower(9);
    runChain_9_8(obj);
    updateChain(obj, 8, "foo", 9);
    runChain_9_8(obj);
}
function runChain_9_9(a1331) {
    var sum = 0;
    for (let i1335 = 0; i1335 < 100; i1335++) {
        sum += a1331.foo;
    }
    return sum;
}
function testChain_9_9() {
    var obj = createTower(9);
    runChain_9_9(obj);
    updateChain(obj, 9, "foo", 9);
    runChain_9_9(obj);
}
function runChain_10_0(a1355) {
    var sum = 0;
    for (let i1359 = 0; i1359 < 100; i1359++) {
        sum += a1355.foo;
    }
    return sum;
}
function testChain_10_0() {
    var obj = createTower(10);
    runChain_10_0(obj);
    updateChain(obj, 0, "foo", 9);
    runChain_10_0(obj);
}
function runChain_10_1(a1379) {
    var sum = 0;
    for (let i1383 = 0; i1383 < 100; i1383++) {
        sum += a1379.foo;
    }
    return sum;
}
function testChain_10_1() {
    var obj = createTower(10);
    runChain_10_1(obj);
    updateChain(obj, 1, "foo", 9);
    runChain_10_1(obj);
}
function runChain_10_2(a1403) {
    var sum = 0;
    for (let i1407 = 0; i1407 < 100; i1407++) {
        sum += a1403.foo;
    }
    return sum;
}
function testChain_10_2() {
    var obj = createTower(10);
    runChain_10_2(obj);
    updateChain(obj, 2, "foo", 9);
    runChain_10_2(obj);
}
function runChain_10_3(a1427) {
    var sum = 0;
    for (let i1431 = 0; i1431 < 100; i1431++) {
        sum += a1427.foo;
    }
    return sum;
}
function testChain_10_3() {
    var obj = createTower(10);
    runChain_10_3(obj);
    updateChain(obj, 3, "foo", 9);
    runChain_10_3(obj);
}
function runChain_10_4(a1451) {
    var sum = 0;
    for (let i1455 = 0; i1455 < 100; i1455++) {
        sum += a1451.foo;
    }
    return sum;
}
function testChain_10_4() {
    var obj = createTower(10);
    runChain_10_4(obj);
    updateChain(obj, 4, "foo", 9);
    runChain_10_4(obj);
}
function runChain_10_5(a1475) {
    var sum = 0;
    for (let i1479 = 0; i1479 < 100; i1479++) {
        sum += a1475.foo;
    }
    return sum;
}
function testChain_10_5() {
    var obj = createTower(10);
    runChain_10_5(obj);
    updateChain(obj, 5, "foo", 9);
    runChain_10_5(obj);
}
function runChain_10_6(a1499) {
    var sum = 0;
    for (let i1503 = 0; i1503 < 100; i1503++) {
        sum += a1499.foo;
    }
    return sum;
}
function testChain_10_6() {
    var obj = createTower(10);
    runChain_10_6(obj);
    updateChain(obj, 6, "foo", 9);
    runChain_10_6(obj);
}
function runChain_10_7(a1523) {
    var sum = 0;
    for (let i1527 = 0; i1527 < 100; i1527++) {
        sum += a1523.foo;
    }
    return sum;
}
function testChain_10_7() {
    var obj = createTower(10);
    runChain_10_7(obj);
    updateChain(obj, 7, "foo", 9);
    runChain_10_7(obj);
}
function runChain_10_8(a1547) {
    var sum = 0;
    for (let i1551 = 0; i1551 < 100; i1551++) {
        sum += a1547.foo;
    }
    return sum;
}
function testChain_10_8() {
    var obj = createTower(10);
    runChain_10_8(obj);
    updateChain(obj, 8, "foo", 9);
    runChain_10_8(obj);
}
function runChain_10_9(a1571) {
    var sum = 0;
    for (let i1575 = 0; i1575 < 100; i1575++) {
        sum += a1571.foo;
    }
    return sum;
}
function testChain_10_9() {
    var obj = createTower(10);
    runChain_10_9(obj);
    updateChain(obj, 9, "foo", 9);
    runChain_10_9(obj);
}
function runChain_10_10(a1595) {
    var sum = 0;
    for (let i1599 = 0; i1599 < 100; i1599++) {
        sum += a1595.foo;
    }
    return sum;
}
function testChain_10_10() {
    var obj = createTower(10);
    runChain_10_10(obj);
    updateChain(obj, 10, "foo", 9);
    runChain_10_10(obj);
}
testChain_0_0();
testChain_1_0();
testChain_1_1();
testChain_2_0();
testChain_2_1();
testChain_2_2();
testChain_3_0();
testChain_3_1();
testChain_3_2();
testChain_3_3();
testChain_4_0();
testChain_4_1();
testChain_4_2();
testChain_4_3();
testChain_4_4();
testChain_5_0();
testChain_5_1();
testChain_5_2();
testChain_5_3();
testChain_5_4();
testChain_5_5();
testChain_6_0();
testChain_6_1();
testChain_6_2();
testChain_6_3();
testChain_6_4();
testChain_6_5();
testChain_6_6();
testChain_7_0();
testChain_7_1();
testChain_7_2();
testChain_7_3();
testChain_7_4();
testChain_7_5();
testChain_7_6();
testChain_7_7();
testChain_8_0();
testChain_8_1();
testChain_8_2();
testChain_8_3();
testChain_8_4();
testChain_8_5();
testChain_8_6();
testChain_8_7();
testChain_8_8();
testChain_9_0();
testChain_9_1();
testChain_9_2();
testChain_9_3();
testChain_9_4();
testChain_9_5();
testChain_9_6();
testChain_9_7();
testChain_9_8();
testChain_9_9();
testChain_10_0();
testChain_10_1();
testChain_10_2();
testChain_10_3();
testChain_10_4();
testChain_10_5();
testChain_10_6();
testChain_10_7();
testChain_10_8();
testChain_10_9();
testChain_10_10();
