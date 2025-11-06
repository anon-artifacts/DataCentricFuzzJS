const v2 = new Function(`\n  var a = ['p', 'q', 'r', 's', 't'];\n  var o = {p:1, q:2, r:3, s:4, t:5};\n  for (var i in o)\n    delete o[i];\n  for (var i of a)\n    o.hasOwnProperty(undefined + this, false);\n`);
v2();
