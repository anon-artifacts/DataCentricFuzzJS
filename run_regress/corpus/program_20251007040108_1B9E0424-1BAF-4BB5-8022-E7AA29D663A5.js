function f0() {
}
var absent = {};
function f4() {
}
var getterValues = [absent,,f4];
function f8() {
}
var setterValues = [absent,,f8];
var configurableValues = [absent,true,false];
var enumerableValues = [absent,true,false];
function CreateDescriptor(a20, a21, a22, a23) {
    var descriptor = {};
    if (a20 !== absent) {
        descriptor.get = a20;
    }
    if (a21 !== absent) {
        descriptor.set = a21;
    }
    if (a23 !== absent) {
        descriptor.configurable = a23;
    }
    if (a22 !== absent) {
        descriptor.enumerable = a22;
    }
    return descriptor;
}
function f30(a31) {
    function f32(a33) {
        function f34(a35) {
            function f36(a37) {
                var descriptor = CreateDescriptor(a31, a33, a35, a37);
                if (!(("get" in descriptor) || ("set" in descriptor))) {
                    return;
                }
                function f46() {
                    const v47 = [];
                    try { Object.defineProperty(v47, "length", descriptor); } catch (e) {}
                }
                f46();
            }
            configurableValues.forEach(f36);
        }
        enumerableValues.forEach(f34);
    }
    setterValues.forEach(f32);
}
getterValues.forEach(f30);
if (typeof f0 === "function") {
    f0(0, 0);
}
