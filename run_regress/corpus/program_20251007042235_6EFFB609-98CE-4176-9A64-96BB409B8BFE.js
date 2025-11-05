function f3(a4, a5) {
    a4 * a4;
    a5 >> a5;
    const v14 = {
        get d() {
            a4 !== this;
            const t1 = {};
            t1.c = this;
            const v11 = {};
            v11.c = this;
            v11.f = this;
            const v12 = {};
            v12.c = this;
            v12.f = this;
            v12.b = 28700;
            const v13 = {};
            v13.c = this;
            v13.f = this;
            v13.b = this;
            return a5;
        },
    };
    return v14;
}
const v15 = f3(128, 128);
try { (28700).propertyIsEnumerable(f3); } catch (e) {}
class C17 {
    1;
    16;
    static 2;
    static set b(a19) {
        for (let v20 = 0; v20 < 32; v20++) {
            const t32 = 15;
            t32[v20] = v20;
        }
        const t35 = {};
        t35.a = 28700;
        const v23 = {};
        v23.a = 28700;
        v23.g = v15;
        const v24 = {};
        v24.a = 28700;
        v24.g = v15;
        v24.d = v15;
        const v25 = {};
        v25.a = 28700;
        v25.d = 28700;
    }
}
C17.length = C17;
new C17();
new C17();
const v28 = new C17();
v28[16] = v28;
try { new Function(); } catch (e) {}
const v35 = new Function("for (var j=0; j<9; ++j) { (function sum_indexing(array,start){return array.length==start ? 0 : array[start]+ sum_indexing(array,start+1)})([true,true,undefined],0)}");
v35.b = v35;
v35();
