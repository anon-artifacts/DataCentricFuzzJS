const v3 = 512 * 1024;
let v4;
try { v4 = new ArrayBuffer(v3); } catch (e) {}
var buffer = v4;
let v7;
try { v7 = new Uint8Array(buffer); } catch (e) {}
var ta = v7;
function load() {
    return ta?.[4660];
}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { load(); } catch (e) {}
try { detachArrayBuffer(buffer); } catch (e) {}
try { load(); } catch (e) {}
