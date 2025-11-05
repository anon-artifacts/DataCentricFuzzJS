function f() {
    x = arguments;
    delete x[1];
}
f(0, 1);
gc();
x.length;
0 in x;
1 in x;
