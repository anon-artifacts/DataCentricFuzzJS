function sum(a1, a2, a3) {
    var result = 0;
    for (let i7 = 0; i7 < arguments.length; i7++) {
        result += arguments[i7];
    }
    return result;
}
sum.call(this, 1, 2, 3);
sum(1, 2, 3);
sum.call(this, 1, 2, 3);
sum.apply(this, [1,2,3]);
