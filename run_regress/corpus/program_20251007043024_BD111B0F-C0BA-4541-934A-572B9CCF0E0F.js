function top() {
    function g(a2, a3) {
    }
    function t() {
        for (let i6 = 0; i6 < 1; ++i6) {
            g(32768, g());
        }
    }
    t();
}
top();
