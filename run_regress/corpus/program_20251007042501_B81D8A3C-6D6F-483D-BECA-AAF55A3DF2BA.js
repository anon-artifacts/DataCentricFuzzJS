function recompile() {
}
function bar() {
    for (let i3 = 0; i3 < 50; i3++) {
        const v14 = new Function(("recompile(arguments[0] + " + i3) + "); return arguments[0]");
        var foo = v14;
        foo.apply(null, [i3]);
    }
}
bar();
