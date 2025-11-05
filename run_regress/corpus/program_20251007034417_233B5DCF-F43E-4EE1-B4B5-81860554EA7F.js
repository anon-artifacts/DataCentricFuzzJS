function Test(a1) {
    print(parseInt(a1).toString());
    print(parseFloat(a1).toString());
    print(parseInt(-a1).toString());
    print(parseFloat(-a1).toString());
}
Test(4.000123125421804e+50);
Test(4.000123125421804e+21);
Test(4.000123125421804e+20);
Test(1e+21);
Test(1e+20);
Test(Infinity);
Test(NaN);
Test(1e-05);
Test(1e-06);
Test(1e-07);
Test(1e-16);
