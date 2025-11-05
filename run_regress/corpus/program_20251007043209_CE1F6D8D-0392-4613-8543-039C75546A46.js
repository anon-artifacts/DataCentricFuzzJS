function foo(a1) {
    switch (a1) {
        case "a":
            return 1;
        case "ab":
            return 2;
        case "abc":
            return 3;
        case "abcd":
            return 4;
        default:
            return 10;
    }
}
var strings = ["a","ab","abc","abcd","abcde"];
var result = 0;
for (let i21 = 0; i21 < 1000000; ++i21) {
    result += foo(strings[i21 % strings.length]);
}
if (result != 4000000) {
    throw "Bad result: " + result;
}
