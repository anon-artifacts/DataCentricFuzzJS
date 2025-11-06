function regexpLastIndex() {
    var n = 0;
    var re = /hi/g;
    var ss = " hi hi hi hi hi hi hi hi hi hi";
    for (let i8 = 0; i8 < 10; i8++) {
        n += re.lastIndex > 0 ? 3 : 0;
        re.lastIndex = 0;
    }
    return n;
}
regexpLastIndex();
