for (let i1 = 0; i1 < 3; i1++) {
    function f7() {
        return i1;
    }
    var obj = { index: f7, x: 0 };
    var n = 10000;
    for (let i14 = 0; i14 < n; i14++) {
        obj.x += i1;
    }
    obj.index() * n;
    obj.x;
}
