function write(a1) {
    print(a1);
}
write("Scenario 1");
var sl = "hello";
for (let i9 = 0; i9 < 8; i9++) {
    write(sl.propertyIsEnumerable(i9));
    write(sl.hasOwnProperty(i9));
    write(sl[i9]);
}
write("Scenario 2");
const v25 = new String("hello");
var so = v25;
so[1] = 10;
so[4] = 20;
so[7] = 30;
so.x = 20;
for (let i32 = 0; i32 < 8; i32++) {
    write(so.propertyIsEnumerable(1));
    write(so.hasOwnProperty(i32));
    write(so[i32]);
}
write(so.propertyIsEnumerable("x"));
write(so.hasOwnProperty("x"));
write(so["x"]);
