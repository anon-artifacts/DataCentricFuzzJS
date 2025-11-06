function Migrator(a1) {
    return a1.foo;
}
function Loader(a4) {
    return a4[0];
}
var first_smi_array = [1];
var second_smi_array = [2];
var first_object_array = ["first"];
var second_object_array = ["string"];
first_smi_array.foo = 0;
second_smi_array.foo = 0;
first_object_array.foo = 0;
second_object_array.foo = 0;
for (let i23 = 0; i23 < 3; i23++) {
    Migrator(second_object_array);
}
first_smi_array.foo = 0.5;
print(second_smi_array.foo);
first_object_array.foo = 0.5;
Migrator(second_object_array);
for (let i37 = 0; i37 < 3; i37++) {
    Loader(second_smi_array);
}
Loader(second_object_array);
