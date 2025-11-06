function f0() {
}
function f1() {
    return 42;
}
let v5;
try { v5 = byteSizeOfScript(f1); } catch (e) {}
const v6 = "byteSizeOfScript(f1) = " + v5;
try { f0(v6); } catch (e) {}
let v8;
try { v8 = byteSizeOfScript(f1); } catch (e) {}
v8 > 1;
function f2(a13) {
    var obj = { x: 1, y: 2, z: 3 };
    if ((i % 2) == 0) {
        for (let i25 = 0; i25 < a13; i25++) {
            this.x += i25;
            let v32;
            try { v32 = uneval(i25); } catch (e) {}
            try { f0(v32); } catch (e) {}
            obj[i25] = i25 * i25;
            if (i25 > 10) {
                let v37;
                try { v37 = f1(); } catch (e) {}
                const v38 = i25 / v37;
                try { f2(v38); } catch (e) {}
            }
        }
    }
    if ((i % 3) == 0) {
        for (let i45 = 0; i45 < a13; i45++) {
            this.x *= i45;
            let v52;
            try { v52 = uneval(i45); } catch (e) {}
            try { f0(v52); } catch (e) {}
            obj[i45] = i45 * i45;
            if (i45 > 10) {
                let v57;
                try { v57 = f1(); } catch (e) {}
                const v58 = i45 / v57;
                try { f2(v58); } catch (e) {}
            }
        }
    }
    return this?.x;
}
let v63;
try { v63 = byteSizeOfScript(f2); } catch (e) {}
const v64 = "byteSizeOfScript(f2) = " + v63;
try { f0(v64); } catch (e) {}
let v66;
try { v66 = byteSizeOfScript(f2); } catch (e) {}
v66 > 1;
let v70;
try { v70 = byteSizeOfScript(f2); } catch (e) {}
let v71;
try { v71 = byteSizeOfScript(f1); } catch (e) {}
v70 > v71;
