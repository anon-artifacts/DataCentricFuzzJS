function f0(a1) {
    a1.prop1 = 1;
}
var addProperty = f0;
function TwoProperty(a5, a6) {
    this.prop0 = a5;
    this.prop2 = a6;
}
const v9 = new TwoProperty();
obj6 = v9;
Object.create(obj6);
addProperty(obj6);
print("PASSED");
