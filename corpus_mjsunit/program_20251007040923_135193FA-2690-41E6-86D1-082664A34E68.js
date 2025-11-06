console.log("Verify that we don't hang while handling an exception for an undefined native function.");
myString = "The quick brown fox....";
for (i = 0; i < 1000; i++) {
    try {
        if (myString.search("end of comment */") != -1) {
            console.log("Incorrect index returned from String.search(), expected -1");
        }
    } catch(e20) {
        break;
    }
    if (i == 900) {
        const t11 = String.prototype;
        t11.search = undefined;
    }
}
console.log("Properly handled undefined native function");
