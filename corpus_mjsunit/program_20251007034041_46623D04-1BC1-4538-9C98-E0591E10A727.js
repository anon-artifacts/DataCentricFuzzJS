try {
    var str = ("+").repeat(2147483648);
    str = str.replace(str, "+");
    console.log("FAIL: Was expecting Out of Memory exception.");
} catch(e9) {
    if (e9.number == -2146828281) {
        console.log("PASS");
    } else {
        console.log("FAIL: Got the wrong exception code.");
    }
}
