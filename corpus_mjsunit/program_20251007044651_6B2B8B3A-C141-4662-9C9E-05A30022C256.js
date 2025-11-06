function f15() {
    let v16 = 1;
    function f17(a18) {
        v16 = a18;
    }
    for (let i20 = 0; i20 < 10; ++i20) {
        f17(i20);
    }
}
for (let v27 = 0; v27 < 1000; v27++) {
    f15();
}
