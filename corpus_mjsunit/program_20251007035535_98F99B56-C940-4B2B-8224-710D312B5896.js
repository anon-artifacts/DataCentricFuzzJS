function dofloor(a1) {
    var res = "";
    for (let i5 = 0; i5 < 10; i5++) {
        var q = Math.floor(a1 + i5);
        res += q + ",";
    }
}
dofloor(2147483642 + 0.5);
function mapfloor(a23) {
    function f24(a25) {
        return Math.floor(a25);
    }
    var b = a23.map(f24);
    var res = "";
    for (let i33 = 0; i33 < b.length; i33++) {
        res += b[i33] + ",";
    }
    return res;
}
mapfloor([1,2]);
mapfloor([3,4]);
mapfloor([2147483642 + 2.5,2147483642 + 20.5]);
