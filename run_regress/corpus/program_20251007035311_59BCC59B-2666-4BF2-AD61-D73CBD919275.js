for (let i1 = 0; i1 < 2; i1++) {
    function f7() {
    }
    with ({ x: f7 }) {
        f = x;
    }
}
