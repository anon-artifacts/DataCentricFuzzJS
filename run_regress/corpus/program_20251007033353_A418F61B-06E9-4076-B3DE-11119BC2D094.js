var i = 0;
const v3 = Symbol?.iterator;
const v11 = {
    next() {
        const v6 = i == 1;
        const v8 = [i++,i];
        return { done: v6, value: v8 };
    },
    [v3]() {
        return this;
    },
};
var o = v11;
const v14 = o?.next;
const v15 = {};
let v16;
try { v16 = new Proxy(v14, v15); } catch (e) {}
o.next = v16;
let v18;
try { v18 = new Map(o); } catch (e) {}
var m = v18;
let v21;
try { v21 = m.get(0); } catch (e) {}
if (v21 === 1) {
    try { WScript.Echo("passed"); } catch (e) {}
} else {
    try { WScript.Echo("failed"); } catch (e) {}
}
