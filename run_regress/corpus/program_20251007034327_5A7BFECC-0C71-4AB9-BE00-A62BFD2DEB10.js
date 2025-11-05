function first(a1) {
    var re = /.*b(cd)/;
    for (let i5 = 0; i5 < 10; i5++) {
        re.test(a1);
    }
}
first("1234\nabcdefg\n1234");
RegExp.lastMatch;
RegExp.$1;
RegExp.input;
RegExp.leftContext;
RegExp.rightContext;
RegExp.lastParen;
function second(a28) {
    var re = /bcd.*/;
    for (let i32 = 0; i32 < 10; i32++) {
        re.test(a28);
    }
}
second("1234\nabcdefg\n1234");
RegExp.lastMatch;
RegExp.$1;
RegExp.input;
RegExp.leftContext;
RegExp.rightContext;
RegExp.lastParen;
function third(a54) {
    var re = /.*bcd.*/;
    for (let i58 = 0; i58 < 10; i58++) {
        re.test(a54);
    }
}
third("1234\nabcdefg\n1234");
RegExp.lastMatch;
RegExp.$1;
RegExp.input;
RegExp.leftContext;
RegExp.rightContext;
RegExp.lastParen;
