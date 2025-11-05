function f3() {
    return this;
}
const v4 = { get: f3 };
v4.value = -4294967295;
try { Object.defineProperty(this, "foo", v4); } catch (e) {}
