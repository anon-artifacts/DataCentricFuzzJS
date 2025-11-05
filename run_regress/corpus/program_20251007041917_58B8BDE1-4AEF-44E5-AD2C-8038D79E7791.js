function ApplyArgumentsDeoptInReceiverMapCheck() {
    function invoker(a2, a3) {
        function XXXXX() {
            const v6 = a3(this);
            var res = a2.apply({ fffffff: v6 }, arguments);
            return res;
        }
        return XXXXX;
    }
    var y = invoker(m, selfOf);
    function selfOf(a16) {
        var sssss = a16.self_;
        return sssss;
    }
    function m() {
        return this.fffffff;
    }
    y.apply({ self_: 3 });
    y.apply({ self_: 3 });
    y.apply({ self_: 3 });
    y.apply({ self_: 3, uuu: 4 });
}
ApplyArgumentsDeoptInReceiverMapCheck();
function ApplyArgumentsDeoptInReceiverExplicit() {
    function f() {
        return this + 21;
    }
    function deopt() {
        return 21;
    }
    function XXXXX() {
        return f.apply(deopt(), arguments);
    }
    XXXXX();
    XXXXX();
    XXXXX();
    XXXXX();
}
ApplyArgumentsDeoptInReceiverExplicit();
