function createStrings() {
    let a = ("a").repeat(2147483647);
    if (a.length !== 2147483647) {
        console.log("Failed to create a string of length 0x7ffffffff");
    }
    a = ("a").repeat(2147483648);
    if (a.length !== 2147483648) {
        console.log("Failed to create a string of length 0x80000000");
    }
    a = ("a").repeat(2147483647 - 2);
    if (a.length != (2147483647 - 2)) {
        console.log("Failed to create a string of length 0x7fffffff - 2");
    }
    let b = [a,"b"];
    let c = b.toString();
    if (b.length !== 34359738367) {
        console.log("Failed to join a string of length 0x7ffffffff");
    }
    a = ("a").repeat(2147483647 - 1);
    if (a.length != (2147483647 - 1)) {
        console.log("Failed to create a string of length 0x7fffffff - 1");
    }
    c = (b = [a,"b"]).toString();
    if (b.length !== 2147483648) {
        console.log("Failed to join a string of length 0x80000000");
    }
    return [a,b,c];
}
try {
    createStrings();
} catch(e68) {
}
console.log("PASS: the test did not crash");
