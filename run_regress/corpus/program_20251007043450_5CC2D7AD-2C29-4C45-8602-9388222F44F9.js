function f() {
    var propNames = ["a","b","c","d","e","f","g","h","i","j","x","y"];
    var arr = [];
    for (let i18 = 0; i18 < 64; i18++) {
        arr.push({ x: 1, y: 2 });
    }
    for (let i29 = 0; i29 < 64; i29++) {
        for (let i36 = 0; i36 < propNames.length; i36++) {
            const t8 = arr[i29];
            t8[propNames[i36]] = i36;
        }
    }
    var res = 0;
    for (let i47 = 0; i47 < 100000; i47++) {
        var o = arr[i47 % 64];
        var p = propNames[i47 % propNames.length];
        res += o[p];
    }
}
f();
