function foo(a1) {
    return a1.charCodeAt(12);
}
var extern = "internalized dummy";
foo(extern = "1234567890qiaipppiúöäöáœba" + "jalsdjasldjasdlasjdalsdjasldk");
foo(extern);
foo(extern);
