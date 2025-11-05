var stdlib = this;
const v5 = 64 * 1024;
let v6;
try { v6 = new ArrayBuffer(v5); } catch (e) {}
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    function zext8(a15) {
        return ((a15 = a15 | 0) & 255) | 0;
    }
    return { zext8: zext8 };
}
let v23;
try { v23 = Module(stdlib, foreign, buffer); } catch (e) {}
var zext8 = v23?.zext8;
try { zext8(0); } catch (e) {}
try { zext8(256); } catch (e) {}
const v34 = -1;
try { zext8(v34); } catch (e) {}
try { zext8(255); } catch (e) {}
function Module(a40, a41, a42) {
    'use asm';
    function zext16(a44) {
        return ((a44 = a44 | 0) & 65535) | 0;
    }
    return { zext16: zext16 };
}
let v52;
try { v52 = Module(stdlib, foreign, buffer); } catch (e) {}
var zext16 = v52?.zext16;
try { zext16(0); } catch (e) {}
try { zext16(65536); } catch (e) {}
const v63 = -1;
try { zext16(v63); } catch (e) {}
try { zext16(65535); } catch (e) {}
