console.log("This tests if the Date setters handle invalid parameters correctly resulting in a NaN date and if a recovery from such a NaN date is only possible by using the date.setTime() and date.set[[UTC]Full]Year() functions.");
var dateFunctionNameRoots = ["Time","Milliseconds","UTCMilliseconds","Seconds","UTCSeconds","Minutes","UTCMinutes","Hours","UTCHours","Date","UTCDate","Month","UTCMonth","FullYear","UTCFullYear","Year"];
var dateFunctionParameterNum = [1,1,1,2,2,3,3,4,4,1,1,2,2,3,3,1];
var testValues = [0,Number.NaN,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];
function testDateFunctionWithValueNoRecoverNaN(a47, a48) {
    const v50 = new Date();
    var date = v50;
    var setValue = date["get" + a47]();
    date.setMilliseconds(Number.NaN);
    var params = ["",", 0",", 0, 0",", 0, 0, 0"];
    var setResult = 1 == a48 ? date["set" + a47](setValue) : (2 == a48 ? date["set" + a47](setValue, 0) : (3 == a48 ? date["set" + a47](setValue, 0, 0) : date["set" + a47](setValue, 0, 0, 0)));
    if (!isNaN(setResult)) {
        console.log((((((("date(NaN).set" + a47) + "(") + setValue) + params[a48 - 1]) + ") was ") + setResult) + " instead of NaN");
        return false;
    }
    var getResult = date["get" + a47]();
    if (!isNaN(getResult)) {
        console.log(((("date.get" + a47) + "() was ") + getResult) + " instead of NaN");
        return false;
    }
    console.log(((("no recovering from NaN date using date.set" + a47) + "(arg0") + params[a48 - 1]) + ")");
    return true;
}
function testDateFunctionWithValueRecoverTime(a139) {
    const v141 = new Date();
    var date = v141;
    var setValue = date["get" + a139]();
    date.setMilliseconds(Number.NaN);
    var setResult = date["set" + a139](setValue);
    if (setValue != setResult) {
        console.log((((((("date(NaN).set" + a139) + "(") + setValue) + ") was ") + setResult) + " instead of ") + setValue);
        return false;
    }
    var getResult = date["get" + a139]();
    if (getResult != setValue) {
        console.log((((("date.get" + a139) + "() was ") + getResult) + " instead of ") + setValue);
        return false;
    }
    console.log(("recover from NaN date using date.set" + a139) + "()");
    return true;
}
function testDateFunctionWithValueRecoverFullYear(a189) {
    var result = true;
    const v193 = new Date();
    var date = v193;
    var setValue = date["get" + a189]();
    date.setMilliseconds(Number.NaN);
    var setResult = date["set" + a189](setValue);
    var getResult = date["get" + a189]();
    if (getResult != setValue) {
        console.log((((("date.get" + a189) + "() was ") + getResult) + " instead of ") + setValue);
        result = false;
    }
    getResult = date.getMilliseconds();
    if (getResult != 0) {
        console.log(("date.getMilliseconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getSeconds();
    if (getResult != 0) {
        console.log(("date.getSeconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getMinutes();
    if (getResult != 0) {
        console.log(("date.getMinutes() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getHours();
    if (getResult != 0) {
        console.log(("date.getHours() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getDate();
    if (getResult != 1) {
        console.log(("date.getDate() was " + getResult) + " instead of 1");
        result = false;
    }
    getResult = date.getMonth();
    if (getResult != 0) {
        console.log(("date.getMonth() was " + getResult) + " instead of 0");
        result = false;
    }
    if (result) {
        console.log("recover from NaN date using date.setFullYear()");
    } else {
        console.log("recover from NaN date using date.setFullYear()");
    }
    return result;
}
function testDateFunctionWithValueRecoverUTCFullYear(a279) {
    var result = true;
    const v283 = new Date();
    var date = v283;
    var setValue = date["get" + a279]();
    date.setMilliseconds(Number.NaN);
    var setResult = date["set" + a279](setValue);
    var getResult = date["get" + a279]();
    if (getResult != setValue) {
        console.log((((("date.get" + a279) + "() was ") + getResult) + " instead of ") + setValue);
        result = false;
    }
    getResult = date.getUTCMilliseconds();
    if (getResult != 0) {
        console.log(("date.getUTCMilliseconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getUTCSeconds();
    if (getResult != 0) {
        console.log(("date.getUTCSeconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getUTCMinutes();
    if (getResult != 0) {
        console.log(("date.getUTCMinutes() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getUTCHours();
    if (getResult != 0) {
        console.log(("date.getUTCHours() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getUTCDate();
    if (getResult != 1) {
        console.log(("date.getUTCDate() was " + getResult) + " instead of 1");
        result = false;
    }
    getResult = date.getUTCMonth();
    if (getResult != 0) {
        console.log(("date.getUTCMonth() was " + getResult) + " instead of 0");
        result = false;
    }
    if (result) {
        console.log("recover from NaN date using date.setUTCFullYear()");
    } else {
        console.log("recover from NaN date using date.setUTCFullYear()");
    }
    return result;
}
function testDateFunctionWithValueRecoverYear(a369) {
    var result = true;
    var is13Compatible = true;
    const v375 = new Date();
    var date = v375;
    var setValue = date["get" + a369]();
    var fullYears = date.getFullYear() - 1900;
    if (setValue != fullYears) {
        console.log((((("date.get" + a369) + "() was ") + setValue) + " instead of ") + fullYears);
        is13Compatible = false;
    } else {
        console.log("date.getYear() is compatible to JavaScript 1.3 and later");
    }
    date.setMilliseconds(Number.NaN);
    const v401 = setValue + 1900;
    var setResult = date["set" + a369](v401);
    var getResult = date["get" + a369]();
    if (getResult != setValue) {
        console.log((((("date.get" + a369) + "() was ") + getResult) + " instead of ") + setValue);
        result = false;
    }
    getResult = date.getMilliseconds();
    if (getResult != 0) {
        console.log(("date.getMilliseconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getSeconds();
    if (getResult != 0) {
        console.log(("date.getSeconds() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getMinutes();
    if (getResult != 0) {
        console.log(("date.getMinutes() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getHours();
    if (getResult != 0) {
        console.log(("date.getHours() was " + getResult) + " instead of 0");
        result = false;
    }
    getResult = date.getDate();
    if (getResult != 1) {
        console.log(("date.getDate() was " + getResult) + " instead of 1");
        result = false;
    }
    getResult = date.getMonth();
    if (getResult != 0) {
        console.log(("date.getMonth() was " + getResult) + " instead of 0");
        result = false;
    }
    if (result) {
        console.log("recover from NaN date using date.setUTCFullYear()");
    } else {
        console.log("recover from NaN date using date.setUTCFullYear()");
    }
    return result && is13Compatible;
}
function makeIEHappy(a481, a482) {
    const v484 = new Date();
    var date = v484;
    var setResult = date["set" + a481](a482);
    if (!isNaN(setResult)) {
        console.log(((("date.set" + a481) + "() was ") + setResult) + " instead of NaN");
        return false;
    }
    var getResult = date["get" + a481]();
    if (!isNaN(getResult)) {
        console.log(((("date.get" + a481) + "() was ") + getResult) + " instead of NaN");
        return false;
    }
    return true;
}
function testDateFunctionWithValueExpectingNaN1(a519) {
    var result = true;
    for (const v522 in testValues) {
        if (v522 != 0) {
            const v526 = new Date();
            var date = v526;
            const v528 = testValues[v522];
            var setResult = date["set" + a519](v528);
            if (!isNaN(setResult)) {
                console.log(((((("date.set" + a519) + "(") + testValues[v522]) + ") was ") + setResult) + " instead of NaN");
                result = false;
            }
            var getResult = date["get" + a519]();
            if (!isNaN(getResult)) {
                console.log(((("date.get" + a519) + "() was ") + getResult) + " instead of NaN");
                result = false;
            }
        } else {
            if (!makeIEHappy(a519)) {
                result = false;
            }
        }
    }
    if (result) {
        console.log(("date.set" + a519) + "(arg0)");
        console.log(("date.set" + a519) + "()");
    }
    return result;
}
function testDateFunctionWithValueExpectingNaN2(a578) {
    var result = true;
    for (const v581 in testValues) {
        for (const v582 in testValues) {
            if ((v581 != 0) || (v582 != 0)) {
                const v589 = new Date();
                var date = v589;
                const v591 = testValues[v581];
                const v592 = testValues[v582];
                var setResult = date["set" + a578](v591, v592);
                if (!isNaN(setResult)) {
                    console.log(((((((("date.set" + a578) + "(") + testValues[v581]) + ", ") + testValues[v582]) + ") was ") + setResult) + " instead of NaN");
                    result = false;
                }
                var getResult = date["get" + a578]();
                if (!isNaN(getResult)) {
                    console.log(((("date.get" + a578) + "() was ") + getResult) + " instead of NaN");
                    result = false;
                }
            }
        }
    }
    if (result) {
        console.log(("date.set" + a578) + "(arg0, arg1)");
    }
    return result;
}
function testDateFunctionWithValueExpectingNaN3(a638) {
    var result = true;
    for (const v641 in testValues) {
        for (const v642 in testValues) {
            for (const v643 in testValues) {
                if (((v641 != 0) || (v642 != 0)) || (v643 != 0)) {
                    const v653 = new Date();
                    var date = v653;
                    const v655 = testValues[v641];
                    const v656 = testValues[v642];
                    const v657 = testValues[v643];
                    var setResult = date["set" + a638](v655, v656, v657);
                    if (!isNaN(setResult)) {
                        console.log(((((((((("date.set" + a638) + "(") + testValues[v641]) + ", ") + testValues[v642]) + ", ") + testValues[v643]) + ") was ") + setResult) + " instead of NaN");
                        result = false;
                    }
                    var getResult = date["get" + a638]();
                    if (!isNaN(getResult)) {
                        console.log(((("date.get" + a638) + "() was ") + getResult) + " instead of NaN");
                        result = false;
                    }
                }
            }
        }
    }
    if (result) {
        console.log(("date.set" + a638) + "(arg0, arg1, arg2)");
    }
    return result;
}
function testDateFunctionWithValueExpectingNaN4(a707) {
    var result = true;
    for (const v710 in testValues) {
        for (const v711 in testValues) {
            for (const v712 in testValues) {
                for (const v713 in testValues) {
                    if ((((v710 != 0) || (v711 != 0)) || (v712 != 0)) || (v713 != 0)) {
                        const v726 = new Date();
                        var date = v726;
                        const v728 = testValues[v710];
                        const v729 = testValues[v711];
                        const v730 = testValues[v712];
                        const v731 = testValues[v713];
                        var setResult = date["set" + a707](v728, v729, v730, v731);
                        if (!isNaN(setResult)) {
                            console.log(((((((((((("date.set" + a707) + "(") + testValues[v710]) + ", ") + testValues[v711]) + ", ") + testValues[v712]) + ", ") + testValues[v713]) + ") was ") + setResult) + " instead of NaN");
                            result = false;
                        }
                        var getResult = date["get" + a707]();
                        if (!isNaN(getResult)) {
                            console.log(((("date.get" + a707) + "() was ") + getResult) + " instead of NaN");
                            result = false;
                        }
                    }
                }
            }
        }
    }
    if (result) {
        console.log(("date.set" + a707) + "(arg0, arg1, arg2, arg3)");
    }
    return result;
}
function testDateFunction(a785, a786) {
    var success = true;
    switch (a786) {
        case 4:
            success &= testDateFunctionWithValueExpectingNaN4(a785);
            if ((((a785 != "Time") && (a785 != "FullYear")) && (a785 != "UTCFullYear")) && (a785 != "Year")) {
                success &= testDateFunctionWithValueNoRecoverNaN(a785, 4);
            }
        case 3:
            success &= testDateFunctionWithValueExpectingNaN3(a785);
            if ((((a785 != "Time") && (a785 != "FullYear")) && (a785 != "UTCFullYear")) && (a785 != "Year")) {
                success &= testDateFunctionWithValueNoRecoverNaN(a785, 3);
            }
        case 2:
            success &= testDateFunctionWithValueExpectingNaN2(a785);
            if ((((a785 != "Time") && (a785 != "FullYear")) && (a785 != "UTCFullYear")) && (a785 != "Year")) {
                success &= testDateFunctionWithValueNoRecoverNaN(a785, 2);
            }
        case 1:
            success &= testDateFunctionWithValueExpectingNaN1(a785);
            if (a785 == "Time") {
                success &= testDateFunctionWithValueRecoverTime(a785);
            } else {
                if (a785 == "FullYear") {
                    success &= testDateFunctionWithValueRecoverFullYear(a785);
                } else {
                    if (a785 == "UTCFullYear") {
                        success &= testDateFunctionWithValueRecoverUTCFullYear(a785);
                    } else {
                        if (a785 == "Year") {
                            success &= testDateFunctionWithValueRecoverYear(a785);
                        } else {
                            success &= testDateFunctionWithValueNoRecoverNaN(a785, 1);
                        }
                    }
                }
            }
    }
    if (success) {
        console.log(("date.set" + a785) + " passed all tests");
    }
}
for (const v855 in dateFunctionNameRoots) {
    testDateFunction(dateFunctionNameRoots[v855], dateFunctionParameterNum[v855]);
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/maglev/maglev-assembler-inl.h, line 777
// # Debug check failed: !allow_allocate() implies builtin == Builtin::kDoubleToI || !BuiltinCanAllocate(builtin).
// #
// #
// #
// #FailureMessage Object: 0x7f8b1f219700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x563505bc3a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x563505bc22a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x563505bb6546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x563505bb5d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x5635076cf13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x563507a9a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x56350762c3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x5635075da150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x5635075d6fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x56350732d5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x5635073247e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x563505da2cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x563507327588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x563505bc714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x563505bd2925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x563505bbf650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7f8b2cdd9ac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7f8b2ce6b850]
// Received signal 6
// STDOUT:
// This tests if the Date setters handle invalid parameters correctly resulting in a NaN date and if a recovery from such a NaN date is only possible by using the date.setTime() and date.set[[UTC]Full]Year() functions.
// date.setTime(arg0)
// date.setTime()
// recover from NaN date using date.setTime()
// date.setTime passed all tests
// date.setMilliseconds(arg0)
// date.setMilliseconds()
// no recovering from NaN date using date.setMilliseconds(arg0)
// date.setMilliseconds passed all tests
// date.setUTCMilliseconds(arg0)
// date.setUTCMilliseconds()
// no recovering from NaN date using date.setUTCMilliseconds(arg0)
// date.setUTCMilliseconds passed all tests
// date.setSeconds(arg0, arg1)
// no recovering from NaN date using date.setSeconds(arg0, 0)
// date.setSeconds(arg0)
// date.setSeconds()
// no recovering from NaN date using date.setSeconds(arg0)
// date.setSeconds passed all tests
// date.setUTCSeconds(arg0, arg1)
// no recovering from NaN date using date.setUTCSeconds(arg0, 0)
// date.setUTCSeconds(arg0)
// date.setUTCSeconds()
// no recovering from NaN date using date.setUTCSeconds(arg0)
// date.setUTCSeconds passed all tests
// date.setMinutes(arg0, arg1, arg2)
// no recovering from NaN date using date.setMinutes(arg0, 0, 0)
// date.setMinutes(arg0, arg1)
// no recovering from NaN date using date.setMinutes(arg0, 0)
// date.setMinutes(arg0)
// date.setMinutes()
// no recovering from NaN date using date.setMinutes(arg0)
// date.setMinutes passed all tests
// date.setUTCMinutes(arg0, arg1, arg2)
// no recovering from NaN date using date.setUTCMinutes(arg0, 0, 0)
// date.setUTCMinutes(arg0, arg1)
// no recovering from NaN date using date.setUTCMinutes(arg0, 0)
// date.setUTCMinutes(arg0)
// date.setUTCMinutes()
// no recovering from NaN date using date.setUTCMinutes(arg0)
// date.setUTCMinutes passed all tests
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 232ms
