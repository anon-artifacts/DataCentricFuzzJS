function store(a1) {
    var re = /(?=[d#.])/;
    re.a = a1;
    return re;
}
var re1 = store(undefined);
var re2 = store(42);
re1.a;
re2.a;
