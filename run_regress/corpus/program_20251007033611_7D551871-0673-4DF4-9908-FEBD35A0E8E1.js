const v0 = [65537,-641107840,536870889,-47757,9,-46565,10];
const v1 = [-1130085738];
const v2 = [-1219803351,6,1000,-9007199254740992,4294967296,-2147483647,-4096,-1228596673,-9007199254740991];
4 % 4;
const v6 = new Uint8ClampedArray(4);
try { Uint16Array.apply(4, 14); } catch (e) {}
const v10 = new Uint16Array(14);
10 | 10;
const v14 = new Int8Array(10);
v14[9] = v14;
function f15(a16, a17, a18) {
    a17[0];
    a18 - a18;
    const v28 = {
        b: v2,
        c: a16,
        __proto__: v1,
        e: a18,
        ...v10,
        toString(a22, a23) {
            const v26 = new Proxy(Uint16Array, {});
            v26.__proto__ = v26;
            return a17[v6];
        },
        h: 14,
    };
    try { v28.keys(); } catch (e) {}
    return v28;
}
const v30 = f15(v0, v1, 4);
try { v30.indexOf(v1); } catch (e) {}
f15(v2, v1, 10);
f15(Uint16Array, v2, 4);
var log = [];
const v36 = [];
const v42 = {
    get() {
        const v40 = log.push("get 0");
        v40 + v40;
    },
};
try { v42.get(); } catch (e) {}
var replacer = Object.defineProperty(v36, 0, v42);
const v48 = new String();
try { ("toString").big(); } catch (e) {}
const v55 = {
    value() {
        log.push("toString");
        return "";
    },
};
var space = Object.defineProperty(v48, "toString", v55);
const v59 = ("")?.replace;
try { new v59("", ""); } catch (e) {}
JSON.stringify("", replacer, space);
log.length;
const v66 = log[0];
try { v66.trim(); } catch (e) {}
log[1];
