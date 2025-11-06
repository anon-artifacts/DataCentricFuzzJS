var stdlib = this;
const v6 = new ArrayBuffer(64 * 1024);
var buffer = v6;
var foreign = {};
function Module(a11, a12, a13) {
    'use asm';
    function sext8(a15) {
        a15 = a15 | 0;
        a15 = (a15 << 24) >> 24;
        return a15 | 0;
    }
    return { sext8: sext8 };
}
var sext8 = Module(stdlib, foreign, buffer).sext8;
-128;
try { sext8(128); } catch (e) {}
-1;
const v35 = -1;
try { sext8(v35); } catch (e) {}
-1;
try { sext8(255); } catch (e) {}
try { sext8(0); } catch (e) {}
try { sext8(256); } catch (e) {}
try { sext8(42); } catch (e) {}
try { sext8(127); } catch (e) {}
function Module(a54, a55, a56) {
    'use asm';
    function sext16(a58) {
        a58 = a58 | 0;
        a58 = (a58 << 16) >> 16;
        return a58 | 0;
    }
    return { sext16: sext16 };
}
var sext16 = Module(stdlib, foreign, buffer).sext16;
-32768;
sext16(32768);
-1;
sext16(-1);
-1;
sext16(65535);
sext16(0);
sext16(65536);
sext16(128);
sext16(32767);
