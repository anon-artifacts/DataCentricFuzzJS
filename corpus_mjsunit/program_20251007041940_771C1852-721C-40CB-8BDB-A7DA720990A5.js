function testDoubleToStr() {
    var x = 0;
    var y = 5.5;
    for (let i6 = 0; i6 < 200; i6++) {
        x += parseFloat(y.toString());
    }
    return x;
}
testDoubleToStr();
5.5 * 200;
