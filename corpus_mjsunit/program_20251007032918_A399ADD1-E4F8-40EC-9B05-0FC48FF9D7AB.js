function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
const v9 = Array?.prototype;
const v14 = {
    get() {
        this.called = true;
        return 42;
    },
};
try { Object.defineProperty(v9, 2, v14); } catch (e) {}
{
    let array = [];
    array.length = 42;
    let v21;
    try { v21 = array.lastIndexOf(42); } catch (e) {}
    try { shouldBe(v21, 2); } catch (e) {}
    const v24 = array?.called;
    try { shouldBe(v24, true); } catch (e) {}
}
{
    let array = [20,20];
    array.length = 42;
    let v33;
    try { v33 = array.lastIndexOf(42); } catch (e) {}
    try { shouldBe(v33, 2); } catch (e) {}
    const v36 = array?.called;
    try { shouldBe(v36, true); } catch (e) {}
}
{
    let array = ["Hello"];
    array.length = 42;
    let v44;
    try { v44 = array.lastIndexOf(42); } catch (e) {}
    try { shouldBe(v44, 2); } catch (e) {}
    const v47 = array?.called;
    try { shouldBe(v47, true); } catch (e) {}
}
{
    let array = [42.195];
    array.length = 42;
    let v55;
    try { v55 = array.lastIndexOf(42); } catch (e) {}
    try { shouldBe(v55, 2); } catch (e) {}
    const v58 = array?.called;
    try { shouldBe(v58, true); } catch (e) {}
}
{
    let array = ["Hello"];
    array.length = 42;
    try { ensureArrayStorage(array); } catch (e) {}
    let v68;
    try { v68 = array.lastIndexOf(42); } catch (e) {}
    try { shouldBe(v68, 2); } catch (e) {}
    const v71 = array?.called;
    try { shouldBe(v71, true); } catch (e) {}
}
