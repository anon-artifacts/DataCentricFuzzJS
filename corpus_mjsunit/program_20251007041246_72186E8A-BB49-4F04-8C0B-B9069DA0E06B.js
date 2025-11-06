function AccessObjArray(a1) {
    print(a1[0]);
}
function TwoProp(a6, a7) {
    this.a = a6;
    this.b = a7;
}
const v15 = new TwoProp({}, ["1",2,3]);
var obj1 = v15;
const v18 = new Object();
var obj2 = v18;
obj2[0] = 10;
AccessObjArray(obj2);
AccessObjArray(obj2);
AccessObjArray(obj2);
AccessObjArray(obj1);
