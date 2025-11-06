function testInLoopTests(a1, a2) {
    let arrayLength = a1?.length;
    let sum = 0;
    for (let i8 = 0; i8 < 10; ++i8) {
        if ((a2 >= 0) && (a2 < arrayLength)) {
            sum += a1?.[a2];
        }
    }
    return sum;
}
try { noInline(testInLoopTests); } catch (e) {}
let testArray = [1,2,3];
for (let i27 = 0; i27 < 100000; ++i27) {
    let v34;
    try { v34 = testInLoopTests(testArray, 1); } catch (e) {}
    if (v34 !== 20) {
        throw "Failed testInLoopTests(testArray, 1)";
    }
    let v39;
    try { v39 = testInLoopTests(testArray, 2); } catch (e) {}
    if (v39 !== 30) {
        throw "Failed testInLoopTests(testArray, 2)";
    }
}
let v44;
try { v44 = testInLoopTests(testArray, 2147483647); } catch (e) {}
let largeIntResult = v44;
if (largeIntResult !== 0) {
    throw "Failed testInLoopTests(testArray, 2147483647)";
}
const v50 = -2147483647;
let v51;
try { v51 = testInLoopTests(testArray, v50); } catch (e) {}
let smallIntResult = v51;
if (smallIntResult !== 0) {
    throw "Failed testInLoopTests(testArray, -2147483647)";
}
