console.log("Test regular expression processing with many capturing brackets (200).");
var count = 200;
var regexp = "";
for (let i8 = 0; i8 < count; ++i8) {
    regexp += "(";
}
regexp += "hello";
for (let i16 = 0; i16 < count; ++i16) {
    regexp += ")";
}
const v23 = new Array();
var manyHellosArray = v23;
for (let i26 = 0; i26 <= count; ++i26) {
    manyHellosArray[i26] = "hello";
}
const v33 = new RegExp(regexp);
var manyBracketsRegExp = v33;
("hello").match(manyBracketsRegExp);
console.log("");
