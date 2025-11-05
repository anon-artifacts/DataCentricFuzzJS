function test() {
    var unscopables = Array.prototype[Symbol.unscopables];
    if (!unscopables) {
        return false;
    }
    var ns = ("find,findIndex,fill,copyWithin,entries,keys,values").split(",");
    for (let i14 = 0; i14 < ns.length; i14++) {
        if (Array.prototype[ns[i14]] && !unscopables[ns[i14]]) {
            return false;
        }
    }
    return true;
}
if (!test()) {
    const v33 = new Error("Test failed");
    throw v33;
}
