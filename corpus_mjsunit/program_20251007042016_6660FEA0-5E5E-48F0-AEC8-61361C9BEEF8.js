var TypedArrayCtors = [Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array];
function t1() {
    function f12(a13) {
        const v15 = new a13(10);
        var o = v15;
        const t5 = Object.prototype;
        t5[1.3] = 100;
        console.log(undefined, o[1.3]);
        console.log(false, Reflect.has(o, "1.3"));
        const v33 = new Proxy(o, {});
        var p = v33;
        console.log(undefined, p[1.3]);
        console.log(false, Reflect.has(p, "1.3"));
        const t11 = Object.prototype;
        delete t11[1];
    }
    TypedArrayCtors.forEach(f12);
}
t1();
function t2() {
    function f49(a50) {
        var o = {};
        const v54 = new a50(100);
        Object.setPrototypeOf(o, v54);
        const t23 = Object.prototype;
        t23[1.3] = 100;
        console.log(undefined, o[1.3]);
        console.log(false, Reflect.has(o, "1.3"));
        const v72 = new Proxy(o, {});
        var p = v72;
        console.log(undefined, p[1.3]);
        console.log(false, Reflect.has(p, "1.3"));
        const v82 = Object.getPrototypeOf(o);
        const v84 = new Proxy(v82, {});
        Object.setPrototypeOf(o, v84);
        console.log(undefined, o[1.3]);
        console.log(false, Reflect.has(o, "1.3"));
        console.log(undefined, p[1.3]);
        console.log(false, Reflect.has(p, "1.3"));
        const t34 = Object.prototype;
        delete t34[1];
    }
    TypedArrayCtors.forEach(f49);
}
t2();
function t3() {
    function f108(a109) {
        const v111 = new a109(10);
        var o = v111;
        const t49 = Object.prototype;
        t49[NaN] = 100;
        console.log(undefined, o[NaN]);
        console.log(false, Reflect.has(o, "NaN"));
        const t51 = Object.prototype;
        delete t51[NaN];
    }
    TypedArrayCtors.forEach(f108);
}
t3();
function t4() {
    function f131(a132) {
        const v133 = new a132();
        var arr = v133;
        arr[1.2] = "xyz123";
        Object.setPrototypeOf(arr, { 1.1: "abc" });
        console.log(undefined, arr[1.1]);
        console.log(undefined, arr[1.2]);
    }
    TypedArrayCtors.forEach(f131);
}
t4();
function t5() {
    function f153(a154) {
        const v156 = new a154(3);
        var tests = v156;
        function f158() {
            throw Error("OrdinaryGet called");
        }
        const t78 = Object.prototype;
        t78[1.3] = f158;
        var i = "1.3";
        try {
            tests[i]();
        } catch(e168) {
        }
        const t85 = Object.prototype;
        delete t85[1];
    }
    TypedArrayCtors.forEach(f153);
}
t5();
function t6() {
    var taProto = Object.getPrototypeOf(Uint8Array).prototype;
    function f180() {
        throw Error("OrdinaryGet called");
    }
    var throwError = { configurable: true, get: f180 };
    function f186(a187) {
        const v189 = new a187(2);
        var a = v189;
        var props = ["-0",0.1,"0.1",1e-06,"0.000001",1.1,"1.1",Infinity,"Infinity",-Infinity,"-Infinity",-1,"-1",2,"2",3,"3",NaN,"NaN"];
        function f213(a214) {
            Object.defineProperty(taProto, a214, throwError);
            console.log(0, a[0]);
            console.log(0, a[1]);
            console.log(undefined, a[a214]);
            console.log(false, Reflect.has(a, a214));
            console.log(false, Reflect.defineProperty(a, a214, { value: 100, configurable: false, enumerable: true, writable: true }));
            console.log(false, Reflect.set(a, a214));
            console.log(false, Reflect.hasOwnProperty(a, a214));
            delete taProto[a214];
        }
        var testProp = f213;
        props.forEach(testProp);
    }
    TypedArrayCtors.forEach(f186);
}
t6();
