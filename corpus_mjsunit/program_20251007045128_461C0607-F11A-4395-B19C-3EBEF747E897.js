function foo(a1) {
    var F = a1.split(" ");
    var D = F[0].split("-");
    var C = F[1].split(":");
    const v20 = new Date(D[0], D[1], D[2], C[0], C[1], C[2]);
    return v20;
}
function test() {
    with (this) {
    }
    for (let i24 = 0; i24 < 1200; i24++) {
        foo("13-5-2015 18:30:" + i24);
    }
}
test();
