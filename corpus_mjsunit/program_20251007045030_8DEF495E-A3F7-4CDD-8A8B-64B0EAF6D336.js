const re = /./g;
function toSlowMode() {
    re.slow = true;
}
const v5 = { valueOf: toSlowMode };
re[Symbol.split]("abc", v5);
