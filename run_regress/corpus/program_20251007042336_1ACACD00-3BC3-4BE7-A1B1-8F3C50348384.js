var litObj0;
var litObj1;
function test0() {
    var obj1 = {};
    function f10(a11) {
        function f12(a13) {
            if (a13 !== undefined) {
                print((((a13.prop0 + " ") + a13.prop1) + " ") + a13.prop2);
            }
        }
        var fPolyProp = f12;
        fPolyProp(litObj0);
        fPolyProp(litObj1);
        return 1 + a11;
    }
    obj1.prop0 = f10(1.1, 1, 1.1);
}
test0();
runningJITtedCode = true;
test0();
