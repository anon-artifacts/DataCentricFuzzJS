var obj3 = { b: 1 };
function f3() {
    var obj7 = obj3;
    var obj8 = obj7;
    var sum = 0;
    for (let i9 = 0; i9 < 2; i9++) {
        sum += obj7.b;
        sum += obj8.b;
        obj8.b = 3;
        sum += obj7.b;
    }
    print(sum);
}
f3();
