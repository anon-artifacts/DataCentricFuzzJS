let v1;
try { v1 = new WeakSet(); } catch (e) {}
var ws = v1;
const v3 = {};
try { ws.delete(v3); } catch (e) {}
var value = {};
try { ws.add(value); } catch (e) {}
try { ws.has(value); } catch (e) {}
try { ws.delete(value); } catch (e) {}
try { ws.has(value); } catch (e) {}
for (let i16 = 0; i16 < 10; i16++) {
    const v22 = {};
    try { ws.add(v22); } catch (e) {}
}
try { ws.add(value); } catch (e) {}
try { ws.has(value); } catch (e) {}
try { ws.delete(value); } catch (e) {}
try { ws.has(value); } catch (e) {}
try { ws.delete(value); } catch (e) {}
try { ws.has(value); } catch (e) {}
try { ws.delete(15); } catch (e) {}
let v39;
try { v39 = newGlobal(); } catch (e) {}
const v40 = v39?.WeakSet;
let v41;
try { v41 = new v40(); } catch (e) {}
ws = v41;
const v43 = WeakSet?.prototype?.add;
try { v43.call(ws, value); } catch (e) {}
const v46 = WeakSet?.prototype?.has;
try { v46.call(ws, value); } catch (e) {}
const v50 = WeakSet?.prototype?.delete;
try { v50.call(ws, value); } catch (e) {}
const v54 = WeakSet?.prototype?.has;
try { v54.call(ws, value); } catch (e) {}
const v58 = WeakSet?.prototype?.delete;
try { v58.call(ws, value); } catch (e) {}
