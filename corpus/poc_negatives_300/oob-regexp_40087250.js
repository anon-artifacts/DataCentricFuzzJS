const str = '2016-01-02';

function t() {
  var re;
  function toDictMode() {
    for (var i = 0; i < 100; i++) {  // Loop is required.
      re.x = 42;
      delete re.x;
    }
    return 0;
  }

  re = /-/g;  // Needs to be global.
  re.lastIndex = {valueOf : toDictMode};
  return re.exec(str);
}

for (var q = 0; q < 10000; q++) {
  print(q);
  t();
}
