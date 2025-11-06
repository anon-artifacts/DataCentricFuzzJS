var a = [1,2.2,3.3];
const t1 = Array.prototype;
t1[4] = 10;
function Test() {
    a.reverse();
    print(a);
}
Test();
