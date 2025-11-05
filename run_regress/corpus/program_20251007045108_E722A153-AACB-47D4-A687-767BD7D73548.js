if (!/^.-clef/u.test("𝄣-clef")) {
    throw "Should have matched string with leading non-BMP with BOL anchored . in RE";
}
if (!/c.lef/u.test("c𜍅lef")) {
    throw "Should have matched string with non-BMP with . in RE";
}
