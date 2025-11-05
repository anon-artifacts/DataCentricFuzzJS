function StrictCompare(a1) {
    return a1 === Object(a1);
}
const v6 = new Object();
var obj = v6;
const v8 = new Object();
var obj2 = v8;
obj == obj;
StrictCompare(obj);
StrictCompare("foo");
