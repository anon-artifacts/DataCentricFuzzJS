function keyed_store(a1, a2, a3) {
    a1[a2] = a3;
}
function foo() {
    obj = {};
    obj.smi = 1;
    obj.dbl = 1.5;
    obj.obj = { a: 1 };
    keyed_store(obj, "smi", 100);
    keyed_store(obj, "dbl", 100);
    keyed_store(obj, "obj", 100);
    var smi_array = [5,1,1];
    keyed_store(smi_array, 1, 6);
    keyed_store(smi_array, 2, 1.2);
}
foo();
