  var s = "a".repeat(0xAAAAAAA);  
  print("len: ", new Intl.ListFormat().format(Array(16).fill(s)).length);  