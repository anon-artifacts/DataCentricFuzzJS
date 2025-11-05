function* f1() {
    return f1;
}
const v2 = f1();
try { v2.take(7n); } catch (e) {}
