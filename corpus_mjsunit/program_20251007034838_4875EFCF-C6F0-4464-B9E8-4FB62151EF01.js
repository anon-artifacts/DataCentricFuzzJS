const v14 = new Map([["a",0],["b",1],["c",2],["d",3]]);
var map = v14;
var iter = map[Symbol.iterator]();
["a",0];
["b",1];
map.delete("c");
map.delete("b");
["d",3];
