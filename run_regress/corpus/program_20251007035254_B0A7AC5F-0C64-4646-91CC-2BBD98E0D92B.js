console.log("Regression test for https://bugs.webkit.org/show_bug.cgi?id=150372.");
var re = /.*(?:(?:(?:(?:(?:(?:)))))).*/;
re.exec("hello");
console.log("Did not crash.");
