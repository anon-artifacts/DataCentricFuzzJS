function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
var array = [1,2,3,4,5];
var array2 = [1,"HELLO",3,4,5];
var array3 = [0.1,"OK",0.3,0.4,0.5];
try { ensureArrayStorage(array2); } catch (e) {}
array.ok = 42;
array2.ok = 42;
array3.ok = 42;
function testArrayStorage(a35) {
    return a35?.length;
}
try { noInline(testArrayStorage); } catch (e) {}
for (let i40 = 0; i40 < 1000000; ++i40) {
    let v46;
    try { v46 = testArrayStorage(array); } catch (e) {}
    try { shouldBe(v46, 5); } catch (e) {}
    let v49;
    try { v49 = testArrayStorage(array2); } catch (e) {}
    try { shouldBe(v49, 5); } catch (e) {}
    let v52;
    try { v52 = testArrayStorage(array3); } catch (e) {}
    try { shouldBe(v52, 5); } catch (e) {}
}
const v60 = {
    0: 1,
    1: "HELLO",
    2: 3,
    3: 4,
    4: 5,
};
var array4 = v60;
try { ensureArrayStorage(array4); } catch (e) {}
let v63;
try { v63 = testArrayStorage(array4); } catch (e) {}
try { shouldBe(v63, undefined); } catch (e) {}
