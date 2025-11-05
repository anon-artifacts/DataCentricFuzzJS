const v2 = Function.prototype.call;
var call = Function.prototype.call.call.bind(v2);
var getOwnPropertyNames = Object.getOwnPropertyNames;
var defineProperty = Object.defineProperty;
var numberPrototype = Number.prototype;
var symbolIterator = Symbol.iterator;
function assertUnreachable() {
    print("Failure: unreachable");
}
function f23() {
    '[object Promise]';
    function f25() {
    }
    const v26 = new Promise(f25);
    Object.prototype.toString.call(v26);
}
f23();
function clear(a32) {
    if ((a32 === null) || ((typeof a32 !== "object") && (typeof a32 !== "function"))) {
        return;
    }
    clear(a32.__proto__);
    var properties = getOwnPropertyNames(a32);
    for (const v47 in properties) {
        if (properties[v47] === "toString") {
            continue;
        }
        clearProp(a32, properties[v47]);
    }
}
function clearProp(a55, a56) {
    var poisoned = { caller: 0, callee: 0, arguments: 0 };
    try {
        var x = a55[a56];
        a55[a56] = undefined;
        clear(x);
    } catch(e66) {
    }
}
var globals = Object.getOwnPropertyNames(this);
const v76 = {
    Promise: true,
    TypeError: true,
    String: true,
    JSON: true,
    Error: true,
    MjsUnitAssertionError: true,
};
var whitelist = v76;
for (const v78 in globals) {
    var name = globals[v78];
    if ((name in whitelist) || (name[0] === name[0].toLowerCase())) {
        delete globals[v78];
    }
}
for (const v88 in globals) {
    if (globals[v88]) {
        clearProp(this, globals[v88]);
    }
}
function defer(a94) {
    var resolve;
    var reject;
    const v99 = (a100, a101) => {
        resolve = a100;
        reject = a101;
    };
    const v102 = new a94(v99);
    var promise = v102;
    return { promise: promise, resolve: resolve, reject: reject };
}
var asyncAssertsExpected = 0;
function assertAsyncRan() {
    ++asyncAssertsExpected;
}
function assertAsync(a110, a111) {
    if (a110) {
        print(a111, "succeeded");
    } else {
        print(a111 + " FAILED!");
    }
    --asyncAssertsExpected;
}
function assertLater(a121, a122) {
    a121();
    ++asyncAssertsExpected;
    var iterations = 0;
    function runAssertion() {
        if (a121()) {
            print(a122, "succeeded");
            --asyncAssertsExpected;
        } else {
            if (iterations++ < 10) {
            } else {
                print(a122 + " FAILED!");
            }
        }
    }
}
function assertAsyncDone(a141) {
    var iteration = a141 || 0;
    if (asyncAssertsExpected === 0) {
    } else {
        if (iteration > 10) {
            "all... " + asyncAssertsExpected;
        } else {
            iteration + 1;
        }
    }
}
function f156() {
    function f157() {
        function f158() {
        }
        Promise(f158);
    }
    f157();
}
f156();
function f164() {
    function f166() {
    }
    const v167 = new Promise(f166);
    v167 instanceof Promise;
}
f164();
function f170() {
    function f171() {
        new Promise(5);
    }
    f171();
}
f170();
function f178() {
    function f179() {
        function f181() {
            throw 5;
        }
        new Promise(f181);
    }
    f179();
}
f178();
function f186() {
    function f187(a188) {
        a188 === 5;
    }
    function f193() {
        throw 5;
    }
    const v195 = new Promise(f193);
    v195.then(assertUnreachable, f187);
}
f186();
function f198() {
    Promise.resolve(5);
    function f202(a203) {
        a203 === 5;
    }
    Promise.resolve(5).then(undefined, assertUnreachable).then(f202, assertUnreachable);
}
f198();
function f213() {
    function f214(a215) {
        a215 === 5;
    }
    Promise.resolve(5).then(undefined, assertUnreachable).then(f214, assertUnreachable);
    function f225(a226) {
        a226 === 6;
    }
    Promise.resolve(6).then(null, assertUnreachable).then(f225, assertUnreachable);
}
f213();
function f236() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f245(a246) {
        a246 === 5;
    }
    p3.then(f245, assertUnreachable);
}
f236();
function f252() {
    var p1 = Promise.reject(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f261(a262) {
        a262 === 5;
    }
    p3.then(assertUnreachable, f261);
}
f252();
function f268() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f277(a278) {
        a278 === 5;
    }
    function f282(a283) {
        return a283;
    }
    p3.then(f282, assertUnreachable).then(f277, assertUnreachable);
}
f268();
function f287() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f296(a297) {
        a297 === 6;
    }
    function f301(a302) {
        return Promise.resolve(a302 + 1);
    }
    p3.then(f301, assertUnreachable).then(f296, assertUnreachable);
}
f287();
function f309() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f318(a319) {
        a319 === 6;
    }
    function f323(a324) {
        throw 6;
    }
    p3.then(f323, assertUnreachable).then(assertUnreachable, f318);
}
f309();
function f329() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f338(a339) {
        a339 === 6;
    }
    function f343(a344) {
        throw 6;
    }
    p3.then(f343, assertUnreachable).then(assertUnreachable, f338);
}
f329();
function f349() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f358(a359) {
        a359 === 6;
    }
    function f363(a364) {
        throw 6;
    }
    p3.then(f363, assertUnreachable).then(assertUnreachable, f358);
}
f349();
function f369() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f378(a379) {
        a379 === 6;
    }
    function f383(a384) {
        throw 6;
    }
    p3.then(f383, assertUnreachable).then(assertUnreachable, f378);
}
f369();
function f389() {
    var p1 = Promise.resolve(5);
    function f394(a395, a396) {
        a395(p1);
    }
    var p2 = { then: f394 };
    var p3 = Promise.resolve(p2);
    function f402(a403) {
        a403 === 5;
    }
    p3.then(f402, assertUnreachable);
}
f389();
function f409() {
    var p1 = Promise.resolve(5);
    function f414(a415, a416) {
        a415(p1);
    }
    var p2 = { then: f414 };
    var p3 = Promise.resolve(p2);
    function f422(a423) {
        a423 === 5;
    }
    p3.then(f422, assertUnreachable);
}
f409();
function f429() {
    var p1 = Promise.reject(5);
    function f434(a435, a436) {
        a435(p1);
    }
    var p2 = { then: f434 };
    var p3 = Promise.resolve(p2);
    function f442(a443) {
        a443 === 5;
    }
    p3.then(assertUnreachable, f442);
}
f429();
function f449() {
    var p1 = Promise.reject(5);
    function f454(a455, a456) {
        a455(p1);
    }
    var p2 = { then: f454 };
    var p3 = Promise.resolve(p2);
    function f462(a463) {
        a463 === 5;
    }
    p3.then(assertUnreachable, f462);
}
f449();
function f469() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f479(a480) {
        a480 === 5;
    }
    p3.then(f479, assertUnreachable);
    deferred.resolve(5);
}
f469();
function f488() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f498(a499) {
        a499 === 5;
    }
    p3.then(f498, assertUnreachable);
    deferred.resolve(5);
}
f488();
function f507() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f517(a518) {
        a518 === 5;
    }
    p3.then(assertUnreachable, f517);
    deferred.reject(5);
}
f507();
function f526() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(p1);
    var p3 = Promise.resolve(p2);
    function f536(a537) {
        a537 === 5;
    }
    p3.then(assertUnreachable, f536);
    deferred.reject(5);
}
f526();
function f545() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = p1.then(1, 2);
    function f555(a556) {
        a556 === 5;
    }
    p2.then(f555, assertUnreachable);
    deferred.resolve(5);
}
f545();
function f564() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = p1.then(1, 2);
    function f574(a575) {
        a575 === 5;
    }
    p2.then(assertUnreachable, f574);
    deferred.reject(5);
}
f564();
function f583() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    function f589(a590, a591) {
        a590(p1);
    }
    var p2 = { then: f589 };
    var p3 = Promise.resolve(p2);
    function f597(a598) {
        a598 === 5;
    }
    p3.then(f597, assertUnreachable);
    deferred.resolve(5);
}
f583();
function f606() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    function f612(a613, a614) {
        a613(p1);
    }
    var p2 = { then: f612 };
    var p3 = Promise.resolve(p2);
    function f620(a621) {
        a621 === 5;
    }
    p3.then(f620, assertUnreachable);
    deferred.resolve(5);
}
f606();
function f629() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    function f635(a636, a637) {
        a636(p1);
    }
    var p2 = { then: f635 };
    var p3 = Promise.resolve(p2);
    function f643(a644) {
        a644 === 5;
    }
    p3.then(assertUnreachable, f643);
    deferred.reject(5);
}
f629();
function f652() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    function f658(a659, a660) {
        a659(p1);
    }
    var p2 = { then: f658 };
    var p3 = Promise.resolve(p2);
    function f666(a667) {
        a667 === 5;
    }
    p3.then(assertUnreachable, f666);
    deferred.reject(5);
}
f652();
function f675() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f686(a687) {
        a687 === 5;
    }
    p3.then(f686, assertUnreachable);
    deferred.resolve(p2);
}
f675();
function f694() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f705(a706) {
        a706 === 5;
    }
    p3.then(f705, assertUnreachable);
    deferred.resolve(p2);
}
f694();
function f713() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f724(a725) {
        a725 === 5;
    }
    p3.then(assertUnreachable, f724);
    deferred.reject(5);
}
f713();
function f733() {
    var p1 = Promise.resolve(5);
    var p2 = Promise.resolve(p1);
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f744(a745) {
        a745 === 5;
    }
    p3.then(assertUnreachable, f744);
    deferred.reject(5);
}
f733();
function f753() {
    var p1 = Promise.resolve(5);
    function f758(a759, a760) {
        a759(p1);
    }
    var p2 = { then: f758 };
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f768(a769) {
        a769 === 5;
    }
    p3.then(f768, assertUnreachable);
    deferred.resolve(p2);
}
f753();
function f776() {
    var p1 = Promise.resolve(5);
    function f781(a782, a783) {
        a782(p1);
    }
    var p2 = { then: f781 };
    var deferred = defer(Promise);
    var p3 = deferred.promise;
    function f791(a792) {
        a792 === 5;
    }
    p3.then(f791, assertUnreachable);
    deferred.resolve(p2);
}
f776();
function f799() {
    var p1 = Promise.resolve(0);
    function f804(a805) {
        return p2;
    }
    var p2 = p1.then(f804, assertUnreachable);
    function f809(a810) {
        a810 instanceof TypeError;
    }
    p2.then(assertUnreachable, f809);
}
f799();
function f816() {
    var p1 = Promise.resolve(0);
    function f821(a822) {
        return p2;
    }
    var p2 = p1.then(f821, assertUnreachable);
    function f826(a827) {
        a827 instanceof TypeError;
    }
    p2.then(assertUnreachable, f826);
}
f816();
function f833() {
    var deferred = defer(Promise);
    var p = deferred.promise;
    deferred.resolve(p);
    function f840(a841) {
        a841 instanceof TypeError;
    }
    p.then(assertUnreachable, f840);
}
f833();
function f847() {
    var deferred = defer(Promise);
    var p = deferred.promise;
    deferred.resolve(p);
    function f854(a855) {
        a855 instanceof TypeError;
    }
    p.then(assertUnreachable, f854);
}
f847();
function f861() {
    function f862(a863) {
        a863.length === 0;
    }
    Promise.all([]).then(f862, assertUnreachable);
}
f861();
function f873() {
    function testPromiseAllNonIterable(a875) {
        function f876(a877) {
            a877 instanceof TypeError;
        }
        Promise.all(a875).then(assertUnreachable, f876);
    }
    testPromiseAllNonIterable(null);
    testPromiseAllNonIterable(undefined);
    testPromiseAllNonIterable({});
    testPromiseAllNonIterable(42);
}
f873();
function f893() {
    function f894(a895) {
        a895 instanceof TypeError;
    }
    const v901 = {
        [symbolIterator]() {
            return null;
        },
    };
    Promise.all(v901).then(assertUnreachable, f894);
}
f893();
function f906() {
    var deferred = defer(Promise);
    var p = deferred.promise;
    function* f() {
        yield 1;
        yield p;
        yield 3;
    }
    function f918(a919) {
        a919.length === 3;
        a919[0] === 1;
        a919[1] === 2;
        a919[2] === 3;
    }
    Promise.all(f()).then(f918, assertUnreachable);
    deferred.resolve(2);
}
f906();
function f942() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function f956(a957) {
        a957.length === 3;
        a957[0] === 1;
        a957[1] === 2;
        a957[2] === 3;
    }
    Promise.all([p1,p2,p3]).then(f956, assertUnreachable);
    deferred1.resolve(1);
    deferred3.resolve(3);
    deferred2.resolve(2);
}
f942();
function f984() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(2);
    var p3 = defer(Promise).promise;
    Promise.all([p1,p2,p3]).then(assertUnreachable, assertUnreachable);
    deferred.resolve(1);
}
f984();
function f1002() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function f1016(a1017) {
        a1017 === 2;
    }
    Promise.all([p1,p2,p3]).then(assertUnreachable, f1016);
    deferred1.resolve(1);
    deferred3.resolve(3);
    deferred2.reject(2);
}
f1002();
function f1031() {
    'use strict';
    var getCalls = 0;
    var funcCalls = 0;
    var nextCalls = 0;
    function f1038() {
        'number';
        typeof this;
        getCalls++;
        function f1042() {
            'number';
            typeof this;
            funcCalls++;
            var n = this;
            var i = 0;
            const v1055 = {
                next() {
                    nextCalls++;
                    const v1052 = i++;
                    const v1053 = i > n;
                    return { value: v1052, done: v1053 };
                },
            };
            return v1055;
        }
        return f1042;
    }
    defineProperty(numberPrototype, symbolIterator, { get: f1038, configurable: true });
    function f1059(a1060) {
        a1060.length === 3;
        a1060[0] === 0;
        a1060[1] === 1;
        a1060[2] === 2;
    }
    Promise.all(3).then(f1059, assertUnreachable);
    delete numberPrototype[symbolIterator];
    3 + 1;
}
f1031();
function f1088() {
    Promise.race([]).then(assertUnreachable, assertUnreachable);
}
f1088();
function f1094() {
    var p1 = Promise.resolve(1);
    var p2 = Promise.resolve(2);
    var p3 = Promise.resolve(3);
    function f1105(a1106) {
        a1106 === 1;
    }
    Promise.race([p1,p2,p3]).then(f1105, assertUnreachable);
}
f1094();
function f1114() {
    var p1 = Promise.resolve(1);
    var p2 = Promise.resolve(2);
    var p3 = Promise.resolve(3);
    function f1125(a1126) {
        a1126 === 0;
    }
    Promise.race([0,p1,p2,p3]).then(f1125, assertUnreachable);
}
f1114();
function f1135() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function f1149(a1150) {
        a1150 === 3;
    }
    Promise.race([p1,p2,p3]).then(f1149, assertUnreachable);
    deferred3.resolve(3);
    deferred1.resolve(1);
}
f1135();
function f1162() {
    var deferred = defer(Promise);
    var p1 = deferred.promise;
    var p2 = Promise.resolve(2);
    var p3 = defer(Promise).promise;
    function f1174(a1175) {
        a1175 === 2;
    }
    Promise.race([p1,p2,p3]).then(f1174, assertUnreachable);
    deferred.resolve(1);
}
f1162();
function f1185() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function f1199(a1200) {
        a1200 === 3;
    }
    Promise.race([p1,p2,p3]).then(f1199, assertUnreachable);
    deferred3.resolve(3);
    deferred1.reject(1);
}
f1185();
function f1212() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function f1226(a1227) {
        a1227 === 3;
    }
    Promise.race([p1,p2,p3]).then(assertUnreachable, f1226);
    deferred3.reject(3);
    deferred1.resolve(1);
}
f1212();
function f1239() {
    function testPromiseRaceNonIterable(a1241) {
        function f1242(a1243) {
            a1243 instanceof TypeError;
        }
        Promise.race(a1241).then(assertUnreachable, f1242);
    }
    testPromiseRaceNonIterable(null);
    testPromiseRaceNonIterable(undefined);
    testPromiseRaceNonIterable({});
    testPromiseRaceNonIterable(42);
}
f1239();
function f1259() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function* f() {
        yield p1;
        yield p2;
        yield p3;
    }
    function f1277(a1278) {
        a1278 === 3;
    }
    Promise.race(f()).then(f1277, assertUnreachable);
    deferred3.resolve(3);
    deferred1.reject(1);
}
f1259();
function f1290() {
    var deferred1 = defer(Promise);
    var p1 = deferred1.promise;
    var deferred2 = defer(Promise);
    var p2 = deferred2.promise;
    var deferred3 = defer(Promise);
    var p3 = deferred3.promise;
    function* f() {
        yield p1;
        yield p2;
        yield p3;
    }
    function f1308(a1309) {
        a1309 === 3;
    }
    Promise.race(f()).then(assertUnreachable, f1308);
    deferred3.reject(3);
    deferred1.resolve(1);
}
f1290();
function f1321() {
    'use strict';
    var getCalls = 0;
    var funcCalls = 0;
    var nextCalls = 0;
    function f1328() {
        'number';
        typeof this;
        getCalls++;
        function f1332() {
            'number';
            typeof this;
            funcCalls++;
            var n = this;
            var i = 0;
            const v1345 = {
                next() {
                    nextCalls++;
                    const v1342 = i++;
                    const v1343 = i > n;
                    return { value: v1342, done: v1343 };
                },
            };
            return v1345;
        }
        return f1332;
    }
    defineProperty(numberPrototype, symbolIterator, { get: f1328, configurable: true });
    function f1349(a1350) {
        a1350 === 0;
    }
    Promise.race(3).then(f1349, assertUnreachable);
    delete numberPrototype[symbolIterator];
    3 + 1;
}
f1321();
function f1365() {
    var log;
    function MyPromise(a1369) {
        log += "n";
        function f1372(a1373, a1374) {
            function f1375(a1376) {
                log += "x" + a1376;
                a1373(a1376);
            }
            function f1380(a1381) {
                log += "r" + a1381;
                a1374(a1381);
            }
            a1369(f1375, f1380);
        }
        const v1386 = new Promise(f1372);
        var promise = v1386;
        promise.__proto__ = MyPromise.prototype;
        return promise;
    }
    MyPromise.__proto__ = Promise;
    function f1390() {
        log += "d";
        return call(this.__proto__.defer, this);
    }
    MyPromise.defer = f1390;
    const v1397 = Promise.prototype;
    const t905 = MyPromise.prototype;
    t905.__proto__ = v1397;
    function f1399(a1400, a1401) {
        log += "c";
        return call(this.__proto__.__proto__.then, this, a1400, a1401);
    }
    const t911 = MyPromise.prototype;
    t911.then = f1399;
    log = "";
    function f1411(a1412, a1413) {
        a1412(1);
    }
    const v1416 = new MyPromise(f1411);
    var p1 = v1416;
    function f1418(a1419, a1420) {
        a1420(2);
    }
    const v1423 = new MyPromise(f1418);
    var p2 = v1423;
    var d3 = defer(MyPromise);
    d3.promise instanceof Promise;
    d3.promise instanceof MyPromise;
    log === "nx1nr2n";
    log = "";
    var p4 = MyPromise.resolve(4);
    var p5 = MyPromise.reject(5);
    p4 instanceof MyPromise;
    p4 instanceof MyPromise;
    p5 instanceof MyPromise;
    p5 instanceof MyPromise;
    d3.resolve(3);
    log === "nx4nr5x3";
    log = "";
    var d6 = defer(MyPromise);
    function f1459() {
    }
    function f1460(a1461) {
        function f1462(a1463) {
            a1463(a1461);
        }
        const v1465 = new Promise(f1462);
        return v1465;
    }
    d6.promise.then(f1460).then(f1459);
    d6.resolve(6);
    log === "ncncnx6";
    log = "";
    Promise.all([11,Promise.resolve(12),13,MyPromise.resolve(14),15,16]);
    log === "nx14";
    log = "";
    MyPromise.all([21,Promise.resolve(22),23,MyPromise.resolve(24),25,26]);
    log === "nx24nnx21cnnx[object Promise]cnnx23cncnnx25cnnx26cn";
}
f1365();
function f1503() {
    'use strict';
    class C1505 extends Promise {
    }
    class C1506 extends C1505 {
    }
    class C1507 extends C1506 {
    }
    C1507.constructor = C1506;
    C1505.resolve(C1505.resolve()).constructor === C1505;
    C1505.resolve(Promise.resolve()).constructor === C1505;
    C1505.resolve(C1506.resolve()).constructor === C1505;
    var vow = C1506.resolve();
    vow.constructor = C1507;
    C1507.resolve(vow) === vow;
}
f1503();
function f1529() {
    var thenCalled = false;
    var resolve;
    function f1535(a1536) {
        resolve = a1536;
    }
    const v1537 = new Promise(f1535);
    var promise = v1537;
    const v1543 = {
        then() {
            thenCalled = true;
            const v1542 = new Error();
            throw v1542;
        },
    };
    resolve(v1543);
    function f1545() {
        return thenCalled;
    }
    f1545();
}
f1529();
function f1549() {
    var calledWith;
    var resolve;
    function f1555(a1556) {
        resolve = a1556;
    }
    const v1557 = new Promise(f1555);
    var p1 = v1557;
    function f1559(a1560) {
        const v1567 = {
            then(a1562, a1563) {
                const v1565 = {
                    then() {
                        calledWith = a1560;
                    },
                };
                a1562(v1565);
            },
        };
        return v1567;
    }
    var p2 = p1.then(f1559);
    const v1574 = {
        then(a1571) {
            a1571(2);
        },
    };
    resolve(v1574);
    function f1576() {
        return calledWith === 2;
    }
    f1576();
}
f1549();
function f1582() {
    var p = Promise.resolve();
    var callCount = 0;
    function f1589() {
        ++callCount;
        return Promise;
    }
    defineProperty(p, "constructor", { get: f1589 });
    p.then();
}
f1582();
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
// #FailureMessage Object: 0x7fc590ff7700
// ==== C stack trace ===============================
// 
//     v8/out/fuzzbuild/d8(+0xbd9a82) [0x557d23d73a82]
//     v8/out/fuzzbuild/d8(+0xbd82a7) [0x557d23d722a7]
//     v8/out/fuzzbuild/d8(+0xbcc546) [0x557d23d66546]
//     v8/out/fuzzbuild/d8(+0xbcbd95) [0x557d23d65d95]
//     v8/out/fuzzbuild/d8(+0x26e513e) [0x557d2587f13e]
//     v8/out/fuzzbuild/d8(+0x2ab07a6) [0x557d25c4a7a6]
//     v8/out/fuzzbuild/d8(+0x26423eb) [0x557d257dc3eb]
//     v8/out/fuzzbuild/d8(+0x25f0150) [0x557d2578a150]
//     v8/out/fuzzbuild/d8(+0x25ecfd8) [0x557d25786fd8]
//     v8/out/fuzzbuild/d8(+0x23435d8) [0x557d254dd5d8]
//     v8/out/fuzzbuild/d8(+0x233a7e9) [0x557d254d47e9]
//     v8/out/fuzzbuild/d8(+0xdb8cb2) [0x557d23f52cb2]
//     v8/out/fuzzbuild/d8(+0x233d588) [0x557d254d7588]
//     v8/out/fuzzbuild/d8(+0xbdd14f) [0x557d23d7714f]
//     v8/out/fuzzbuild/d8(+0xbe8925) [0x557d23d82925]
//     v8/out/fuzzbuild/d8(+0xbd5650) [0x557d23d6f650]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x94ac3) [0x7fc5c15ecac3]
//     /lib/x86_64-linux-gnu/libc.so.6(+0x126850) [0x7fc5c167e850]
// Received signal 6
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 145ms
