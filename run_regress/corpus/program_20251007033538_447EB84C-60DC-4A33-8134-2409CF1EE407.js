function optimized() {
    return unoptimized.apply(null, arguments);
}
function unoptimized() {
    with ({}) {
        return optimized.arguments;
    }
}
for (let i9 = 0; i9 < 5; ++i9) {
    optimized(1, 2, 3).length;
}
optimized(1, 2, 3).length;
