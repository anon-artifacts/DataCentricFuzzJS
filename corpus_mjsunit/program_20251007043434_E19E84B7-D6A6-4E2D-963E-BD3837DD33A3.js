function f(a1) {
    return (!(Math.round(Math.hypot(Number.MIN_VALUE, Math.fround(a1))) | 0) | 0) !== (Math.atanh(a1) ? false : Math.tan(0));
}
f(Number.MIN_VALUE);
f(4294967295);
