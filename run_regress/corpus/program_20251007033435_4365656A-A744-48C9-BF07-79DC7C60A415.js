function setProp(a1, a2, a3) {
    a1[a2] = a3;
}
var obj = [];
setProp(obj, "length", 1);
setProp(obj, 0, 5);
obj.length;
