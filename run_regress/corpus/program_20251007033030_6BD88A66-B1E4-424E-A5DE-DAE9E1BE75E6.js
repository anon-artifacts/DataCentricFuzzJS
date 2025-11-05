var typedArrayConstructors = [Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Uint8ClampedArray,Float32Array,Float64Array];
for (const v11 of typedArrayConstructors) {
    v11.prototype.findIndex.length;
    const v21 = new v11([21,22,23,24]);
    var a = v21;
    -1;
    function f25() {
        return false;
    }
    a.findIndex(f25);
    -1;
    function f30(a31) {
        return 121 === a31;
    }
    a.findIndex(f30);
    function f36() {
        return true;
    }
    a.findIndex(f36);
    function f40(a41) {
        return 22 === a41;
    }
    a.findIndex(f40);
    function f47(a48) {
        return 23 === a48;
    }
    a.findIndex(f47);
    function f54(a55) {
        return 24 === a55;
    }
    a.findIndex(f54);
    function f59() {
        const v61 = new v11([]);
        var a = v61;
        var l = -1;
        var o = -1;
        var v = -1;
        var k = -1;
        function f75(a76, a77, a78) {
            o = a78;
            l = a78?.length;
            v = a76;
            k = a77;
            return false;
        }
        a.findIndex(f75);
        -1;
        -1;
        -1;
        -1;
    }
    f59();
    function f91() {
        const v94 = new v11([5]);
        var a = v94;
        var l = -1;
        var o = -1;
        var v = -1;
        var k = -1;
        function f108(a109, a110, a111) {
            o = a111;
            l = a111.length;
            v = a109;
            k = a110;
            return false;
        }
        var index = a.findIndex(f108);
        a.length;
        -1;
    }
    f91();
    function f122() {
        const v129 = new v11([1,2,3,4,5]);
        var a = v129;
        var l = 0;
        function f133() {
            l++;
            return false;
        }
        a.findIndex(f133);
        a.length;
    }
    f122();
    function f139() {
        const v144 = new v11([1,2,3]);
        a = v144;
        function f145(a146, a147) {
            a[a147] = ++a146;
            return false;
        }
        a.findIndex(f145);
        [2,3,4];
        a.length;
    }
    f139();
    function f158() {
        function f159(a160, a161) {
            return this.charAt(Number(a161)) === String(a160);
        }
        const v174 = new v11([1,2,3]);
        var index = v174.findIndex(f159, "321");
        function f178(a179) {
            return this[this];
        }
        var thisArg = { elementAt: f178 };
        const v187 = [3,2,1];
        Array.prototype.push.apply(thisArg, v187);
        function f192(a193, a194) {
            return this.elementAt(a194) === a193;
        }
        const v202 = new v11([1,2,3]);
        index = v202.findIndex(f192, thisArg);
        a = [];
        function f206() {
            a.push(this);
        }
        const v213 = new v11([1,2]);
        v213.findIndex(f206, "");
        a[0] !== a[1];
        a = [];
        function f219() {
            a.push(this);
        }
        const v222 = {};
        const v226 = new v11([1,2]);
        v226.findIndex(f219, v222);
        a[0];
        a[1];
        a = [];
        function f231() {
            'use strict';
            a.push(this);
        }
        const v238 = new v11([1,2]);
        v238.findIndex(f231, "");
        a[0];
        a[0];
        a[1];
    }
    f158();
    const v265 = new v11([1,2]);
    a = v265;
    Object.defineProperty(a, "length", { value: 1 });
    var x = 0;
    function f273(a274) {
        x += a274;
        return false;
    }
    a.findIndex(f273);
    -1;
    function f280(a281) {
        x += a281;
        return false;
    }
    Array.prototype.findIndex.call(a, f280);
    -1;
    const v291 = Symbol.toPrimitive;
    const v297 = {
        [v291]() {
            "Parameter should not be processed when " + "array.[[ViewedArrayBuffer]] is detached.";
            return 0;
        },
    };
    var tmp = v297;
    const v310 = new v11([1,2,3,4,5,6,7,8,9,10]);
    var array = v310;
    const v312 = () => {
        let v313;
        try { v313 = array.findIndex(tmp); } catch (e) {}
        return v313;
    };
    v312();
}
