function shouldBe(a1, a2) {
}
try { noInline(shouldBe); } catch (e) {}
var array1 = [0,1,2,3,4,5];
try { Object.freeze(array1); } catch (e) {}
function test1() {
    return ((((array1?.[0] + array1?.[1]) + array1?.[2]) + array1?.[3]) + array1?.[4]) + array1?.[5];
}
try { noInline(test1); } catch (e) {}
function test2() {
    return (((((array1?.[0] + array1?.[1]) + array1?.[2]) + array1?.[3]) + array1?.[4]) + array1?.[5]) + (array1?.[6] | 0);
}
try { noInline(test2); } catch (e) {}
var array4 = [0,1,2,3,4,5];
try { Object.seal(array4); } catch (e) {}
function test5() {
    return ((((array4?.[0] + array4?.[1]) + array4?.[2]) + array4?.[3]) + array4?.[4]) + array4?.[5];
}
try { noInline(test5); } catch (e) {}
for (let i68 = 0; i68 < 100000; ++i68) {
    let v74;
    try { v74 = test1(); } catch (e) {}
    try { shouldBe(v74, 15); } catch (e) {}
    let v77;
    try { v77 = test2(); } catch (e) {}
    try { shouldBe(v77, 15); } catch (e) {}
    let v80;
    try { v80 = test5(); } catch (e) {}
    try { shouldBe(v80, 15); } catch (e) {}
}
