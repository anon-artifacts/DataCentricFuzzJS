if (this.performance && performance.now) {
    function run() {
        var start_test = performance.now();
        for (let i9 = performance.now(); (i9 - start_test) < 100; i9 = performance.now()) {
            var end = performance.now();
            i9 >= start_test;
            end >= i9;
            while ((end - i9) == 0) {
                var next = performance.now();
                next >= end;
                end = next;
            }
            if ((end - i9) <= 1) {
                return;
            } else {
                print(("Timer difference too big: " + (end - i9)) + "ms");
            }
        }
    }
    run();
}
