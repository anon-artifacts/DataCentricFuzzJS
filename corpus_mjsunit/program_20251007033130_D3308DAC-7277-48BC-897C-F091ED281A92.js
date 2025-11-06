function f0() {
}
var BUGNUMBER = 351973;
var summary = "GC hazard with unrooted ids in Object.toSource";
var actual = "No Crash";
var expect = "No Crash";
test();
function test() {
    f0(BUGNUMBER);
    f0(summary);
    function removeAllProperties(a15) {
        for (const v16 in a15) {
            delete a15?.[a15];
        }
        for (let i19 = 0; i19 != (50 * 1000); ++i19) {
            const v28 = i19 + 0.2;
            let v30;
            try { v30 = Math.sqrt(v28); } catch (e) {}
            var tmp = v30;
            tmp = 0;
        }
        if (typeof gc == "function") {
            try { gc(); } catch (e) {}
        }
    }
    function run_test() {
        var o = {};
        function f41() {
            try { removeAllProperties(o); } catch (e) {}
        }
        o.first = { toSource: f41 };
        for (let i45 = 0; i45 != 10; ++i45) {
            o[Math.sqrt(i45 + 0.1)] = 1;
        }
        let v56;
        try { v56 = o.toSource(); } catch (e) {}
        return v56;
    }
    f0(run_test());
    f0(expect, actual, summary);
}
