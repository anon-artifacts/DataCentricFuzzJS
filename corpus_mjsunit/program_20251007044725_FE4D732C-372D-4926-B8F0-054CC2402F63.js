var count = 0;
function f(a3) {
    try {
        if (a3 < 0) {
            throw "negative";
        }
        if (a3 & 1) {
            return "odd";
        }
        count++;
    } finally {
        count += 3;
    }
    return "even";
}
for (let i14 = 0; i14 < 15; i14++) {
    var res = f(i14);
    if ((i14 % 2) === 0) {
    } else {
    }
}
try {
    f(-1);
} catch(e33) {
}
