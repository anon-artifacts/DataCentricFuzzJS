try {
    function testNonConstructorStrict() {
        'use strict';
        function f1() {
            const v3 = Math.cos;
            const v7 = [1,2,3];
            let v8;
            try { v8 = new v3(...v7); } catch (e) {}
            return v8;
        }
        f1();
        function f11() {
            var CallNull = null;
            const v17 = [1,2,3];
            let v18;
            try { v18 = new CallNull(...v17); } catch (e) {}
            return v18;
        }
        f11();
    }
    testNonConstructorStrict();
    function testNonConstructorSloppy() {
        function f22() {
            const v24 = Math.cos;
            const v28 = [1,2,3];
            let v29;
            try { v29 = new v24(...v28); } catch (e) {}
            return v29;
        }
        f22();
        function f32() {
            var CallNull = null;
            const v38 = [1,2,3];
            let v39;
            try { v39 = new CallNull(...v38); } catch (e) {}
            return v39;
        }
        f32();
    }
    testNonConstructorSloppy();
    function testConstructStrict() {
        'use strict';
        function TestClass(a44, a45, a46) {
            this.wasCalled = true;
            this.args = [a44,a45,a46];
        }
        function f51() {
            return this.args;
        }
        const t49 = TestClass.prototype;
        t49.method = f51;
        const v58 = [1,2,3];
        try { new TestClass(...v58); } catch (e) {}
        TestClass();
        [1,2,3];
        const v68 = [1,2,3];
        let v69;
        try { v69 = new TestClass(...v68); } catch (e) {}
        v69.method();
        [1,2,3];
        const v78 = [1,2,3];
        let v79;
        try { v79 = new TestClass(...v78); } catch (e) {}
        v79.args;
        const v84 = [1,2,3];
        let v85;
        try { v85 = new TestClass(...v84); } catch (e) {}
        v85.wasCalled;
    }
    testConstructStrict();
    function testConstructSloppy() {
        function TestClass(a90, a91, a92) {
            this.wasCalled = true;
            this.args = [a90,a91,a92];
        }
        function f97() {
            return this.args;
        }
        const t78 = TestClass.prototype;
        t78.method = f97;
        const v104 = [1,2,3];
        try { new TestClass(...v104); } catch (e) {}
        TestClass();
        [1,2,3];
        const v114 = [1,2,3];
        let v115;
        try { v115 = new TestClass(...v114); } catch (e) {}
        v115.method();
        [1,2,3];
        const v124 = [1,2,3];
        let v125;
        try { v125 = new TestClass(...v124); } catch (e) {}
        v125.args;
        const v130 = [1,2,3];
        let v131;
        try { v131 = new TestClass(...v130); } catch (e) {}
        v131.wasCalled;
    }
    testConstructSloppy();
} catch(e134) {
}
