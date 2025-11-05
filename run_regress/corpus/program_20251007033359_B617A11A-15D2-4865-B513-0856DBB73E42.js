function f() {
    var phi1 = 0;
    var phi2 = 0;
    while (true) {
        if (!phi2) {
            var add = phi1 + 1;
            try { f(add); } catch (e) {}
            if (!phi2) {
                return;
            }
            phi1 = 1;
            phi2 = 0;
        }
    }
}
try { f(0); } catch (e) {}
