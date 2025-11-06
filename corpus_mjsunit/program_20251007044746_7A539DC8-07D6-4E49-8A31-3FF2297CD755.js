var egc = 138;
function SwitchTest(a3) {
    const v6 = new Number();
    let v8;
    try { v8 = oomAfterAllocations(egc); } catch (e) {}
    switch (a3) {
        case 0:
            break;
        case v6:
            result = 8;
        case v8:
    }
}
let v12;
try { v12 = SwitchTest(4); } catch (e) {}
!(v12 === 4);
let v17;
try { v17 = SwitchTest(true); } catch (e) {}
!(v17 === 2);
