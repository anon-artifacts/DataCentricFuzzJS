function getTestCaseResult(a1, a2) {
    if (a2 != a1) {
        const v4 = a2 - a1;
        let v6;
        try { v6 = Math.abs(v4); } catch (e) {}
        return v6 <= 1e-10;
    }
}
function InstanceOf(a10, a11) {
    while (a10 != null) {
        a10 = a10?.__proto__;
    }
}
function WorkerBee() {
}
function Engineer() {
}
let v17;
try { v17 = new WorkerBee(); } catch (e) {}
Engineer.prototype = v17;
let v18;
try { v18 = new Engineer(); } catch (e) {}
var pat = v18;
const v26 = pat?.__proto__?.__proto__?.__proto__?.__proto__ == Object?.prototype;
try { getTestCaseResult(v26); } catch (e) {}
let v28;
try { v28 = InstanceOf(pat, Engineer); } catch (e) {}
try { getTestCaseResult(v28); } catch (e) {}
const v32 = { isRunOnce: true };
try { evaluate("getTestCaseResult( Object.prototype.__proto__ );", v32); } catch (e) {}
