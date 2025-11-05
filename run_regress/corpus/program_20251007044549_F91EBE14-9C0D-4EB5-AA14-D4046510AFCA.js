function t1() {
    function bar() {
        o = { x: 2 };
    }
    o = { x: 1 };
    function test0() {
        var b;
        for (let i12 = 0; i12 < 2; i12++) {
            const v18 = bar();
            o.x <<= v18;
            b = v18;
        }
        console.log(2, b);
    }
    test0();
    test0();
    o = { x: 1 };
    test0();
}
t1();
function t2() {
    var obj2 = {};
    const v34 = new Int32Array();
    var i32 = v34;
    function f36() {
        return obj2;
    }
    var func0 = f36;
    const t28 = Object.prototype;
    t28.prop5 = 1;
    var a;
    for (let i44 = 4; i44 > 0; i44--) {
        function func7(a51) {
            this.prop2 = a51;
        }
        let v53 = obj2.prop5;
        const v55 = new func7(v53--);
        obj2 = v55;
    }
    console.log(1, obj2.prop2);
}
t2();
function t3() {
    function makeArrayLength(a63) {
        if (!isNaN(a63)) {
            return Math.floor(a63) & 65535;
        }
    }
    var obj0 = {};
    var c = 1;
    obj0.length = makeArrayLength(4294967295);
    for (;
        (() => {
            let v77 = obj0.length;
            return v77--;
        })();
        c++) {
        function f80() {
            function v1() {
                const v82 = { method1: obj0 };
                const v83 = { nd0: v82 };
            }
            return v1;
        }
        obj0 = { method1: f80 };
    }
    console.log(2, c);
}
t3();
