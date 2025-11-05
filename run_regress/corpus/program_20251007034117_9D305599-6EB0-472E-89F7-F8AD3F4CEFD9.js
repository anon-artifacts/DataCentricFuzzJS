function write(a1) {
    print(a1 + "");
}
function allChars(a7, a8) {
    write((("AllChars : " + a7) + ". Length : ") + a8);
    for (let i16 = 0; i16 < a8; ++i16) {
        write(a7.charAt(i16));
    }
}
function firstChar(a24, a25) {
    if (a25 != false) {
        write(">> FirstChar : " + a24);
    }
    try {
        write(String.prototype.charAt.call(a24, 0));
    } catch(e37) {
        write("Got a exception. " + e37.message);
        return;
    }
    if (a25 != false) {
        write("<< FirstChar.");
    }
}
allChars("Hello", 5);
allChars("Hello" + "World", 10);
const v59 = new Number(10);
const v62 = new String("Hello");
const v67 = new Boolean(true);
const v69 = new Object();
var objs = [,0,1.1,v59,v62,true,false,v67,v69];
firstChar(null, false);
for (let i76 = 0; i76 < objs.length; ++i76) {
    firstChar(objs[i76]);
}
