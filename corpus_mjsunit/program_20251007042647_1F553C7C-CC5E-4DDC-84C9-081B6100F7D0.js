function get(a1, a2) {
    return a1?.[a1];
}
get([1,,3], 0);
get([1,,3], 2);
get([1,,3], 0);
get();
const t3 = Array.prototype;
t3.unrelated = 1;
get();
