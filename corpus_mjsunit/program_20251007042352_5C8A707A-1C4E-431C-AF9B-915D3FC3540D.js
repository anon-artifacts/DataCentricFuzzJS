function NegativeIndexAndDictionaryElements() {
    function f(a2, a3) {
        return a2[a3];
    }
    f({}, 0);
    f({}, 0);
    var o = {};
    o[1000000] = "dictionary";
    var c = -21;
    o[c] = "foo";
    f(o, c);
}
NegativeIndexAndDictionaryElements();
