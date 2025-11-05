const size = 100;
function foo() {
    const v4 = new Array(size);
    let a = v4;
    const v6 = new Array(size);
    let b = v6;
    const v8 = new Array(size);
    let c = v8;
    const v10 = new Array(size);
    let d = v10;
    const v12 = new Array(size);
    let e = v12;
    a.fill(1);
    b.fill(1);
    c.fill(1);
    d.fill(1);
    e.fill(1);
    function f24() {
        let cl = c.length;
        total = 0;
        let _c = c;
        let _d = d;
        for (let i32 = 0; i32 < cl; ++i32) {
            _c[i32] = _d[i32];
        }
    }
    validSlotMemop = f24;
    function slotMemop() {
        let al = a.length;
        total = 0;
        for (let i45 = 0; i45 < al; ++i45) {
            a[i45] = b[i45];
            e[i45] = 0;
        }
        validSlotMemop();
    }
    return slotMemop;
}
const f = foo();
f();
f();
print("PASSED");
