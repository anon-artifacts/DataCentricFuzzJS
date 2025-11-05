function f1(a2, a3) {
    return "";
}
JSON.parse("[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]", f1);
str = "[";
for (i = 0; i < 2048; i++) {
    str += "1,";
}
str += "1]";
JSON.parse(str);
