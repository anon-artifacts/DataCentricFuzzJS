function RunOneTruncationTest(a1, a2) {
    var temp = a1 | 0;
}
function RunAllTruncationTests() {
    RunOneTruncationTest(0, 0);
    RunOneTruncationTest(0.5, 0);
    RunOneTruncationTest(-0.5, 0);
    RunOneTruncationTest(1.5, 1);
    RunOneTruncationTest(-1.5, -1);
    RunOneTruncationTest(5.5, 5);
    RunOneTruncationTest(-5, -5);
    RunOneTruncationTest(NaN, 0);
    RunOneTruncationTest(Infinity, 0);
    RunOneTruncationTest(-NaN, 0);
    RunOneTruncationTest(-Infinity, 0);
    RunOneTruncationTest(4503600000000000, 372629504);
    RunOneTruncationTest(-4503600000000000, -372629504);
    RunOneTruncationTest(4503603922337791, -1);
    RunOneTruncationTest(-4503603922337791, 1);
    RunOneTruncationTest(4503601774854143, 2147483647);
    RunOneTruncationTest(-4503601774854143, -2147483647);
    RunOneTruncationTest(9007207844675582, -2);
    RunOneTruncationTest(-9007207844675582, 2);
    RunOneTruncationTest(2.4178527921507624e+24, -536870912);
    RunOneTruncationTest(-2.4178527921507624e+24, 536870912);
    RunOneTruncationTest(2.417853945072267e+24, -536870912);
    RunOneTruncationTest(-2.417853945072267e+24, 536870912);
    RunOneTruncationTest(4.835705584301525e+24, -1073741824);
    RunOneTruncationTest(-4.835705584301525e+24, 1073741824);
    RunOneTruncationTest(4.835707890144534e+24, -1073741824);
    RunOneTruncationTest(-4.835707890144534e+24, 1073741824);
    RunOneTruncationTest(9.67141116860305e+24, -2147483648);
    RunOneTruncationTest(-9.67141116860305e+24, -2147483648);
    RunOneTruncationTest(9.671415780289068e+24, -2147483648);
    RunOneTruncationTest(-9.671415780289068e+24, -2147483648);
}
RunAllTruncationTests();
RunAllTruncationTests();
RunAllTruncationTests();
RunAllTruncationTests();
