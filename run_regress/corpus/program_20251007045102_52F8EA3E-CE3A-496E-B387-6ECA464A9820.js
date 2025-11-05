var status = "pass";
const v3 = Array.prototype;
const v5 = (a6) => {
    status = "FAIL 1";
    return "FAIL 1";
};
Object.defineProperty(v3, "0", { set: v5 });
Array.of(1)[0];
function Bag() {
}
Bag.of = Array.of;
const v18 = Bag.prototype;
const v20 = (a21) => {
    status = "FAIL 2";
    return "FAIL 2";
};
Object.defineProperty(v18, "0", { set: v20 });
Bag.of(1)[0];
