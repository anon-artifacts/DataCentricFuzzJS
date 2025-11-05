function TestMaterializeTargetOfInterpretedFrame() {
    function f(a2) {
        function g() {
            return a2 + 1;
        }
        return g();
    }
    f(23);
    f(42);
    f(65);
}
TestMaterializeTargetOfInterpretedFrame();
function TestMaterializeTargetOfArgumentsAdaptorFrame() {
    function f(a19) {
        function g(a21, a22, a23) {
            return a19 + 1;
        }
        return g();
    }
    f(23);
    f(42);
    f(65);
}
TestMaterializeTargetOfArgumentsAdaptorFrame();
function TestMaterializeTargetOfConstructStubFrame() {
    function f(a39) {
        function g() {
            this.val = a39 + 1;
        }
        const v44 = new g();
        return v44;
    }
    const v46 = { val: 24 };
    f(23);
    const v50 = { val: 43 };
    f(42);
    const v54 = { val: 66 };
    f(65);
}
TestMaterializeTargetOfConstructStubFrame();
