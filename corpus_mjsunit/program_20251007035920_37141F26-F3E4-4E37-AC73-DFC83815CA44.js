try { Object.keys(); } catch (e) {}
const v5 = [1,2,3];
Object.defineProperty(v5, "0", { enumerable: false });
Object.keys(v5);
function f11() {
    Object.defineProperty(arguments, "0", {});
    return "0";
}
f11();
function f20(a21, a22) {
    Object.keys(arguments);
    const v28 = { enumerable: false };
    v28.value = false;
    Object.defineProperty(arguments, "0", v28);
    Object.keys(arguments);
    return v28;
}
f20(0, 1, 2);
