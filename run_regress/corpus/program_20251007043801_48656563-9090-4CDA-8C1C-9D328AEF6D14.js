A = [0,1,2,3,4,5,6,7,8,9,10];
function foo() {
    x = 1 << 26;
    x = x * x;
    x = (x + (5 << 2)) + (1 << 1);
    return A[x];
}
foo();
foo();
foo();
