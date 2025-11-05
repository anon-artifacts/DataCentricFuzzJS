function test0() {
    var obj0 = {};
    var obj1 = {};
    function f5() {
        function _oo2constructor() {
            ary.reverse();
            function f9() {
            }
            this.func1 = f9;
        }
        var _oo2obj1 = _oo2constructor();
        const v13 = new _oo2constructor();
        var _oo2obj2 = v13;
        _oo2obj2.func1(ary.pop());
    }
    var func1 = f5;
    function f19() {
        return func1(func1());
    }
    var func2 = f19;
    function f23() {
    }
    var func3 = f23;
    obj0.method1 = func3;
    obj1.method0 = func2;
    const v27 = new Array(10);
    var ary = v27;
    var IntArr1 = [];
    ary[0] = 1638249354;
    var v11 = obj0.method1();
    delete ary[v11];
    function func12() {
    }
    var uniqobj8 = func12(IntArr1.unshift(obj1.method0(), func1()));
    function f41() {
    }
    print(ary.slice().reduce(f41));
    print(ary.slice());
}
test0();
test0();
