function TwoProperty(a1, a2) {
    this.prop2 = a2;
    this.prop1 = a1;
}
const v7 = new TwoProperty(1, 2);
var obj = v7;
var protoObj = Object.create(obj);
print(protoObj.prop1);
print(protoObj.prop2);
obj.prop3 = 10;
print(protoObj.prop1);
print(protoObj.prop2);
print(protoObj.prop3);
