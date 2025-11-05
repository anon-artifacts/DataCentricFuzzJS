const v7 = new Array(1, 2, 3, 4, 5, 6);
var arr = v7;
print(arr);
var newarr = Array.apply(this, arr);
print(newarr);
