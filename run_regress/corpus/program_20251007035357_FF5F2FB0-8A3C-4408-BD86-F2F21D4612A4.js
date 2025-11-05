function test(a1) {
    return a1?.length;
}
try { noInline(test); } catch (e) {}
let v7;
try { v7 = new Array(10); } catch (e) {}
let array = v7;
for (let i10 = 0; i10 < 10000; i10++) {
    let v16;
    try { v16 = test(array); } catch (e) {}
    if (v16 !== 10) {
        let v21;
        try { v21 = new Error("bad result"); } catch (e) {}
        throw v21;
    }
}
