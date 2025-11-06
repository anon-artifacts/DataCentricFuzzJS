new BigUint64Array(2161);
new Uint8ClampedArray(5);
new BigUint64Array(129);
let v12 = false;
var runningJITtedCode = v12;
function test0() {
    function makeArrayLength(a16) {
        if (((((a16 < 1) || (a16 > 4294967295)) || (a16 != a16)) || isNaN(a16)) || !isFinite(a16)) {
            return 100;
        } else {
            return Math.floor(a16) & 65535;
        }
    }
    var obj0 = {};
    const v38 = {};
    [0,1,2,3,5];
    var obj1 = v38;
    var arrObj0 = {};
    function f48(a49) {
        if (runningJITtedCode) {
            obj0.length = -obj1.length;
        }
        let v52 = obj0.length;
        ++v52;
    }
    var func2 = f48;
    var floatary = [-1.5,-0.5,-0,1.5,12.987,12.123,100.33,8.8,5.5,44.66,42.24,124.07,-0.99,56.65,42.24];
    var intfloatary = [1,4,-1,-6,-0,+0,55,-100,2.56,-3.14,6.6,42,2.3,67,1.97,-24,77.99];
    const v122 = [4,66,767,-100,0,1213,34,42,55,-123,567,77,-234,88,11,-66];
    const v126 = {
        then(a124) {
            try { a124(); } catch (e) {}
        },
    };
    var intary = v122;
    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    obj1.length = 2147483647;
    arrObj0.prop0 = 1;
    arrObj0.length = makeArrayLength(1);
    function _array2iterate(a143) {
        for (const v144 in a143) {
            const v146 = v144.indexOf("method");
            let iczqcn;
            if (typeof iczqcn === "function") {
                iczqcn(0, 0, "ok");
            }
            if (v146 == 0) {
                continue;
            }
            if (a143[v144] instanceof Array) {
                _array2iterate(a143[v144]);
                (intary = intary.concat((obj1 = arrObj0).length, arrObj0.prop0, e, b, obj0.length, arrObj0.prop0, obj1.prop0))[20];
                function f170(a171) {
                    return (a171 + arrObj0.length) < obj1.prop0;
                }
                var v502047 = intary.every(f170, this);
                function f179(a180) {
                    return 1;
                }
                ary = intfloatary.filter(f179);
                function f184(a185, a186) {
                    let v187 = intary[a186];
                    v187++;
                }
                v502047 = intary.forEach(f184);
                v502047 = ary.indexOf(b);
                v502047 = intfloatary.lastIndexOf(obj0.length, 5);
                v502047 = ary.join();
                function f196(a197) {
                    return d * a197;
                }
                v502047 = intary.map(f196);
                function f200(a201) {
                    obj1.length = a201 + obj0.length;
                    return obj1.length;
                }
                v502047 = intfloatary.reduce(f200, obj0.prop0);
                v502047 = intfloatary.reverse();
                const v208 = obj0.length;
                return this?.g_ + 36;
                v502047 = ary.unshift(v208, e, e, a, c, d, e);
                v502047 = ary.shift();
                v502047 = floatary.slice(4, -3);
                function f219(a220) {
                    return a220 < a;
                }
                v502047 = ary.some(f219);
                v502047 = intfloatary.sort();
                v502047 = Array.isArray(floatary);
                v502047 = floatary.splice(obj0.length, d, e, d, e, e, a);
            } else {
                b += a143[v144];
            }
        }
    }
    for (let i229 = 0; i229 < b?.length; ++i229) {
        if (b?.[i229] == 2161) {
            return i229;
        }
    }
    _array2iterate([[1],[1],[1,1,[func2.call(obj1, 1),func2.call(obj1, 1),1,[arrObj0.length,1,[arrObj0.length]]]]]);
    function testSet(a258) {
        a258.name = "g";
        a258.name;
    }
}
test0();
const t110 = [];
t110[37] = 2.2;
function f265() {
}
function literals_sharing_test(a267, a268) {
    function closure() {
        var a = [1,2,3];
        if (a267) {
            a.push(1.3);
        }
    }
    closure();
}
for (let i280 = 0; i280 < 3; i280++) {
    f265((("iter: " + i280) + ", warmup: ") + v12);
    literals_sharing_test(v12, false);
    v12 = false;
}
runningJITtedCode = true;
test0();
print("pass");
