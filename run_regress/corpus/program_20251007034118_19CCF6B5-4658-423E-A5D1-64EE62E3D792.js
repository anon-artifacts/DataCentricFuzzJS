const v2 = new Set("abcd");
var set = v2;
var iter = set[Symbol.iterator]();
set.delete("c");
set.delete("b");
