function f0() {
    var obj1 = 1;
    for (let i4 = 0;
        (obj1.length < 1) && (i4 < 3);
        (() => {
            let v12 = obj1.length;
            v12++ + i4++;
        })()) {
        obj1 = 1;
    }
}
f0();
