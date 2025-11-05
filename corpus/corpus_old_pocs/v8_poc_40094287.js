var arr = [1];
for (var i = 1; i < 300; ++i) {
    var a2 = arr.map(function (v, i) {
        arr.push(1);
    });
    arr.some(arr.constructor);
    for (var j = 0; j < 1000000; ++j) {}
}
