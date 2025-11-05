function f0() {
    const v3 = new Array(1);
    var head = v3;
    var tail = head;
    for (let i7 = 0; i7 < 200; i7++) {
        const v14 = new Array(1000);
        tail[1] = v14;
        tail = tail[1];
    }
    const v17 = new Array(100);
    array = v17;
    gc();
    gc();
    array.length;
    for (let i26 = 0; i26 < 50; i26++) {
        array.shift();
    }
    array.length;
    for (let i36 = 0; i36 < 200; i36++) {
        const v43 = new Array(1000);
        tail[1] = v43;
        tail = tail[1];
    }
}
f0();
