function bozo() {
}
function MakeClosure() {
    function f(a3) {
        if (a3) {
            return [1,2,3,3,4,5,6,7,8,9,bozo];
        } else {
            return 0;
        }
    }
    return f;
}
var closure1 = MakeClosure();
var closure2 = MakeClosure();
var expected = [1,2,3,3,4,5,6,7,8,9,bozo];
closure1(false);
closure1(true);
closure1(true);
closure2(false);
closure2(true);
