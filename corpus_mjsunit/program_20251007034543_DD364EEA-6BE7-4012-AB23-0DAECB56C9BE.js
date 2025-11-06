function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
function test() {
}
const v9 = test.toString();
const v10 = `function test() { }`;
try { shouldBe(v9, v10); } catch (e) {}
const v12 = () => {
};
const v13 = v12.toString();
const v14 = `() => { }`;
try { shouldBe(v13, v14); } catch (e) {}
function* test() {
}
const v17 = test.toString();
const v18 = `function* test() { }`;
try { shouldBe(v17, v18); } catch (e) {}
async function* test() {
}
const v21 = test.toString();
const v22 = `async function* test() { }`;
try { shouldBe(v21, v22); } catch (e) {}
async function test() {
}
const v25 = test.toString();
const v26 = `async function test() { }`;
try { shouldBe(v25, v26); } catch (e) {}
const v28 = async () => {
};
const v29 = v28.toString();
const v30 = `async () => { }`;
try { shouldBe(v29, v30); } catch (e) {}
