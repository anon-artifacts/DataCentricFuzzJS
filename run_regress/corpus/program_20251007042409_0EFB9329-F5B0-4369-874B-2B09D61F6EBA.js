if (typeof schedulegc != "undefined") {
    const t1 = Function("        x = (function*() { yield })();        new Set(x);        schedulegc(1);        print( /x/ );        for (p in x) {}    ");
    t1();
}
