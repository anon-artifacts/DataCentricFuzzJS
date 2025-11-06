try {
    function f0() {
    }
    function write(a2) {
        try { f0(a2); } catch (e) {}
    }
    function RunTest(a5, a6) {
        var testFunction = a5?.[0];
        var testScenario = a5?.[1];
        testScenario = ((" (test " + a6) + "): ") + testScenario;
        try { write(testScenario); } catch (e) {}
        try {
            let v17;
            try { v17 = testFunction(); } catch (e) {}
            var result = v17;
            if (result == true) {
                try { write("PASS"); } catch (e) {}
            }
        } catch(e23) {
            var resultString = "FAILED" + testScenario;
            const v30 = (resultString + " :: ") + e23?.message;
            try { write(v30); } catch (e) {}
        }
    }
    function RunAllTests() {
        for (let i34 = 0; i34 < testList?.length; ++i34) {
            const v42 = testList?.[i34];
            const v44 = i34 + 1;
            try { RunTest(v42, v44); } catch (e) {}
        }
    }
    var testList = [[Test1,"Object literal get set property"],[Test2,"Object literal only get or set property"],[Test3,"Object literal multiple setget property"],[Test4,"Object literal parse error check"],[Test5,"Object literal get set function toString"]];
    function Verify(a64, a65, a66) {
        if (a66 != a65) {
            const v75 = (((("Failed: Expected " + a64) + " = ") + a66) + ", got ") + a65;
            try { write(v75); } catch (e) {}
            return false;
        }
        const v85 = (((("Success: Expected " + a64) + " = ") + a66) + ", got ") + a65;
        try { write(v85); } catch (e) {}
        return true;
    }
    try { write("ES 5 Object Literal grammer"); } catch (e) {}
    function Test1(a91) {
        var s1 = "In getter";
        var s2 = "In setter";
        var s3 = "Modified by setter";
        const v101 = {
            get foo() {
                return s1;
            },
            set foo(a100) {
                s2 = s3;
                return s3;
            },
        };
        var o = v101;
        const v104 = o?.foo;
        let v105;
        try { v105 = Verify("o.foo getter", v104, s1); } catch (e) {}
        if (!v105) {
            return false;
        }
        o.foo = 10;
        let v110;
        try { v110 = Verify("o.foo setter", s2, s3); } catch (e) {}
        if (!v110) {
            return false;
        }
        return true;
    }
    function Test2(a115) {
        var s2 = "In setter";
        var s3 = "Modified by setter";
        const v122 = {
            get foo() {
                return 20;
            },
        };
        var o = v122;
        const v125 = o?.foo;
        let v127;
        try { v127 = Verify("o.foo getter", v125, 20); } catch (e) {}
        if (!v127) {
            return false;
        }
        const v132 = {
            set foo(a131) {
                s2 = s3;
            },
        };
        var b = v132;
        b.foo = 10;
        let v136;
        try { v136 = Verify("b.foo", s2, s3); } catch (e) {}
        if (!v136) {
            return false;
        }
        return true;
    }
    function Test3(a141) {
        const v155 = {
            get foo() {
                return this?.value;
            },
            set foo(a145) {
                this.value = a145 * 2;
            },
            get bar() {
                return this?.value * 2;
            },
            set bar(a153) {
                this.value = a153 * a153;
            },
        };
        var o = v155;
        o.foo = 2;
        const v159 = o?.foo;
        let v161;
        try { v161 = Verify("o.foo get after set", v159, 4); } catch (e) {}
        if (!v161) {
            return false;
        }
        o.foo = 3;
        const v166 = o?.foo;
        let v168;
        try { v168 = Verify("o.foo get after set", v166, 6); } catch (e) {}
        if (!v168) {
            return false;
        }
        o.bar = 2;
        const v173 = o?.bar;
        let v175;
        try { v175 = Verify("o.bar get after set", v173, 8); } catch (e) {}
        if (!v175) {
            return false;
        }
        o.bar = 3;
        const v180 = o?.bar;
        let v182;
        try { v182 = Verify("o.bar get after set", v180, 18); } catch (e) {}
        if (!v182) {
            return false;
        }
        return true;
    }
    function Test5() {
        const v192 = {
            get foo() {
                return _foo;
            },
            set foo(a190) {
                _foo = a190;
            },
        };
        var obj = v192;
        let v196;
        try { v196 = Object.getOwnPropertyDescriptor(obj, "foo"); } catch (e) {}
        var fooDescriptor = v196;
        const v200 = "" + fooDescriptor?.get;
        try { f0(v200); } catch (e) {}
        const v204 = "" + fooDescriptor?.set;
        try { f0(v204); } catch (e) {}
        return true;
    }
    try { RunAllTests(); } catch (e) {}
} catch(e208) {
}
