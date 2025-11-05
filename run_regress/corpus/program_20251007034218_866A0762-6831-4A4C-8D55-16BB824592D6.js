function f1() {
    ~-39505n;
    -39505n ^ 9223372036854775807;
    return f1;
}
try { f1(); } catch (e) {}
