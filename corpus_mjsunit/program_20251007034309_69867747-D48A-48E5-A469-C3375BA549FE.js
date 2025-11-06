var runningJITtedCode = false;
function test0() {
    function makeArrayLength(a4) {
        if (((((a4 < 1) || (a4 > 4294967295)) || (a4 != a4)) || isNaN(a4)) || !isFinite(a4)) {
            return 100;
        } else {
            return Math.floor(a4) & 65535;
        }
    }
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f30(a31) {
        if (runningJITtedCode) {
            obj0.length = -obj1.length;
        }
        let v34 = obj0.length;
        ++v34;
    }
    var func2 = f30;
    var floatary = [-1.5,-0.5,-0,1.5,12.987,12.123,100.33,8.8,5.5,44.66,42.24,124.07,-0.99,56.65,42.24];
    var intfloatary = [1,4,-1,-6,-0,+0,55,-100,2.56,-3.14,6.6,42,2.3,67,1.97,-24,77.99];
    var intary = [4,66,767,-100,0,1213,34,42,55,-123,567,77,-234,88,11,-66];
    var a = 1;
    var b = 1;
    var c = 1;
    var d = 1;
    var e = 1;
    obj1.length = 2147483647;
    arrObj0.prop0 = 1;
    arrObj0.length = makeArrayLength(1);
    function _array2iterate(a121) {
        for (const v122 in a121) {
            if (v122.indexOf("method") == 0) {
                continue;
            }
            if (a121[v122] instanceof Array) {
                _array2iterate(a121[v122]);
                (intary = intary.concat((obj1 = arrObj0).length, arrObj0.prop0, e, b, obj0.length, arrObj0.prop0, obj1.prop0))[20];
                function f139(a140) {
                    return (a140 + arrObj0.length) < obj1.prop0;
                }
                var v502047 = intary.every(f139, this);
                function f148(a149) {
                    return 1;
                }
                ary = intfloatary.filter(f148);
                function f153(a154, a155) {
                    let v156 = intary[a155];
                    v156++;
                }
                v502047 = intary.forEach(f153);
                v502047 = ary.indexOf(b);
                v502047 = intfloatary.lastIndexOf(obj0.length, 5);
                v502047 = ary.join();
                function f165(a166) {
                    return d * a166;
                }
                v502047 = intary.map(f165);
                function f169(a170) {
                    obj1.length = a170 + obj0.length;
                    return obj1.length;
                }
                v502047 = intfloatary.reduce(f169, obj0.prop0);
                v502047 = intfloatary.reverse();
                v502047 = ary.unshift(obj0.length, e, e, a, c, d, e);
                v502047 = ary.shift();
                v502047 = floatary.slice(4, -3);
                function f184(a185) {
                    return a185 < a;
                }
                v502047 = ary.some(f184);
                v502047 = intfloatary.sort();
                v502047 = Array.isArray(floatary);
                v502047 = floatary.splice(obj0.length, d, e, d, e, e, a);
            } else {
                b += a121[v122];
            }
        }
    }
    _array2iterate([[1],[1],[1,1,[func2.call(obj1, 1),func2.call(obj1, 1),1,[arrObj0.length,1,[arrObj0.length]]]]]);
}
test0();
runningJITtedCode = true;
test0();
print("pass");
