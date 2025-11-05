function testDoubleComparison() {
    for (let i2 = 0; i2 < 500000; ++i2) {
        switch (1 / 0) {
            case Infinity:
        }
    }
    return "finished";
}
testDoubleComparison();
