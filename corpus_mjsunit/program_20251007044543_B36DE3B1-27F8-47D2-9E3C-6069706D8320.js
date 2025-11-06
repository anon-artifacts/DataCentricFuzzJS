function testHoistability(a1, a2) {
    var sum = 0;
    var a;
    a = [1,2,3,4];
    for (let i13 = 0; i13 < 4; ++i13) {
        sum += a[i13];
    }
    a = [1,2,3,4];
    for (let i26 = 3; i26 >= 0; --i26) {
        sum += a[i26];
    }
    a = [1,2,3,4];
    for (let i40 = 0, i41 = 0; i40 < 4; ++i40, ++i41) {
        sum += a[i41];
    }
    a = [1,2,3,4];
    for (let i58 = 3, i59 = 3; i58 >= 0; --i58, --i59) {
        sum += a[i59];
    }
    var a = [1,2,3,4];
    for (let i75 = a1; i75 < a2; ++i75) {
        sum += a[i75];
    }
    a = [1,2,3,4];
    for (let i88 = a2 - 1; i88 >= a1; --i88) {
        sum += a[i88];
    }
    a = [1,2,3,4];
    for (let i99 = a1, i100 = a1; i99 < a2; ++i99, ++i100) {
        sum += a[i100];
    }
    a = [1,2,3,4];
    for (let i118 = a2 - 1, i119 = a2 - 1; i118 >= a1; --i118, --i119) {
        sum += a[i119];
    }
    return sum;
}
print("testHoistability: " + testHoistability(0, 4));
print("testHoistability: " + testHoistability(0, 4));
print("");
function testUnhoistability(a144, a145) {
    var sum = 0;
    var a;
    a = [1,2,3,4];
    for (let i157 = -1; i157 < 4; ++i157) {
        sum += a[i157];
    }
    a = [1,2,3,4];
    for (let i170 = 3; i170 >= -1; --i170) {
        sum += a[i170];
    }
    a = [1,2,3,4];
    for (let i184 = 0; i184 < 5; ++i184) {
        sum += a[i184];
    }
    a = [1,2,3,4];
    for (let i197 = 4; i197 >= 0; --i197) {
        sum += a[i197];
    }
    a = [1,2,3,4];
    for (let i213 = -1, i214 = -1; i213 < 4; ++i213, ++i214) {
        sum += a[i214];
    }
    a = [1,2,3,4];
    for (let i231 = 3, i232 = 3; i231 >= -1; --i231, --i232) {
        sum += a[i232];
    }
    a = [1,2,3,4];
    for (let i250 = 0, i251 = 0; i250 < 5; ++i250, ++i251) {
        sum += a[i251];
    }
    a = [1,2,3,4];
    for (let i268 = 4, i269 = 4; i268 >= 0; --i268, --i269) {
        sum += a[i269];
    }
    var a = [1,2,3,4];
    for (let i287 = a144 - 1; i287 < a145; ++i287) {
        sum += a[i287];
    }
    a = [1,2,3,4];
    for (let i300 = a145 - 1; i300 >= (a144 - 1); --i300) {
        sum += a[i300];
    }
    var a = [1,2,3,4];
    for (let i314 = a144; i314 <= a145; ++i314) {
        sum += a[i314];
    }
    a = [1,2,3,4];
    for (let i325 = a145; i325 >= a144; --i325) {
        sum += a[i325];
    }
    a = [1,2,3,4];
    for (let i340 = a144 - 1, i341 = a144 - 1; i340 < a145; ++i340, ++i341) {
        sum += a[i341];
    }
    a = [1,2,3,4];
    for (let i359 = a145 - 1, i360 = a145 - 1; i359 >= (a144 - 1); --i359, --i360) {
        sum += a[i360];
    }
    a = [1,2,3,4];
    for (let i376 = a144, i377 = a144; i376 <= a145; ++i376, ++i377) {
        sum += a[i377];
    }
    a = [1,2,3,4];
    for (let i391 = a145, i392 = a145; i391 >= a144; --i391, --i392) {
        sum += a[i392];
    }
    return sum;
}
print("testUnhoistability: " + testUnhoistability(0, 4));
print("testUnhoistability: " + testUnhoistability(0, 4));
print("");
function testInductionVariableWithConstantValue_0(a416) {
    var a = [1,2];
    var sum = 0;
    for (; a416 == 1; ++a416) {
        sum += a[a416];
    }
    return sum;
}
print("testInductionVariableWithConstantValue_0: " + testInductionVariableWithConstantValue_0(1));
print("testInductionVariableWithConstantValue_0: " + testInductionVariableWithConstantValue_0(1));
print("");
function testInductionVariableWithConstantValue_1(a440) {
    var a = [1,2];
    var sum = 0;
    for (; a440 == 1; --a440) {
        sum += a[a440];
    }
    return sum;
}
print("testInductionVariableWithConstantValue_1: " + testInductionVariableWithConstantValue_1(1));
print("testInductionVariableWithConstantValue_1: " + testInductionVariableWithConstantValue_1(1));
print("");
function testInductionVariableWithConstantValue_2(a464) {
    var a = [1,2];
    var sum = 0;
    for (let i471 = a464; a464 == 1; ++a464, ++i471) {
        sum += a[i471];
    }
    return sum;
}
print("testInductionVariableWithConstantValue_2: " + testInductionVariableWithConstantValue_2(1));
print("testInductionVariableWithConstantValue_2: " + testInductionVariableWithConstantValue_2(1));
print("");
function testInductionVariableWithConstantValue_3(a492) {
    var a = [1,2];
    var sum = 0;
    for (let i499 = a492; a492 == 1; --a492, --i499) {
        sum += a[i499];
    }
    return sum;
}
print("testInductionVariableWithConstantValue_3: " + testInductionVariableWithConstantValue_3(1));
print("testInductionVariableWithConstantValue_3: " + testInductionVariableWithConstantValue_3(1));
print("");
function f519() {
    function testInductionVariableEqualsConstantAndHoistability(a521, a522, a523) {
        var sum = 0;
        for (; a522 < a523; ++a522) {
            if (a522 === 0) {
                sum = 0;
            }
            sum += a521[a522];
        }
        return sum;
    }
    var a = [1,2];
    testInductionVariableEqualsConstantAndHoistability(a, 0, 2);
    testInductionVariableEqualsConstantAndHoistability(a, 0, 2);
    print("");
}
f519();
function f545() {
    function testHoistabilityAndCompatibilityAndBoundInfoPropagationOutOfLoop(a547, a548) {
        var sum = 0;
        var n = a547.length;
        for (let i554 = 0; i554 < n; ++i554) {
            if (a547[i554] === 0) {
                ++sum;
                break;
            }
        }
        if (a548) {
            a547[n] = 0;
        }
        return sum;
    }
    var a = [1,2];
    testHoistabilityAndCompatibilityAndBoundInfoPropagationOutOfLoop(a);
    testHoistabilityAndCompatibilityAndBoundInfoPropagationOutOfLoop(a);
    print("");
}
f545();
