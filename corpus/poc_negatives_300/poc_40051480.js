function main() {
  function trigger(str) {
    var x = 0;
    var k = 0;
    str = str | 0;
    str = Math.min(str, 2);
    str = Math.max(str, 1);
    if (str == 1) {
      str = "30";
    }
    for (var i = str; i < 0x1000; i -= x) {
        if (++k > 1) {
          break;
        }
    }

    if (typeof i == 'string') {
      i = 1;
    }

    i += 1;
    i >>= 1;
    i += 2;
    i >>= 1;

    var array = [0.1, 0.1, 0.1, 0.1];
    var array2 = [];
    return [array[i], array, array2];
  };

  for (let i = 0; i < 20000 + 1; ++i) {
    result = trigger(1 + i % 2);
  }

  console.log(result[0]);
}

%NeverOptimizeFunction(main);
main();