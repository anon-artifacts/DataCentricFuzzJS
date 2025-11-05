var SECTION = "";
try { gcPreserveCode(); } catch (e) {}
try { gczeal(9, 1000); } catch (e) {}
function test() {
    let v11;
    try { v11 = new Float32Array(10); } catch (e) {}
    var f32 = v11;
    f32[0] = 5;
    var i = 0;
    for (let i17 = 0; i17 < 10000; ++i17) {
        const v25 = f32?.[i] - 1;
        f32[i + 1] = v25;
        SECTION += 1;
    }
}
try { test(); } catch (e) {}
