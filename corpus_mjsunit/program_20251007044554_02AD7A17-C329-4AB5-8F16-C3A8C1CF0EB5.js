var hits = 0;
function C() {
}
const v6 = {
    set length(a4) {
        hits++;
    },
};
C.prototype = v6;
C.from = Array.from;
var copy = C.from(["A","B"]);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
