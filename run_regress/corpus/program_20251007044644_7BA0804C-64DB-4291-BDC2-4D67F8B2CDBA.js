function SetArrayIndex(a1, a2) {
    a1[a2] = "blah";
}
function test_obj_proto(a5) {
    var obj = Object.create(a5);
    obj[0] = 0;
    SetArrayIndex(obj, 0);
    SetArrayIndex(obj, 1);
    print(obj[1]);
}
var obj = {};
Object.defineProperty(obj, "1", { value: "const", writable: false });
test_obj_proto(obj);
