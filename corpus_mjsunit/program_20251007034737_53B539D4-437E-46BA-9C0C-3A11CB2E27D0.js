console.log("Ensure various bit operators correctly tag the final result value");
aDouble = 100000000.5;
aDouble >> 27;
(aDouble >> 27) | 0;
aDouble >> 0;
(aDouble >> 0) | 0;
aDouble | 0;
function f21(a22) {
    return 2147483648 >>> a22;
}
f21(31);
