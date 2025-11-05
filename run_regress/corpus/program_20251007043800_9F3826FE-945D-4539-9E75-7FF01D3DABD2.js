function foo(a1) {
    switch (a1) {
        case "ƑẦǏŁ":
        case "ÌŅ":
        case "ṤĻŐⱲ":
        case "ṔÄȚĦ":
            return 42;
        case "due":
        case "to":
        case "16-bit":
        case "strings":
            return 43;
        default:
            return 44;
    }
}
try { noInline(foo); } catch (e) {}
function cat(a16, a17) {
    return a16 + a17;
}
for (let i20 = 0; i20 < 10000; ++i20) {
    let v28;
    try { v28 = cat("16-", "bit"); } catch (e) {}
    let v29;
    try { v29 = foo(v28); } catch (e) {}
    var result = v29;
    if (result != 43) {
        throw "Error: bad result (1): " + result;
    }
    let v36;
    try { v36 = foo("ƑẦǏŁ"); } catch (e) {}
    if ((result = v36) != 42) {
        throw "Error: bad result (2): " + result;
    }
}
