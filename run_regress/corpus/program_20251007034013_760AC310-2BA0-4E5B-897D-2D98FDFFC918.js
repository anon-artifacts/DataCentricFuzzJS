function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
var symbol = Symbol("Cocoa");
var object = { [symbol]: 3, 0: 0, hello: 2, 1: 1 };
var count = 0;
const v20 = {};
const v21 = () => {
    shouldBe(count++, 0);
};
const v25 = { set: v21 };
const v26 = () => {
    shouldBe(count++, 1);
};
const v30 = { set: v26 };
const v31 = () => {
    shouldBe(count++, 2);
};
const v35 = { set: v31 };
const v36 = () => {
    shouldBe(count++, 3);
};
const v40 = { set: v36 };
var tester = Object.defineProperties(v20, { 0: v25, 1: v30, hello: v35, [symbol]: v40 });
Object.assign(tester, object);
