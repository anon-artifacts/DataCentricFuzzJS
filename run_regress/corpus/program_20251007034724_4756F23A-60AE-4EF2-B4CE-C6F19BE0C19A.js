function f0() {
    'use strict';
    var it = ([])[Symbol.iterator]();
    while (it) {
        if (it.hasOwnProperty("next")) {
            delete it.next;
        }
        it = Object.getPrototypeOf(it);
    }
    var bind = Function.prototype.bind;
    var uncurryThis = bind.bind(bind.call);
    var bindFn = uncurryThis(bind);
    var applyFn = uncurryThis(bind.apply);
    function test() {
        print("here");
    }
    var sliceFn = uncurryThis(([]).slice);
    function addAll(a32) {
        var args = sliceFn(arguments, 0);
        var result = this;
        for (let i40 = 0; i40 < args.length; i40++) {
            result += args[i40];
        }
        return result;
    }
    if (applyFn(addAll, 3, [4,5,6]) !== 18) {
        throw "incorrect result";
    }
}
f0();
