function f0(a1, a2, a3) {
    if (!a1.test(a3)) {
        console.log((("FAILED -- regex: " + a1.toString()) + " should match codepoint: ") + a2.toString());
    }
}
f0(/\u0345/iu, 837);
f0(/\u0345/iu, 953);
f0(/\u0345/iu, 8126);
f0(/\u0399/iu, 953);
f0(/\u0399/iu, 8126);
f0(/\u03b9/iu, 837);
f0(/\u01f1/iu, 499);
f0(/\u037f/iu, 1011);
f0(/\u052c/iu, 1325);
f0(/\u052e/iu, 1327);
/\ua698/iu;
f0(/\ua69a/iu, 42651);
f0(/\ua798/iu, 42905);
f0(/\ua7ad/iu, 620);
f0(/\ua7b0/iu, 670);
f0(/\ua7b1/iu, 647);
f0(/\u0345/i, 837);
f0(/\u0399/i, 953);
f0(/\u03b9/i, 837);
f0(/\ua69a/i, 42651);
f0(/\ua79c/i, 42909);
f0(/\ua7ad/i, 620);
f0(/\u01c4/iu, 452);
f0(/\u01c5/iu, 453);
f0(/\u01c7/iu, 455);
f0(/\u01ca/iu, 459);
f0(/\u01cb/iu, 458);
f0(/\u01f1/iu, 499);
f0(/\u01f3/iu, 497);
f0(/\u01c7/i, 457);
f0(/\u01cb/i, 458);
f0(/\u01cb/i, 459);
f0(/\u01f2/i, 497);
f0(/\u01f2/i, 499);
f0(/\u01f3/i, 497);
f0(/\u03f3/i, 1011);
f0(/\u052b/iu, 1322);
f0(/\u13f0/iu, 1073741825);
f0(/\u13f9/iu, 5105);
f0(/\u13f3/iu, 5115);
f0(/\u13fb/iu, 5107);
f0(/\u13f4/iu, 5116);
f0(/\ua79b/iu, 42906);
