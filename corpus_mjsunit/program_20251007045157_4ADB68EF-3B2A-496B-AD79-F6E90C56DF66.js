function func5(a1) {
    this.prop2 = a1;
    this.prop0 = a1;
}
function f4() {
    const v5 = new func5();
    var uniqobj10 = v5;
    let v7 = uniqobj10.prop2;
    --v7;
    for (let i10 = 0; i10 < 2; i10++) {
        uniqobj10.prop3 = 100;
        uniqobj10.prop2 = uniqobj10.prop2;
    }
}
f4();
